const { getDatabase, generateCaseId, trim } = require('../../lib/database');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, employer, position } = req.body;
  
  if (!name || !employer) {
    return res.status(400).json({ error: 'Name and Employer are required' });
  }

  try {
    const db = getDatabase();
    const caseId = generateCaseId();
    
    const stmt = db.prepare(`
      INSERT INTO employees (case_id, name, email, employer, position)
      VALUES (?, ?, ?, ?, ?)
    `);
    
    stmt.run(caseId, trim(name), trim(email), trim(employer), trim(position));
    
    res.status(200).json({ caseId, success: true });
  } catch (error) {
    console.error('Error saving employee:', error);
    res.status(500).json({ error: 'Failed to save employee info' });
  }
}
