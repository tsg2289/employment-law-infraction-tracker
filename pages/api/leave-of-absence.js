const { getDatabase, trim, safeDate } = require('../../lib/database');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    caseId, name, email, employer, position,
    leaveTypes, leaveDenied, notReinstated, retaliation,
    startDate, endDate, description
  } = req.body;

  try {
    const db = getDatabase();
    
    const stmt = db.prepare(`
      INSERT INTO leave_of_absence (
        case_id, name, email, employer, position,
        leave_types, leave_denied, not_reinstated, retaliation,
        start_date, end_date, description
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      caseId, trim(name), trim(email), trim(employer), trim(position),
      (leaveTypes || []).join('; '), !!leaveDenied ? 1 : 0, !!notReinstated ? 1 : 0, !!retaliation ? 1 : 0,
      safeDate(startDate), safeDate(endDate), trim(description)
    );

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error saving leave of absence:', error);
    res.status(500).json({ error: 'Failed to save leave of absence info' });
  }
}
