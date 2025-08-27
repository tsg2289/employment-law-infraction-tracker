const Database = require('better-sqlite3');
const path = require('path');

let db = null;

function getDatabase() {
  if (!db) {
    // For Vercel, we'll use an in-memory database or external service
    // For local development, use a file-based database
    const dbPath = process.env.VERCEL ? ':memory:' : path.join(process.cwd(), 'employment_infractions.db');
    db = new Database(dbPath);
    
    initializeDatabase();
  }
  return db;
}

function initializeDatabase() {
  // Employees table
  db.exec(`CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    case_id TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT,
    employer TEXT NOT NULL,
    position TEXT
  )`);

  // Wage & Hour table
  db.exec(`CREATE TABLE IF NOT EXISTS wage_hour (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    case_id TEXT NOT NULL,
    name TEXT,
    email TEXT,
    employer TEXT,
    position TEXT,
    overtime_unpaid INTEGER DEFAULT 0,
    meal_break_issues INTEGER DEFAULT 0,
    rest_break_issues INTEGER DEFAULT 0,
    misclassification INTEGER DEFAULT 0,
    minimum_wage_issues INTEGER DEFAULT 0,
    unpaid_final_wages INTEGER DEFAULT 0,
    off_the_clock INTEGER DEFAULT 0,
    wage_statement_issues INTEGER DEFAULT 0,
    start_date TEXT,
    end_date TEXT,
    description TEXT,
    FOREIGN KEY (case_id) REFERENCES employees (case_id)
  )`);

  // Discrimination & Harassment table
  db.exec(`CREATE TABLE IF NOT EXISTS discrimination_harassment (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    case_id TEXT NOT NULL,
    name TEXT,
    email TEXT,
    employer TEXT,
    position TEXT,
    sexual_harassment INTEGER DEFAULT 0,
    hostile_work_environment INTEGER DEFAULT 0,
    failure_to_accommodate INTEGER DEFAULT 0,
    failure_to_interactive_process INTEGER DEFAULT 0,
    protected_classes TEXT,
    start_date TEXT,
    end_date TEXT,
    description TEXT,
    FOREIGN KEY (case_id) REFERENCES employees (case_id)
  )`);

  // Retaliation & Wrongful Termination table
  db.exec(`CREATE TABLE IF NOT EXISTS retaliation_wrongful_termination (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    case_id TEXT NOT NULL,
    name TEXT,
    email TEXT,
    employer TEXT,
    position TEXT,
    protected_activities TEXT,
    adverse_actions TEXT,
    date_of_adverse_action TEXT,
    reason_given TEXT,
    description TEXT,
    FOREIGN KEY (case_id) REFERENCES employees (case_id)
  )`);

  // Leave of Absence table
  db.exec(`CREATE TABLE IF NOT EXISTS leave_of_absence (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    case_id TEXT NOT NULL,
    name TEXT,
    email TEXT,
    employer TEXT,
    position TEXT,
    leave_types TEXT,
    leave_denied INTEGER DEFAULT 0,
    not_reinstated INTEGER DEFAULT 0,
    retaliation INTEGER DEFAULT 0,
    start_date TEXT,
    end_date TEXT,
    description TEXT,
    FOREIGN KEY (case_id) REFERENCES employees (case_id)
  )`);

  // Workplace Safety table
  db.exec(`CREATE TABLE IF NOT EXISTS workplace_safety (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    case_id TEXT NOT NULL,
    name TEXT,
    email TEXT,
    employer TEXT,
    position TEXT,
    hazards TEXT,
    reported_to TEXT,
    retaliation INTEGER DEFAULT 0,
    start_date TEXT,
    end_date TEXT,
    description TEXT,
    FOREIGN KEY (case_id) REFERENCES employees (case_id)
  )`);
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
