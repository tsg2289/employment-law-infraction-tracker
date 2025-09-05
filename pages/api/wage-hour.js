import { createServerClient } from '@supabase/ssr'
import { trim, safeDate } from '../../lib/database'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Create Supabase client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return req.cookies[name]
        },
        set(name, value, options) {
          res.setHeader('Set-Cookie', `${name}=${value}; Path=/; HttpOnly; SameSite=Lax; ${options?.secure ? 'Secure;' : ''}`)
        },
        remove(name, options) {
          res.setHeader('Set-Cookie', `${name}=; Path=/; HttpOnly; SameSite=Lax; Expires=Thu, 01 Jan 1970 00:00:00 GMT`)
        },
      },
    }
  )

  // Get authenticated user
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  
  if (authError || !user) {
    return res.status(401).json({ error: 'Authentication required' })
  }

  const {
    caseId, name, email, employer, position,
    overtimeUnpaid, mealBreakIssues, restBreakIssues, misclassification,
    minimumWageIssues, unpaidFinalWages, offTheClock, wageStatementIssues,
    startDate, endDate, description
  } = req.body

  try {
    // Insert wage hour violation data with user_id for RLS
    const { data, error } = await supabase
      .from('wage_hour_violations')
      .insert({
        user_id: user.id,
        case_id: caseId,
        name: trim(name),
        email: trim(email),
        employer: trim(employer),
        position: trim(position),
        overtime_unpaid: !!overtimeUnpaid,
        meal_break_issues: !!mealBreakIssues,
        rest_break_issues: !!restBreakIssues,
        misclassification: !!misclassification,
        minimum_wage_issues: !!minimumWageIssues,
        unpaid_final_wages: !!unpaidFinalWages,
        off_the_clock: !!offTheClock,
        wage_statement_issues: !!wageStatementIssues,
        start_date: safeDate(startDate),
        end_date: safeDate(endDate),
        description: trim(description)
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return res.status(500).json({ error: 'Failed to save wage hour info' })
    }

    res.status(200).json({ ok: true, data })
  } catch (error) {
    console.error('Error saving wage hour:', error)
    res.status(500).json({ error: 'Failed to save wage hour info' })
  }
}
