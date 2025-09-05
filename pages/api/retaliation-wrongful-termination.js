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
    protectedActivities, adverseActions, dateOfAdverseAction,
    reasonGiven, description
  } = req.body

  try {
    // Insert retaliation wrongful termination violation data with user_id for RLS
    const { data, error } = await supabase
      .from('retaliation_wrongful_termination_violations')
      .insert({
        user_id: user.id,
        case_id: caseId,
        name: trim(name),
        email: trim(email),
        employer: trim(employer),
        position: trim(position),
        filed_complaint: protectedActivities?.includes('Filed complaint'),
        requested_accommodation: protectedActivities?.includes('Requested accommodation'),
        took_protected_leave: protectedActivities?.includes('Took protected leave'),
        reported_safety_violation: protectedActivities?.includes('Reported safety violation'),
        whistleblower_activity: protectedActivities?.includes('Whistleblower activity'),
        termination_reason: trim(reasonGiven),
        start_date: safeDate(dateOfAdverseAction),
        end_date: safeDate(dateOfAdverseAction),
        description: trim(description)
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return res.status(500).json({ error: 'Failed to save retaliation wrongful termination info' })
    }

    res.status(200).json({ ok: true, data })
  } catch (error) {
    console.error('Error saving retaliation wrongful termination:', error)
    res.status(500).json({ error: 'Failed to save retaliation wrongful termination info' })
  }
}
