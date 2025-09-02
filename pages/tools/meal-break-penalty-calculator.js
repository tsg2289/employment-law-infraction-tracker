import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MealBreakPenaltyCalculator() {
  const [hourlyWage, setHourlyWage] = useState('');
  const [missedBreaks, setMissedBreaks] = useState('');
  const [interruptedBreaks, setInterruptedBreaks] = useState('');
  const [shortBreaks, setShortBreaks] = useState('');
  const [results, setResults] = useState(null);

  const calculatePenalty = () => {
    const wage = parseFloat(hourlyWage);
    const missed = parseInt(missedBreaks) || 0;
    const interrupted = parseInt(interruptedBreaks) || 0;
    const short = parseInt(shortBreaks) || 0;
    
    if (wage > 0 && (missed > 0 || interrupted > 0 || short > 0)) {
      const totalViolations = missed + interrupted + short;
      const penaltyPerViolation = wage;
      const totalPenalty = totalViolations * penaltyPerViolation;
      
      // Additional damages that may be available
      const waitingTimePenalty = totalPenalty * 0.3; // Rough estimate for waiting time
      const interestEstimate = totalPenalty * 0.1; // 10% interest estimate
      const potentialTotal = totalPenalty + waitingTimePenalty + interestEstimate;

      setResults({
        totalViolations,
        penaltyPerViolation: penaltyPerViolation.toFixed(2),
        totalPenalty: totalPenalty.toFixed(2),
        waitingTimePenalty: waitingTimePenalty.toFixed(2),
        interestEstimate: interestEstimate.toFixed(2),
        potentialTotal: potentialTotal.toFixed(2)
      });
    }
  };

  return (
    <>
      <Head>
        <title>California Meal Break Penalty Calculator - Premium Pay Tool | Employment Law Tracker</title>
        <meta name="description" content="Calculate meal break penalty pay in California. One hour of pay for each missed or interrupted meal break under Labor Code 512." />
        <meta name="keywords" content="meal break penalty calculator, california meal break premium, labor code 512, meal break violations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> → <Link href="/tools">Tools</Link> → <span>Meal Break Penalty Calculator</span>
        </nav>

        <main className="content">
          <section className="hero-section">
            <h1>California Meal Break Penalty Calculator</h1>
            <p className="lead">
              When your employer violates California's meal break requirements, you're entitled to 
              penalty pay equal to one hour of wages for each violation. Calculate your meal break 
              penalty pay and understand your rights.
            </p>
          </section>

          <section className="calculator-section">
            <div className="calculator-card">
              <h2>Calculate Your Meal Break Penalty</h2>
              <div className="calculator-form">
                <div className="form-group">
                  <label htmlFor="hourlyWage">Your Hourly Wage (or Regular Rate)</label>
                  <input 
                    type="number" 
                    id="hourlyWage"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(e.target.value)}
                    placeholder="18.00"
                    step="0.01"
                    min="0"
                  />
                  <small>Enter your current hourly rate or regular rate of pay</small>
                </div>
                
                <div className="violations-grid">
                  <div className="form-group">
                    <label htmlFor="missedBreaks">Completely Missed Meal Breaks</label>
                    <input 
                      type="number" 
                      id="missedBreaks"
                      value={missedBreaks}
                      onChange={(e) => setMissedBreaks(e.target.value)}
                      placeholder="0"
                      min="0"
                    />
                    <small>Days you got no meal break on shifts over 5 hours</small>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="interruptedBreaks">Interrupted Meal Breaks</label>
                    <input 
                      type="number" 
                      id="interruptedBreaks"
                      value={interruptedBreaks}
                      onChange={(e) => setInterruptedBreaks(e.target.value)}
                      placeholder="0"
                      min="0"
                    />
                    <small>Days you had to work during your meal break</small>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="shortBreaks">Short Meal Breaks</label>
                    <input 
                      type="number" 
                      id="shortBreaks"
                      value={shortBreaks}
                      onChange={(e) => setShortBreaks(e.target.value)}
                      placeholder="0"
                      min="0"
                    />
                    <small>Days your meal break was less than 30 minutes</small>
                  </div>
                </div>
                
                <button className="btn primary" onClick={calculatePenalty}>
                  Calculate Penalty Pay
                </button>
                
                {results && (
                  <div className="results-section">
                    <h3>Your Meal Break Penalty Calculation</h3>
                    
                    <div className="results-grid">
                      <div className="result-card primary">
                        <h4>Basic Penalty Pay</h4>
                        <ul>
                          <li>Total Violations: {results.totalViolations}</li>
                          <li>Penalty Per Violation: ${results.penaltyPerViolation}</li>
                          <li><strong>Total Penalty Pay: ${results.totalPenalty}</strong></li>
                        </ul>
                      </div>
                      
                      <div className="result-card">
                        <h4>Additional Damages</h4>
                        <ul>
                          <li>Waiting Time Penalties: ~${results.waitingTimePenalty}</li>
                          <li>Interest on Unpaid Wages: ~${results.interestEstimate}</li>
                          <li>Attorney Fees: May be available</li>
                        </ul>
                      </div>
                      
                      <div className="result-card highlight">
                        <h4>Potential Total Recovery</h4>
                        <ul>
                          <li><strong>Estimated Total: ${results.potentialTotal}</strong></li>
                        </ul>
                        <p><small>This estimate includes basic penalties plus potential additional damages</small></p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="meal-break-law">
            <h2>California Meal Break Requirements</h2>
            <div className="requirements-grid">
              <div className="requirement-card">
                <h3>⏰ Timing Requirements</h3>
                <ul>
                  <li><strong>5+ hours:</strong> 30-minute meal break before end of 5th hour</li>
                  <li><strong>10+ hours:</strong> Second 30-minute meal break before end of 10th hour</li>
                  <li><strong>12+ hours:</strong> Both meal breaks are required</li>
                  <li><strong>Late breaks:</strong> Taking break after required time = violation</li>
                </ul>
              </div>
              
              <div className="requirement-card">
                <h3>🛡️ Break Quality Requirements</h3>
                <ul>
                  <li><strong>Duty-free:</strong> Must be completely relieved of work duties</li>
                  <li><strong>Uninterrupted:</strong> Cannot be called to work during break</li>
                  <li><strong>30 minutes:</strong> Full 30-minute duration required</li>
                  <li><strong>Free to leave:</strong> Can leave the premises if desired</li>
                </ul>
              </div>
              
              <div className="requirement-card">
                <h3>💰 Penalty for Violations</h3>
                <ul>
                  <li><strong>One hour of pay</strong> for each missed meal break</li>
                  <li><strong>One hour of pay</strong> for each interrupted meal break</li>
                  <li><strong>One hour of pay</strong> for each short meal break</li>
                  <li><strong>Calculated at regular rate</strong> of pay (including overtime premiums if applicable)</li>
                </ul>
              </div>
              
              <div className="requirement-card">
                <h3>📋 Employer Obligations</h3>
                <ul>
                  <li><strong>Provide opportunity:</strong> Must make meal breaks available</li>
                  <li><strong>Not discourage:</strong> Cannot pressure employees to skip breaks</li>
                  <li><strong>Track violations:</strong> Must pay penalties when violations occur</li>
                  <li><strong>Policy compliance:</strong> Ensure managers follow meal break policies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="violation-examples">
            <h2>Common Meal Break Violations</h2>
            <div className="violations-list">
              <div className="violation-example">
                <h3>🚫 Complete Denial of Meal Break</h3>
                <p><strong>Example:</strong> Working a 9-hour shift with no meal break provided</p>
                <p><strong>Penalty:</strong> 1 hour of pay</p>
                <p><strong>Why it's illegal:</strong> Employer failed to provide required 30-minute meal break</p>
              </div>
              
              <div className="violation-example">
                <h3>⏰ Late Meal Break</h3>
                <p><strong>Example:</strong> Starting work at 8 AM, taking meal break at 2:30 PM (6.5 hours later)</p>
                <p><strong>Penalty:</strong> 1 hour of pay</p>
                <p><strong>Why it's illegal:</strong> Meal break must be provided before end of 5th hour</p>
              </div>
              
              <div className="violation-example">
                <h3>📞 Working During Meal Break</h3>
                <p><strong>Example:</strong> Having to answer phones, help customers, or respond to emails during lunch</p>
                <p><strong>Penalty:</strong> 1 hour of pay</p>
                <p><strong>Why it's illegal:</strong> Meal break must be duty-free and uninterrupted</p>
              </div>
              
              <div className="violation-example">
                <h3>⏱️ Shortened Meal Break</h3>
                <p><strong>Example:</strong> Only getting 15-20 minutes for lunch instead of full 30 minutes</p>
                <p><strong>Penalty:</strong> 1 hour of pay</p>
                <p><strong>Why it's illegal:</strong> Must receive full 30-minute uninterrupted meal period</p>
              </div>
              
              <div className="violation-example">
                <h3>🚫 Second Meal Break Denial</h3>
                <p><strong>Example:</strong> Working 11 hours with only one meal break</p>
                <p><strong>Penalty:</strong> 1 hour of pay</p>
                <p><strong>Why it's illegal:</strong> Second meal break required for shifts over 10 hours</p>
              </div>
              
              <div className="violation-example">
                <h3>🏃 Insufficient Time to Eat</h3>
                <p><strong>Example:</strong> Break room is 10 minutes away, leaving only 10 minutes to actually eat</p>
                <p><strong>Penalty:</strong> 1 hour of pay</p>
                <p><strong>Why it's illegal:</strong> Must have reasonable opportunity to take uninterrupted meal</p>
              </div>
            </div>
          </section>

          <section className="waivers-exceptions">
            <h2>Meal Break Waivers & On-Duty Meals</h2>
            <div className="waivers-info">
              <div className="waiver-section">
                <h3>✍️ When You Can Waive Meal Breaks</h3>
                <ul>
                  <li><strong>Shifts 6 hours or less:</strong> First meal break can be waived by mutual agreement</li>
                  <li><strong>Shifts 12 hours or less:</strong> Second meal break can be waived if first was taken</li>
                  <li><strong>Must be voluntary:</strong> No employer pressure or coercion allowed</li>
                  <li><strong>Should be in writing:</strong> Document the waiver agreement</li>
                  <li><strong>Revocable:</strong> You can change your mind and start taking meal breaks</li>
                </ul>
              </div>
              
              <div className="onduty-section">
                <h3>🔄 On-Duty Meal Periods</h3>
                <ul>
                  <li><strong>Limited exception:</strong> Only when nature of work prevents duty-free meal period</li>
                  <li><strong>Written agreement required:</strong> Must be mutually agreed upon in writing</li>
                  <li><strong>Must be paid:</strong> On-duty meal periods count as work time</li>
                  <li><strong>Revocable:</strong> Either party can end the arrangement</li>
                  <li><strong>Still work time:</strong> Counts toward overtime calculations</li>
                </ul>
              </div>
            </div>
            
            <div className="waiver-warning">
              <h3>⚠️ Important Notes About Waivers</h3>
              <ul>
                <li>Most meal break violations cannot be waived - you're still owed penalty pay</li>
                <li>Employers cannot require you to waive meal breaks</li>
                <li>Even with a waiver, you can still demand meal breaks</li>
                <li>Waivers don't apply to most meal break violations (timing, interruption, etc.)</li>
              </ul>
            </div>
          </section>

          <section className="documentation-tips">
            <h2>Documenting Meal Break Violations</h2>
            <div className="documentation-grid">
              <div className="doc-category">
                <h3>📅 What to Track Daily</h3>
                <ul>
                  <li>Start and end time of work</li>
                  <li>When meal break was taken (if any)</li>
                  <li>Duration of meal break</li>
                  <li>Any work performed during break</li>
                  <li>Reason for missed or short break</li>
                  <li>Who instructed you about breaks</li>
                </ul>
              </div>
              
              <div className="doc-category">
                <h3>📱 Evidence to Collect</h3>
                <ul>
                  <li>Time cards and punch records</li>
                  <li>Work schedules</li>
                  <li>Text messages about breaks</li>
                  <li>Emails about meal break policies</li>
                  <li>Photos of time clocks</li>
                  <li>Witness statements from coworkers</li>
                </ul>
              </div>
              
              <div className="doc-category">
                <h3>📝 Company Policies</h3>
                <ul>
                  <li>Employee handbook meal break policies</li>
                  <li>Posted break schedules</li>
                  <li>Manager instructions about breaks</li>
                  <li>Training materials on meal breaks</li>
                  <li>Any written meal break waivers</li>
                </ul>
              </div>
            </div>
            <Link href="/" className="btn secondary">Use Our Meal Break Violation Tracker →</Link>
          </section>

          <section className="recovery-process">
            <h2>How to Recover Meal Break Penalty Pay</h2>
            <div className="recovery-steps">
              <div className="step">
                <h3>1. Calculate Your Penalty Pay</h3>
                <p>Use this calculator to determine exactly how much you're owed in meal break penalties.</p>
                <ul>
                  <li>Count each violation separately</li>
                  <li>Include all types of violations</li>
                  <li>Go back up to 3 years</li>
                  <li>Use your regular rate of pay</li>
                </ul>
              </div>
              
              <div className="step">
                <h3>2. Request Payment from Employer</h3>
                <p>Present your calculations and request immediate payment of penalty wages.</p>
                <ul>
                  <li>Put request in writing</li>
                  <li>Provide detailed calculations</li>
                  <li>Include supporting documentation</li>
                  <li>Set reasonable deadline for response</li>
                </ul>
              </div>
              
              <div className="step">
                <h3>3. File Labor Commissioner Claim</h3>
                <p>If employer refuses to pay, file wage claim with California Labor Commissioner.</p>
                <ul>
                  <li>File within statute of limitations</li>
                  <li>Include all wage violations</li>
                  <li>Provide evidence of violations</li>
                  <li>Attend hearing if required</li>
                </ul>
              </div>
              
              <div className="step">
                <h3>4. Consider Private Lawsuit</h3>
                <p>For significant amounts or multiple employees affected, consider legal action.</p>
                <ul>
                  <li>Class action potential if others affected</li>
                  <li>Attorney fees may be recoverable</li>
                  <li>Additional penalties may apply</li>
                  <li>Consult with employment attorney</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="statute-limitations">
            <h2>Time Limits for Claims</h2>
            <div className="time-limits">
              <div className="limit-card">
                <h3>⏰ Statute of Limitations</h3>
                <ul>
                  <li><strong>3 years:</strong> To recover meal break penalty pay</li>
                  <li><strong>1 year:</strong> For waiting time penalties (if terminated)</li>
                  <li><strong>Don't wait:</strong> File claims as soon as possible</li>
                  <li><strong>Continuing violations:</strong> Each day is a separate violation</li>
                </ul>
              </div>
              
              <div className="urgency-note">
                <h3>🚨 Act Quickly</h3>
                <p>
                  Don't wait to pursue meal break penalty pay. The longer you wait, the more evidence 
                  may be lost and the harder it becomes to prove your case. California law encourages 
                  quick resolution of wage violations.
                </p>
              </div>
            </div>
          </section>

          <section className="related-violations">
            <h2>Related Wage & Hour Violations</h2>
            <div className="related-grid">
              <Link href="/tools/overtime-calculator" className="related-card">
                <h3>💰 Unpaid Overtime</h3>
                <p>Often occurs with meal break violations - calculate what you're owed</p>
              </Link>
              
              <Link href="/wage-hour/rest-break-violations" className="related-card">
                <h3>☕ Rest Break Violations</h3>
                <p>10-minute paid breaks every 4 hours - similar penalty structure</p>
              </Link>
              
              <Link href="/wage-hour/off-clock-work-examples" className="related-card">
                <h3>⏰ Off-the-Clock Work</h3>
                <p>Working during meal breaks counts as unpaid work time</p>
              </Link>
              
              <Link href="/wage-hour/wage-statement-violations" className="related-card">
                <h3>📋 Wage Statement Violations</h3>
                <p>Employers must properly track and report meal break violations</p>
              </Link>
            </div>
          </section>

          <section className="next-steps">
            <h2>Stop Meal Break Theft</h2>
            <p>
              Meal break violations are wage theft. California law provides strong penalties to ensure 
              you get the breaks you're entitled to. Don't let employers steal your break time without 
              paying the required penalty.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary large">Track Your Meal Break Violations</Link>
              <Link href="/contact" className="btn secondary large">Get Legal Help</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
