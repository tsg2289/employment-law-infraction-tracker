const { trim, safeDate } = require('../../lib/database');

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
    // Mock save - in production, replace with real database
    console.log('Saving workplace safety:', {
      caseId, name: trim(name), email: trim(email), employer: trim(employer), position: trim(position),
      hazards: (hazards || []).join('; '),
      reportedTo: (reportedTo || []).join('; '),
      retaliation: !!retaliation,
      startDate: safeDate(startDate), endDate: safeDate(endDate), description: trim(description)
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error saving workplace safety:', error);
    res.status(500).json({ error: 'Failed to save workplace safety info' });
  }
}
