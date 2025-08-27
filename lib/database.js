// Simple in-memory storage for demo purposes
// In production, replace with external database service like Supabase, PlanetScale, etc.
let storage = {
  employees: [],
  wage_hour: [],
  discrimination_harassment: [],
  retaliation_wrongful_termination: [],
  leave_of_absence: [],
  workplace_safety: []
};

function getDatabase() {
  return {
    prepare: (sql) => ({
      run: (...params) => {
        // Simple mock implementation for demo
        console.log('Mock DB operation:', sql, params);
        return { lastInsertRowid: Math.floor(Math.random() * 1000) };
      },
      get: (param) => {
        // Mock get operation
        console.log('Mock DB get:', param);
        return null;
      }
    }),
    exec: (sql) => {
      console.log('Mock DB exec:', sql);
    }
  };
}

function initializeDatabase() {
  // Mock initialization - in production, use a real database
  console.log('Database initialized (mock)');
}

// Utility functions
function generateCaseId() {
  const timestamp = new Date().getTime().toString(36);
  const random = Math.random().toString(36).substring(2, 6);
  return timestamp + random;
}

function trim(s) {
  return (s || '').toString().trim();
}

function safeDate(s) {
  if (!s) return null;
  try {
    const date = new Date(s);
    return date.toISOString().split('T')[0]; // Return YYYY-MM-DD format
  } catch (e) {
    return null;
  }
}

module.exports = {
  getDatabase,
  generateCaseId,
  trim,
  safeDate
};
