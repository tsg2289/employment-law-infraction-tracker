const { getDatabase, trim, safeDate } = require('../../lib/database');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    caseId, name, email, employer, position,
    overtimeUnpaid, mealBreakIssues, restBreakIssues, misclassification,
    minimumWageIssues, unpaidFinalWages, offTheClock, wageStatementIssues,
    startDate, endDate, description
  } = req.body;

  try {
    const db = getDatabase();
    
    const stmt = db.prepare(`
      INSERT INTO wage_hour (
        case_id, name, email, employer, position,
        overtime_unpaid, meal_break_issues, rest_break_issues, misclassification,
        minimum_wage_issues, unpaid_final_wages, off_the_clock, wage_statement_issues,
        start_date, end_date, description
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      caseId, trim(name), trim(email), trim(employer), trim(position),
      !!overtimeUnpaid ? 1 : 0, !!mealBreakIssues ? 1 : 0, !!restBreakIssues ? 1 : 0, !!misclassification ? 1 : 0,
      !!minimumWageIssues ? 1 : 0, !!unpaidFinalWages ? 1 : 0, !!offTheClock ? 1 : 0, !!wageStatementIssues ? 1 : 0,
      safeDate(startDate), safeDate(endDate), trim(description)
    );

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error saving wage hour:', error);
    res.status(500).json({ error: 'Failed to save wage hour info' });
  }
}
