const { trim, safeDate } = require('../../lib/database');

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
    // Mock save - in production, replace with real database
    console.log('Saving leave of absence:', {
      caseId, name: trim(name), email: trim(email), employer: trim(employer), position: trim(position),
      leaveTypes: (leaveTypes || []).join('; '),
      leaveDenied: !!leaveDenied, notReinstated: !!notReinstated, retaliation: !!retaliation,
      startDate: safeDate(startDate), endDate: safeDate(endDate), description: trim(description)
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error saving leave of absence:', error);
    res.status(500).json({ error: 'Failed to save leave of absence info' });
  }
}
