import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MissedMealBreakPenalty() {
  const [hourlyWage, setHourlyWage] = useState('');
  const [missedBreaks, setMissedBreaks] = useState('');
  const [penalty, setPenalty] = useState(null);

  const calculatePenalty = () => {
    const wage = parseFloat(hourlyWage);
    const breaks = parseInt(missedBreaks);
    
    if (wage > 0 && breaks > 0) {
      const totalPenalty = wage * breaks;
      setPenalty(totalPenalty);
    }
  };

  return (
    <>
      <Head>
        <title>California Meal Break Penalty Calculator - Know What You're Owed | Employment Law Tracker</title>
        <meta name="description" content="Calculate meal break penalty pay in California. Learn about 30-minute meal break rights, penalty requirements, and how to recover unpaid meal break premiums." />
        <meta name="keywords" content="california meal break penalty, meal break premium pay, labor code 512, meal break violations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> → <Link href="/wage-hour">Wage & Hour</Link> → <span>Meal Break Penalty Calculator</span>
        </nav>

        <main className="content">
          <section className="hero-section">
            <h1>California Meal Break Penalty Calculator</h1>
            <p className="lead">
              When employers violate California's meal break requirements, they owe you penalty pay 
              equal to one hour of wages for each violation. Calculate what you're owed and learn 
              how to recover unpaid meal break premiums.
            </p>
          </section>

          <section className="calculator-section">
            <div className="calculator-card">
              <h2>Calculate Your Meal Break Penalty</h2>
              <div className="calculator-form">
                <div className="form-group">
                  <label htmlFor="hourlyWage">Your Hourly Wage (or regular rate)</label>
                  <input 
                    type="number" 
                    id="hourlyWage"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(e.target.value)}
                    placeholder="16.00"
                    step="0.01"
                    min="0"
                  />
                  <small>Enter your current hourly wage or regular rate of pay</small>
                </div>
                
                <div className="form-group">
                  <label htmlFor="missedBreaks">Number of Missed Meal Breaks</label>
                  <input 
                    type="number" 
                    id="missedBreaks"
                    value={missedBreaks}
                    onChange={(e) => setMissedBreaks(e.target.value)}
                    placeholder="10"
                    min="0"
                  />
                  <small>Count each day you missed a meal break or had it interrupted</small>
                </div>
                
                <button className="btn primary" onClick={calculatePenalty}>
                  Calculate Penalty
                </button>
                
                {penalty !== null && (
                  <div className="result">
                    <h3>Your Meal Break Penalty:</h3>
                    <div className="penalty-amount">${penalty.toFixed(2)}</div>
                    <p>This is the minimum you're owed in meal break penalty pay.</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="meal-break-law">
            <h2>California Meal Break Law</h2>
            <div className="law-overview">
              <div className="requirement-card">
                <h3>📋 Basic Requirements</h3>
                <ul>
                  <li><strong>5+ hours:</strong> 30-minute meal break</li>
                  <li><strong>10+ hours:</strong> Second 30-minute meal break</li>
                  <li><strong>12+ hours:</strong> Both breaks are required</li>
                  <li><strong>Timing:</strong> First break by end of 5th hour</li>
                  <li><strong>Uninterrupted:</strong> Must be duty-free</li>
                </ul>
              </div>
              
              <div className="penalty-card">
                <h3>💰 Penalty for Violations</h3>
                <ul>
                  <li>One hour of pay for each missed break</li>
                  <li>One hour of pay for each interrupted break</li>
                  <li>Calculated at your regular rate of pay</li>
                  <li>Separate from actual wages owed</li>
                  <li>Available for up to 3 years back</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="common-violations">
            <h2>Common Meal Break Violations</h2>
            <div className="violations-grid">
              <div className="violation">
                <h3>🚫 No Meal Break Provided</h3>
                <p>Employer doesn't provide any meal break for shifts over 5 hours</p>
                <div className="example">
                  <strong>Example:</strong> Working an 8-hour shift with no meal break
                </div>
              </div>
              
              <div className="violation">
                <h3>⏰ Late Meal Break</h3>
                <p>Meal break provided after the 5th hour of work</p>
                <div className="example">
                  <strong>Example:</strong> Taking lunch at 2 PM after starting work at 8 AM
                </div>
              </div>
              
              <div className="violation">
                <h3>📞 Working During Break</h3>
                <p>Being required to work, answer calls, or remain on duty during meal break</p>
                <div className="example">
                  <strong>Example:</strong> Eating at your desk while answering phones
                </div>
              </div>
              
              <div className="violation">
                <h3>⏱️ Short Meal Break</h3>
                <p>Meal break is less than 30 minutes</p>
                <div className="example">
                  <strong>Example:</strong> Only getting a 15-20 minute lunch break
                </div>
              </div>
              
              <div className="violation">
                <h3>🚫 Second Break Denied</h3>
                <p>Not receiving a second meal break for shifts over 10 hours</p>
                <div className="example">
                  <strong>Example:</strong> Working 12 hours with only one meal break
                </div>
              </div>
              
              <div className="violation">
                <h3>🏃 No Time to Leave</h3>
                <p>Insufficient time to leave the premises during meal break</p>
                <div className="example">
                  <strong>Example:</strong> Break room is far away, leaving only 15 minutes to eat
                </div>
              </div>
            </div>
          </section>

          <section className="exceptions-waivers">
            <h2>Meal Break Waivers & Exceptions</h2>
            <div className="exceptions-info">
              <div className="waiver-info">
                <h3>When You Can Waive Meal Breaks</h3>
                <ul>
                  <li><strong>6 hours or less:</strong> First meal break can be waived by mutual consent</li>
                  <li><strong>12 hours or less:</strong> Second meal break can be waived if first was taken</li>
                  <li><strong>Must be voluntary:</strong> No employer pressure or coercion</li>
                  <li><strong>In writing:</strong> Waiver should be documented</li>
                  <li><strong>Revocable:</strong> You can change your mind</li>
                </ul>
              </div>
              
              <div className="exceptions-info">
                <h3>Limited Exceptions</h3>
                <ul>
                  <li><strong>On-duty meal periods:</strong> Only when nature of work prevents duty-free break</li>
                  <li><strong>Written agreement required:</strong> Must be mutually agreed upon</li>
                  <li><strong>Paid break:</strong> Must be compensated as work time</li>
                  <li><strong>Revocable:</strong> Either party can end the agreement</li>
                  <li><strong>Still counts as work:</strong> Included in overtime calculations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="documentation">
            <h2>Documenting Meal Break Violations</h2>
            <div className="documentation-tips">
              <h3>📝 What to Track</h3>
              <ul>
                <li>Dates and times of missed or interrupted meal breaks</li>
                <li>Length of your shifts</li>
                <li>Reasons given for missed breaks</li>
                <li>Supervisor instructions about breaks</li>
                <li>Witnesses to violations</li>
                <li>Company policies about meal breaks</li>
              </ul>
              
              <h3>📱 How to Document</h3>
              <ul>
                <li>Keep a daily log or calendar</li>
                <li>Save text messages or emails about breaks</li>
                <li>Take photos of your schedule</li>
                <li>Get witness statements from coworkers</li>
                <li>Keep copies of timecards and pay stubs</li>
                <li>Document company break policies</li>
              </ul>
            </div>
            <Link href="/" className="btn secondary">Use Our Violation Tracker →</Link>
          </section>

          <section className="recovery-options">
            <h2>How to Recover Meal Break Penalties</h2>
            <div className="recovery-steps">
              <div className="step">
                <h3>1. Internal Complaint</h3>
                <ul>
                  <li>Report violations to HR or management</li>
                  <li>Request payment of penalty wages</li>
                  <li>Document their response</li>
                  <li>Give reasonable time to correct</li>
                </ul>
              </div>
              
              <div className="step">
                <h3>2. Labor Commissioner Claim</h3>
                <ul>
                  <li>File wage claim with California Labor Commissioner</li>
                  <li>Include meal break penalty calculations</li>
                  <li>Provide documentation of violations</li>
                  <li>Attend hearing if required</li>
                </ul>
              </div>
              
              <div className="step">
                <h3>3. Private Lawsuit</h3>
                <ul>
                  <li>Consider class action if other employees affected</li>
                  <li>Seek attorney representation</li>
                  <li>Pursue additional damages and attorney fees</li>
                  <li>Include other wage violations if applicable</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="related-violations">
            <h2>Related Wage & Hour Violations</h2>
            <div className="related-links">
              <Link href="/wage-hour/rest-break-violations" className="related-card">
                <h3>Rest Break Violations</h3>
                <p>10-minute paid breaks every 4 hours - similar penalty structure</p>
              </Link>
              
              <Link href="/wage-hour/overtime-calculator" className="related-card">
                <h3>Unpaid Overtime</h3>
                <p>Often occurs together with meal break violations</p>
              </Link>
              
              <Link href="/wage-hour/off-clock-work-examples" className="related-card">
                <h3>Off-the-Clock Work</h3>
                <p>Working during meal breaks counts as unpaid work</p>
              </Link>
            </div>
          </section>

          <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <details>
                <summary>Can I be required to stay on the premises during my meal break?</summary>
                <p>
                  Generally no. You should be free to leave the workplace during your meal break. 
                  If you must stay on premises due to the nature of your work, it may be an "on-duty" 
                  meal period that must be paid and agreed to in writing.
                </p>
              </details>
              
              <details>
                <summary>What if I choose to work through my meal break?</summary>
                <p>
                  Even if you choose to work through your meal break, your employer still owes you 
                  the meal period premium if they didn't provide the opportunity for an uninterrupted 
                  30-minute break.
                </p>
              </details>
              
              <details>
                <summary>Can my employer automatically deduct meal breaks from my pay?</summary>
                <p>
                  Only if you actually take the full, uninterrupted meal break. If your break is 
                  missed or interrupted, the automatic deduction becomes an illegal wage deduction 
                  and you're owed both the wages and the penalty.
                </p>
              </details>
            </div>
          </section>

          <section className="next-steps">
            <h2>Take Action on Meal Break Violations</h2>
            <p>
              Meal break violations are common but recoverable. Don't let employers steal your 
              break time without compensation. California law provides strong protections and 
              penalties to ensure you get the breaks you're entitled to.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary large">Track Your Violations</Link>
              <Link href="/contact" className="btn secondary large">Get Legal Help</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
