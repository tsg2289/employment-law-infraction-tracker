import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables for server operations')
}

// Server-side Supabase client with service role key for admin operations
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

export { supabaseAdmin }

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
