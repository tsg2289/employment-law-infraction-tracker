const { trim, safeDate } = require('../../lib/database');

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
    // Mock save - in production, replace with real database
    console.log('Saving retaliation wrongful termination:', {
      caseId, name: trim(name), email: trim(email), employer: trim(employer), position: trim(position),
      protectedActivities: (protectedActivities || []).join('; '),
      adverseActions: (adverseActions || []).join('; '),
      dateOfAdverseAction: safeDate(dateOfAdverseAction),
      reasonGiven: trim(reasonGiven), description: trim(description)
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error saving retaliation wrongful termination:', error);
    res.status(500).json({ error: 'Failed to save retaliation wrongful termination info' });
  }
}
