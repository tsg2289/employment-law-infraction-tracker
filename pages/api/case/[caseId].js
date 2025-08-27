// Mock case retrieval - in production, replace with real database

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { caseId } = req.query;
  
  try {
    // Mock case retrieval - in production, replace with real database
    console.log('Retrieving case data for:', caseId);
    
    const result = {
      employee: {
        case_id: caseId,
        name: 'Mock Employee',
        email: 'mock@example.com',
        employer: 'Mock Company',
        position: 'Mock Position'
      }
    };

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching case data:', error);
    res.status(500).json({ error: 'Failed to fetch case data' });
  }
}
