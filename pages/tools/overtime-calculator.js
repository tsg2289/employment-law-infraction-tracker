import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function OvertimeCalculator() {
  const [hourlyWage, setHourlyWage] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState('');
  const [daysPerWeek, setDaysPerWeek] = useState('');
  const [weeksWorked, setWeeksWorked] = useState('');
  const [results, setResults] = useState(null);

  const calculateOvertime = () => {
    const wage = parseFloat(hourlyWage);
    const dailyHours = parseFloat(hoursPerDay);
    const weeklyDays = parseInt(daysPerWeek);
    const weeks = parseInt(weeksWorked);

    if (wage > 0 && dailyHours > 0 && weeklyDays > 0 && weeks > 0) {
      const weeklyHours = dailyHours * weeklyDays;
      
      // California overtime calculations
      const dailyOvertimeHours = Math.max(0, dailyHours - 8);
      const dailyDoubleTimeHours = Math.max(0, dailyHours - 12);
      const weeklyOvertimeHours = Math.max(0, weeklyHours - 40);
      
      // Adjust daily overtime to not double-count double-time hours
      const adjustedDailyOvertimeHours = dailyOvertimeHours - dailyDoubleTimeHours;
      
      // Total overtime hours per week
      const totalDailyOvertimePerWeek = adjustedDailyOvertimeHours * weeklyDays;
      const totalDailyDoubleTimePerWeek = dailyDoubleTimeHours * weeklyDays;
      
      // Use the higher of daily or weekly overtime
      const finalOvertimeHours = Math.max(totalDailyOvertimePerWeek, weeklyOvertimeHours);
      const finalDoubleTimeHours = totalDailyDoubleTimePerWeek;
      
      // Calculate pay
      const regularHours = Math.max(0, weeklyHours - finalOvertimeHours - finalDoubleTimeHours);
      const regularPay = regularHours * wage;
      const overtimePay = finalOvertimeHours * wage * 1.5;
      const doubleTimePay = finalDoubleTimeHours * wage * 2;
      const totalWeeklyPay = regularPay + overtimePay + doubleTimePay;
      
      // Total for period worked
      const totalPeriodPay = totalWeeklyPay * weeks;
      const totalOvertimeEarned = (overtimePay + doubleTimePay) * weeks;
      
      // What they might have been paid incorrectly (straight time)
      const incorrectTotalHours = weeklyHours * weeks;
      const incorrectPay = incorrectTotalHours * wage;
      const overtimeOwed = totalPeriodPay - incorrectPay;

      setResults({
        weeklyHours,
        regularHours,
        overtimeHours: finalOvertimeHours,
        doubleTimeHours: finalDoubleTimeHours,
        regularPay: regularPay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        doubleTimePay: doubleTimePay.toFixed(2),
        totalWeeklyPay: totalWeeklyPay.toFixed(2),
        totalPeriodPay: totalPeriodPay.toFixed(2),
        totalOvertimeEarned: totalOvertimeEarned.toFixed(2),
        overtimeOwed: Math.max(0, overtimeOwed).toFixed(2)
      });
    }
  };

  return (
    <>
      <Head>
        <title>California Overtime Calculator - Calculate What You're Owed | Employment Law Tracker</title>
        <meta name="description" content="Free California overtime calculator. Calculate overtime pay owed under California law including daily overtime, weekly overtime, and double-time pay." />
        <meta name="keywords" content="california overtime calculator, overtime pay calculator, california labor law, overtime owed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> → <Link href="/tools">Tools</Link> → <span>Overtime Calculator</span>
        </nav>

        <main className="content">
          <section className="hero-section">
            <h1>California Overtime Calculator</h1>
            <p className="lead">
              Calculate exactly how much overtime pay you're owed under California law. 
              California requires overtime pay for work over 8 hours per day AND over 40 hours per week, 
              plus double-time for work over 12 hours per day.
            </p>
          </section>

          <section className="calculator-section">
            <div className="calculator-card">
              <h2>Calculate Your Overtime Pay</h2>
              <div className="calculator-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="hourlyWage">Hourly Wage (Regular Rate)</label>
                    <input 
                      type="number" 
                      id="hourlyWage"
                      value={hourlyWage}
                      onChange={(e) => setHourlyWage(e.target.value)}
                      placeholder="16.00"
                      step="0.01"
                      min="0"
                    />
                    <small>Your regular hourly rate of pay</small>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="hoursPerDay">Hours Worked Per Day</label>
                    <input 
                      type="number" 
                      id="hoursPerDay"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(e.target.value)}
                      placeholder="10"
                      step="0.5"
                      min="0"
                    />
                    <small>Average hours worked each day</small>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="daysPerWeek">Days Worked Per Week</label>
                    <input 
                      type="number" 
                      id="daysPerWeek"
                      value={daysPerWeek}
                      onChange={(e) => setDaysPerWeek(e.target.value)}
                      placeholder="5"
                      min="1"
                      max="7"
                    />
                    <small>Number of days worked each week</small>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="weeksWorked">Number of Weeks</label>
                    <input 
                      type="number" 
                      id="weeksWorked"
                      value={weeksWorked}
                      onChange={(e) => setWeeksWorked(e.target.value)}
                      placeholder="12"
                      min="1"
                    />
                    <small>How many weeks did you work this schedule?</small>
                  </div>
                </div>
                
                <button className="btn primary" onClick={calculateOvertime}>
                  Calculate Overtime Pay
                </button>
                
                {results && (
                  <div className="results-section">
                    <h3>Your Overtime Calculation</h3>
                    
                    <div className="results-grid">
                      <div className="result-card">
                        <h4>Weekly Hours Breakdown</h4>
                        <ul>
                          <li>Total Hours: {results.weeklyHours}</li>
                          <li>Regular Hours: {results.regularHours}</li>
                          <li>Overtime Hours (1.5x): {results.overtimeHours}</li>
                          <li>Double-Time Hours (2x): {results.doubleTimeHours}</li>
                        </ul>
                      </div>
                      
                      <div className="result-card">
                        <h4>Weekly Pay Breakdown</h4>
                        <ul>
                          <li>Regular Pay: ${results.regularPay}</li>
                          <li>Overtime Pay: ${results.overtimePay}</li>
                          <li>Double-Time Pay: ${results.doubleTimePay}</li>
                          <li><strong>Total Weekly: ${results.totalWeeklyPay}</strong></li>
                        </ul>
                      </div>
                      
                      <div className="result-card highlight">
                        <h4>Total Owed for Period</h4>
                        <ul>
                          <li>Total Correct Pay: ${results.totalPeriodPay}</li>
                          <li>Total Overtime Earned: ${results.totalOvertimeEarned}</li>
                          <li><strong>Overtime Owed (if unpaid): ${results.overtimeOwed}</strong></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="result-note">
                      <p><strong>Note:</strong> This calculation assumes you were paid straight time for all hours. 
                      If you received some overtime pay, subtract that from the "Overtime Owed" amount.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="california-overtime-law">
            <h2>California Overtime Law Explained</h2>
            <div className="law-explanation">
              <div className="overtime-rule">
                <h3>📅 Daily Overtime (Labor Code Section 510)</h3>
                <ul>
                  <li><strong>Over 8 hours per day:</strong> 1.5x regular rate</li>
                  <li><strong>Over 12 hours per day:</strong> 2x regular rate (double-time)</li>
                  <li><strong>7th consecutive day:</strong> First 8 hours at 1.5x, over 8 at 2x</li>
                </ul>
              </div>
              
              <div className="overtime-rule">
                <h3>📊 Weekly Overtime</h3>
                <ul>
                  <li><strong>Over 40 hours per week:</strong> 1.5x regular rate</li>
                  <li><strong>Applies in addition to daily overtime</strong></li>
                  <li><strong>Use whichever is greater:</strong> Daily or weekly calculation</li>
                </ul>
              </div>
              
              <div className="overtime-rule">
                <h3>💰 Regular Rate Calculation</h3>
                <ul>
                  <li>Includes base hourly wage</li>
                  <li>Plus non-discretionary bonuses and commissions</li>
                  <li>Divided by total hours worked</li>
                  <li>Excludes gifts, discretionary bonuses</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="examples-section">
            <h2>Common Overtime Scenarios</h2>
            <div className="scenarios-grid">
              <div className="scenario">
                <h3>Long Daily Hours</h3>
                <p><strong>Schedule:</strong> 10 hours/day, 4 days/week = 40 hours total</p>
                <p><strong>Overtime:</strong> 2 hours of daily overtime per day (8 hours at 1.5x)</p>
                <p><strong>Result:</strong> Even though only 40 hours total, you earn daily overtime</p>
              </div>
              
              <div className="scenario">
                <h3>Double-Time Trigger</h3>
                <p><strong>Schedule:</strong> 14 hours/day, 3 days/week = 42 hours total</p>
                <p><strong>Overtime:</strong> 12 hours at 1.5x + 6 hours at 2x + 2 hours weekly overtime</p>
                <p><strong>Result:</strong> Significant double-time pay for excessive daily hours</p>
              </div>
              
              <div className="scenario">
                <h3>Seven-Day Work Week</h3>
                <p><strong>Schedule:</strong> 8 hours/day, 7 days/week = 56 hours total</p>
                <p><strong>Overtime:</strong> 6th day at 1.5x, 7th day first 8 hours at 1.5x, plus weekly overtime</p>
                <p><strong>Result:</strong> Multiple overtime triggers for consecutive days</p>
              </div>
            </div>
          </section>

          <section className="who-gets-overtime">
            <h2>Who Gets Overtime Pay?</h2>
            <div className="overtime-eligibility">
              <div className="covered-employees">
                <h3>✅ Covered Employees</h3>
                <ul>
                  <li>Most hourly employees</li>
                  <li>Non-exempt salaried employees</li>
                  <li>Piece-rate workers</li>
                  <li>Commission employees (in most cases)</li>
                  <li>Part-time and temporary workers</li>
                </ul>
              </div>
              
              <div className="exempt-employees">
                <h3>❌ Exempt Employees (Generally No Overtime)</h3>
                <ul>
                  <li>Executive, administrative, professional employees</li>
                  <li>Computer professionals (if paid $50/hour or $104,149+ annually)</li>
                  <li>Outside salespeople</li>
                  <li>Licensed doctors, lawyers, teachers</li>
                  <li>Must meet strict criteria for exemption</li>
                </ul>
              </div>
            </div>
            <p className="exemption-note">
              <strong>Important:</strong> Job title alone doesn't determine exemption. You must meet specific 
              duties and salary requirements. Many employees classified as "exempt" are actually entitled to overtime.
            </p>
          </section>

          <section className="documentation-tips">
            <h2>Documenting Overtime Violations</h2>
            <div className="documentation-guide">
              <h3>📝 Keep Track Of:</h3>
              <ul>
                <li>Daily start and end times</li>
                <li>Meal and rest break times</li>
                <li>Overtime hours worked</li>
                <li>Pay stubs showing overtime rates</li>
                <li>Work schedules and time cards</li>
                <li>Emails about work assignments</li>
                <li>Text messages about overtime</li>
                <li>Manager instructions about hours</li>
              </ul>
              
              <h3>📱 Tools to Help:</h3>
              <ul>
                <li>Take photos of time clocks</li>
                <li>Keep personal time records</li>
                <li>Save all work-related communications</li>
                <li>Download our overtime log template</li>
              </ul>
            </div>
            <Link href="/tools/overtime-log-template" className="btn secondary">Download Overtime Log Template →</Link>
          </section>

          <section className="recovery-options">
            <h2>How to Recover Unpaid Overtime</h2>
            <div className="recovery-steps">
              <div className="step">
                <h3>1. Calculate What You're Owed</h3>
                <p>Use this calculator and gather evidence of your actual hours worked and pay received.</p>
              </div>
              
              <div className="step">
                <h3>2. Request Payment from Employer</h3>
                <p>Provide calculations and request payment of unpaid overtime wages.</p>
              </div>
              
              <div className="step">
                <h3>3. File Wage Claim</h3>
                <p>File with California Labor Commissioner if employer refuses to pay.</p>
              </div>
              
              <div className="step">
                <h3>4. Consider Legal Action</h3>
                <p>Consult with employment attorney for significant violations or class action potential.</p>
              </div>
            </div>
          </section>

          <section className="related-tools">
            <h2>Related Tools & Resources</h2>
            <div className="tools-grid">
              <Link href="/tools/meal-break-penalty-calculator" className="tool-card">
                <h3>🍽️ Meal Break Penalty Calculator</h3>
                <p>Calculate penalty pay for missed meal breaks</p>
              </Link>
              
              <Link href="/tools/overtime-log-template" className="tool-card">
                <h3>📝 Overtime Log Template</h3>
                <p>Track your daily hours and overtime</p>
              </Link>
              
              <Link href="/wage-hour" className="tool-card">
                <h3>📚 Wage & Hour Rights Guide</h3>
                <p>Complete guide to California wage and hour laws</p>
              </Link>
              
              <Link href="/" className="tool-card">
                <h3>📱 Violation Tracker</h3>
                <p>Document wage and hour violations</p>
              </Link>
            </div>
          </section>

          <section className="disclaimer">
            <div className="disclaimer-box">
              <h3>⚖️ Legal Disclaimer</h3>
              <p>
                This calculator provides estimates based on California overtime law. Individual situations 
                may vary based on exemptions, collective bargaining agreements, or other factors. 
                For complex situations or significant amounts owed, consult with an employment attorney.
              </p>
            </div>
          </section>

          <section className="next-steps">
            <h2>Don't Let Overtime Theft Continue</h2>
            <p>
              Unpaid overtime is wage theft, and California law provides strong remedies. 
              If you're owed overtime pay, take action to recover what you've earned.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary large">Track Your Overtime Violations</Link>
              <Link href="/contact" className="btn secondary large">Get Legal Help</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
