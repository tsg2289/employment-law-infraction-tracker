const { getDatabase, trim, safeDate } = require('../../lib/database');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    caseId, name, email, employer, position,
    protectedActivities, adverseActions, dateOfAdverseAction,
    reasonGiven, description
  } = req.body;

  try {
    const db = getDatabase();
    
    const stmt = db.prepare(`
      INSERT INTO retaliation_wrongful_termination (
        case_id, name, email, employer, position,
        protected_activities, adverse_actions, date_of_adverse_action,
        reason_given, description
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      caseId, trim(name), trim(email), trim(employer), trim(position),
      (protectedActivities || []).join('; '), (adverseActions || []).join('; '),
      safeDate(dateOfAdverseAction), trim(reasonGiven), trim(description)
    );

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error saving retaliation wrongful termination:', error);
    res.status(500).json({ error: 'Failed to save retaliation wrongful termination info' });
  }
}
