const { getDatabase, trim, safeDate } = require('../../lib/database');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    caseId, name, email, employer, position,
    sexualHarassment, hostileWorkEnvironment, failureToAccommodate,
    failureToInteractiveProcess, protectedClasses,
    startDate, endDate, description
  } = req.body;

  try {
    const db = getDatabase();
    
    const stmt = db.prepare(`
      INSERT INTO discrimination_harassment (
        case_id, name, email, employer, position,
        sexual_harassment, hostile_work_environment, failure_to_accommodate,
        failure_to_interactive_process, protected_classes,
        start_date, end_date, description
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      caseId, trim(name), trim(email), trim(employer), trim(position),
      !!sexualHarassment ? 1 : 0, !!hostileWorkEnvironment ? 1 : 0, !!failureToAccommodate ? 1 : 0,
      !!failureToInteractiveProcess ? 1 : 0, (protectedClasses || []).join('; '),
      safeDate(startDate), safeDate(endDate), trim(description)
    );

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error saving discrimination harassment:', error);
    res.status(500).json({ error: 'Failed to save discrimination harassment info' });
  }
}
