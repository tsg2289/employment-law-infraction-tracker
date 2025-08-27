const { getDatabase, trim, safeDate } = require('../../lib/database');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    caseId, name, email, employer, position,
    hazards, reportedTo, retaliation,
    startDate, endDate, description
  } = req.body;

  try {
    const db = getDatabase();
    
    const stmt = db.prepare(`
      INSERT INTO workplace_safety (
        case_id, name, email, employer, position,
        hazards, reported_to, retaliation,
        start_date, end_date, description
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      caseId, trim(name), trim(email), trim(employer), trim(position),
      (hazards || []).join('; '), (reportedTo || []).join('; '), !!retaliation ? 1 : 0,
      safeDate(startDate), safeDate(endDate), trim(description)
    );

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error saving workplace safety:', error);
    res.status(500).json({ error: 'Failed to save workplace safety info' });
  }
}
