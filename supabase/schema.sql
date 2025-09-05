-- Enable Row Level Security on auth.users
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create employees table
CREATE TABLE IF NOT EXISTS employees (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  case_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  employer TEXT NOT NULL,
  position TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create wage_hour_violations table
CREATE TABLE IF NOT EXISTS wage_hour_violations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  case_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  employer TEXT NOT NULL,
  position TEXT,
  overtime_unpaid BOOLEAN DEFAULT FALSE,
  meal_break_issues BOOLEAN DEFAULT FALSE,
  rest_break_issues BOOLEAN DEFAULT FALSE,
  misclassification BOOLEAN DEFAULT FALSE,
  minimum_wage_issues BOOLEAN DEFAULT FALSE,
  unpaid_final_wages BOOLEAN DEFAULT FALSE,
  off_the_clock BOOLEAN DEFAULT FALSE,
  wage_statement_issues BOOLEAN DEFAULT FALSE,
  start_date DATE,
  end_date DATE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create discrimination_harassment_violations table
CREATE TABLE IF NOT EXISTS discrimination_harassment_violations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  case_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  employer TEXT NOT NULL,
  position TEXT,
  sexual_harassment BOOLEAN DEFAULT FALSE,
  hostile_work_environment BOOLEAN DEFAULT FALSE,
  failure_to_accommodate BOOLEAN DEFAULT FALSE,
  failure_to_interactive_process BOOLEAN DEFAULT FALSE,
  protected_classes TEXT,
  start_date DATE,
  end_date DATE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create retaliation_wrongful_termination_violations table
CREATE TABLE IF NOT EXISTS retaliation_wrongful_termination_violations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  case_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  employer TEXT NOT NULL,
  position TEXT,
  filed_complaint BOOLEAN DEFAULT FALSE,
  requested_accommodation BOOLEAN DEFAULT FALSE,
  took_protected_leave BOOLEAN DEFAULT FALSE,
  reported_safety_violation BOOLEAN DEFAULT FALSE,
  whistleblower_activity BOOLEAN DEFAULT FALSE,
  termination_reason TEXT,
  start_date DATE,
  end_date DATE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create leave_of_absence_violations table
CREATE TABLE IF NOT EXISTS leave_of_absence_violations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  case_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  employer TEXT NOT NULL,
  position TEXT,
  leave_types TEXT,
  leave_denied BOOLEAN DEFAULT FALSE,
  not_reinstated BOOLEAN DEFAULT FALSE,
  retaliation BOOLEAN DEFAULT FALSE,
  start_date DATE,
  end_date DATE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create workplace_safety_violations table
CREATE TABLE IF NOT EXISTS workplace_safety_violations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  case_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  employer TEXT NOT NULL,
  position TEXT,
  hazards TEXT,
  reported_to TEXT,
  retaliation BOOLEAN DEFAULT FALSE,
  start_date DATE,
  end_date DATE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security on all tables
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE wage_hour_violations ENABLE ROW LEVEL SECURITY;
ALTER TABLE discrimination_harassment_violations ENABLE ROW LEVEL SECURITY;
ALTER TABLE retaliation_wrongful_termination_violations ENABLE ROW LEVEL SECURITY;
ALTER TABLE leave_of_absence_violations ENABLE ROW LEVEL SECURITY;
ALTER TABLE workplace_safety_violations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for employees table
CREATE POLICY "Users can only see their own employees" ON employees
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can only insert their own employees" ON employees
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can only update their own employees" ON employees
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can only delete their own employees" ON employees
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for wage_hour_violations table
CREATE POLICY "Users can only see their own wage hour violations" ON wage_hour_violations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can only insert their own wage hour violations" ON wage_hour_violations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can only update their own wage hour violations" ON wage_hour_violations
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can only delete their own wage hour violations" ON wage_hour_violations
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for discrimination_harassment_violations table
CREATE POLICY "Users can only see their own discrimination harassment violations" ON discrimination_harassment_violations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can only insert their own discrimination harassment violations" ON discrimination_harassment_violations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can only update their own discrimination harassment violations" ON discrimination_harassment_violations
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can only delete their own discrimination harassment violations" ON discrimination_harassment_violations
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for retaliation_wrongful_termination_violations table
CREATE POLICY "Users can only see their own retaliation wrongful termination violations" ON retaliation_wrongful_termination_violations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can only insert their own retaliation wrongful termination violations" ON retaliation_wrongful_termination_violations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can only update their own retaliation wrongful termination violations" ON retaliation_wrongful_termination_violations
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can only delete their own retaliation wrongful termination violations" ON retaliation_wrongful_termination_violations
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for leave_of_absence_violations table
CREATE POLICY "Users can only see their own leave of absence violations" ON leave_of_absence_violations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can only insert their own leave of absence violations" ON leave_of_absence_violations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can only update their own leave of absence violations" ON leave_of_absence_violations
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can only delete their own leave of absence violations" ON leave_of_absence_violations
  FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for workplace_safety_violations table
CREATE POLICY "Users can only see their own workplace safety violations" ON workplace_safety_violations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can only insert their own workplace safety violations" ON workplace_safety_violations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can only update their own workplace safety violations" ON workplace_safety_violations
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can only delete their own workplace safety violations" ON workplace_safety_violations
  FOR DELETE USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS employees_user_id_idx ON employees(user_id);
CREATE INDEX IF NOT EXISTS employees_case_id_idx ON employees(case_id);
CREATE INDEX IF NOT EXISTS wage_hour_violations_user_id_idx ON wage_hour_violations(user_id);
CREATE INDEX IF NOT EXISTS wage_hour_violations_case_id_idx ON wage_hour_violations(case_id);
CREATE INDEX IF NOT EXISTS discrimination_harassment_violations_user_id_idx ON discrimination_harassment_violations(user_id);
CREATE INDEX IF NOT EXISTS discrimination_harassment_violations_case_id_idx ON discrimination_harassment_violations(case_id);
CREATE INDEX IF NOT EXISTS retaliation_wrongful_termination_violations_user_id_idx ON retaliation_wrongful_termination_violations(user_id);
CREATE INDEX IF NOT EXISTS retaliation_wrongful_termination_violations_case_id_idx ON retaliation_wrongful_termination_violations(case_id);
CREATE INDEX IF NOT EXISTS leave_of_absence_violations_user_id_idx ON leave_of_absence_violations(user_id);
CREATE INDEX IF NOT EXISTS leave_of_absence_violations_case_id_idx ON leave_of_absence_violations(case_id);
CREATE INDEX IF NOT EXISTS workplace_safety_violations_user_id_idx ON workplace_safety_violations(user_id);
CREATE INDEX IF NOT EXISTS workplace_safety_violations_case_id_idx ON workplace_safety_violations(case_id);

-- Create function to automatically set updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at column
CREATE TRIGGER update_employees_updated_at BEFORE UPDATE ON employees 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_wage_hour_violations_updated_at BEFORE UPDATE ON wage_hour_violations 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_discrimination_harassment_violations_updated_at BEFORE UPDATE ON discrimination_harassment_violations 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_retaliation_wrongful_termination_violations_updated_at BEFORE UPDATE ON retaliation_wrongful_termination_violations 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leave_of_absence_violations_updated_at BEFORE UPDATE ON leave_of_absence_violations 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_workplace_safety_violations_updated_at BEFORE UPDATE ON workplace_safety_violations 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
