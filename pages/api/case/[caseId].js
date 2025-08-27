const { getDatabase } = require('../../../lib/database');

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { caseId } = req.query;
  
  try {
    const db = getDatabase();
    
    const queries = [
      { table: 'employees', key: 'employee' },
      { table: 'wage_hour', key: 'wageHour' },
      { table: 'discrimination_harassment', key: 'discriminationHarassment' },
      { table: 'retaliation_wrongful_termination', key: 'retaliationWrongfulTermination' },
      { table: 'leave_of_absence', key: 'leaveOfAbsence' },
      { table: 'workplace_safety', key: 'workplaceSafety' }
    ];

    const result = {};

    queries.forEach(({ table, key }) => {
      const stmt = db.prepare(`SELECT * FROM ${table} WHERE case_id = ? ORDER BY timestamp DESC LIMIT 1`);
      const row = stmt.get(caseId);
      if (row) {
        result[key] = row;
      }
    });

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching case data:', error);
    res.status(500).json({ error: 'Failed to fetch case data' });
  }
}
