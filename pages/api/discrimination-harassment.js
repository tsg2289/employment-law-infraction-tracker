const { trim, safeDate } = require('../../lib/database');

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
    // Mock save - in production, replace with real database
    console.log('Saving discrimination harassment:', {
      caseId, name: trim(name), email: trim(email), employer: trim(employer), position: trim(position),
      sexualHarassment, hostileWorkEnvironment, failureToAccommodate,
      failureToInteractiveProcess, protectedClasses: (protectedClasses || []).join('; '),
      startDate: safeDate(startDate), endDate: safeDate(endDate), description: trim(description)
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error saving discrimination harassment:', error);
    res.status(500).json({ error: 'Failed to save discrimination harassment info' });
  }
}
