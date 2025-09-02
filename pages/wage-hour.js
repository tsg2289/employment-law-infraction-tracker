import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function WageHour() {
  const [selectedState, setSelectedState] = useState('california');

  return (
    <>
      <Head>
        <title>California Wage & Hour Rights - Know Your Rights | Employment Law Tracker</title>
        <meta name="description" content="Complete guide to California wage and hour rights. Learn about overtime, meal breaks, rest breaks, minimum wage, and how to track violations." />
        <meta name="keywords" content="california wage hour rights, overtime pay, meal breaks, rest breaks, minimum wage, employment law" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> → <span>Wage & Hour Rights</span>
        </nav>

        <main className="content">
          <section className="hero-section">
            <h1>California Wage & Hour Rights</h1>
            <p className="lead">
              California has some of the strongest worker protections in the nation. Know your rights to overtime pay, 
              meal breaks, rest breaks, and fair wages. Track violations privately and understand your legal options.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary">Start Tracking Violations</Link>
              <Link href="/tools/overtime-calculator" className="btn secondary">Calculate Overtime Owed</Link>
            </div>
          </section>

          <section className="overview-grid">
            <div className="card">
              <h2>🕒 Overtime Rights</h2>
              <p>
                California requires overtime pay for work over 8 hours per day or 40 hours per week. 
                Double-time applies after 12 hours in a day or 8+ hours on the 7th consecutive day.
              </p>
              <div className="links">
                <Link href="/wage-hour/overtime-calculator">Overtime Calculator</Link>
                <Link href="/wage-hour/not-paid-overtime-california">Not Being Paid Overtime?</Link>
              </div>
            </div>

            <div className="card">
              <h2>🍽️ Meal & Rest Breaks</h2>
              <p>
                30-minute meal breaks for shifts over 5 hours, 10-minute rest breaks every 4 hours. 
                Violations can result in penalty pay equal to one hour of wages.
              </p>
              <div className="links">
                <Link href="/wage-hour/missed-meal-break-penalty">Meal Break Penalty Calculator</Link>
                <Link href="/wage-hour/rest-break-violations">Rest Break Rights</Link>
              </div>
            </div>

            <div className="card">
              <h2>💰 Minimum Wage</h2>
              <p>
                California minimum wage is $16.00/hour (2024), with higher rates in many cities. 
                Learn about tipped workers, piece rate, and commission protections.
              </p>
              <div className="links">
                <Link href="/wage-hour/california-minimum-wage-2024">Current Wage Rates</Link>
                <Link href="/wage-hour/unpaid-wages-california">Recovering Unpaid Wages</Link>
              </div>
            </div>

            <div className="card">
              <h2>📋 Employee Classification</h2>
              <p>
                Misclassification as an independent contractor denies you wage protections. 
                The ABC test determines proper classification in California.
              </p>
              <div className="links">
                <Link href="/wage-hour/employee-vs-contractor">Classification Test</Link>
                <Link href="/wage-hour/misclassification-damages">Damages for Misclassification</Link>
              </div>
            </div>

            <div className="card">
              <h2>💸 Final Pay Rights</h2>
              <p>
                Terminated employees must receive final pay immediately. Quitting employees 
                must be paid within 72 hours (or immediately if 72+ hours notice given).
              </p>
              <div className="links">
                <Link href="/wage-hour/final-pay-california">Final Pay Requirements</Link>
                <Link href="/wage-hour/waiting-time-penalties">Waiting Time Penalties</Link>
              </div>
            </div>

            <div className="card">
              <h2>⏰ Off-the-Clock Work</h2>
              <p>
                All time worked must be compensated. This includes prep time, training, 
                travel time, and work done at home or after hours.
              </p>
              <div className="links">
                <Link href="/wage-hour/off-clock-work-examples">Common Violations</Link>
                <Link href="/wage-hour/tracking-unpaid-time">How to Track Time</Link>
              </div>
            </div>
          </section>

          <section className="common-issues">
            <h2>Most Common Wage & Hour Violations</h2>
            <div className="issue-list">
              <div className="issue">
                <h3>Unpaid Overtime</h3>
                <p>Not receiving 1.5x pay for hours over 8/day or 40/week, or 2x pay for hours over 12/day</p>
                <Link href="/wage-hour/overtime-calculator" className="learn-more">Calculate What You're Owed →</Link>
              </div>
              
              <div className="issue">
                <h3>Missed Meal Breaks</h3>
                <p>Working through lunch or not getting a full 30-minute uninterrupted break</p>
                <Link href="/wage-hour/missed-meal-break-penalty" className="learn-more">Calculate Penalty Pay →</Link>
              </div>
              
              <div className="issue">
                <h3>No Rest Breaks</h3>
                <p>Not receiving 10-minute paid breaks every 4 hours of work</p>
                <Link href="/wage-hour/rest-break-violations" className="learn-more">Know Your Rights →</Link>
              </div>
              
              <div className="issue">
                <h3>Working Off-the-Clock</h3>
                <p>Required to work before/after shifts, during breaks, or at home without pay</p>
                <Link href="/wage-hour/off-clock-work-examples" className="learn-more">Common Examples →</Link>
              </div>
            </div>
          </section>

          <section className="tools-section">
            <h2>Wage & Hour Tools</h2>
            <div className="tools-grid">
              <Link href="/tools/overtime-calculator" className="tool-card">
                <h3>🧮 Overtime Calculator</h3>
                <p>Calculate exactly how much overtime pay you're owed</p>
              </Link>
              
              <Link href="/tools/meal-break-penalty-calculator" className="tool-card">
                <h3>🍽️ Meal Break Penalty Calculator</h3>
                <p>Calculate penalty pay for missed meal breaks</p>
              </Link>
              
              <Link href="/tools/overtime-log-template" className="tool-card">
                <h3>📝 Overtime Log Template</h3>
                <p>Download template to track your hours and overtime</p>
              </Link>
              
              <Link href="/tools/wage-statement-checker" className="tool-card">
                <h3>📊 Wage Statement Checker</h3>
                <p>Verify your pay stub meets California requirements</p>
              </Link>
            </div>
          </section>

          <section className="legal-action">
            <h2>Taking Legal Action</h2>
            <div className="action-steps">
              <div className="step">
                <h3>1. Document Everything</h3>
                <p>Keep detailed records of hours worked, pay stubs, schedules, and any communications about pay issues.</p>
                <Link href="/" className="btn secondary">Start Documentation</Link>
              </div>
              
              <div className="step">
                <h3>2. Calculate Damages</h3>
                <p>Determine exactly how much you're owed including penalties, interest, and attorney fees.</p>
                <Link href="/tools/overtime-calculator" className="btn secondary">Use Calculators</Link>
              </div>
              
              <div className="step">
                <h3>3. Understand Your Rights</h3>
                <p>California law provides strong protections and penalties for wage violations.</p>
                <Link href="/wage-hour/california-labor-code" className="btn secondary">Know the Law</Link>
              </div>
              
              <div className="step">
                <h3>4. Get Legal Help</h3>
                <p>Wage and hour cases can be complex. Consider consulting with an employment attorney.</p>
                <Link href="/contact" className="btn primary">Contact Attorney</Link>
              </div>
            </div>
          </section>

          <section className="faq-preview">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <details>
                <summary>How much overtime am I entitled to in California?</summary>
                <p>
                  In California, you're entitled to 1.5x your regular rate for hours over 8 in a day or 40 in a week, 
                  and 2x your rate for hours over 12 in a day or over 8 hours on the 7th consecutive day of work.
                </p>
              </details>
              
              <details>
                <summary>What if I'm paid a salary?</summary>
                <p>
                  Most salaried employees in California are still entitled to overtime unless they meet specific 
                  exemption criteria. Simply being paid a salary doesn't automatically make you exempt.
                </p>
              </details>
              
              <details>
                <summary>Can I file a wage claim on my own?</summary>
                <p>
                  Yes, you can file a wage claim with the California Labor Commissioner. However, complex cases 
                  may benefit from legal representation to maximize recovery.
                </p>
              </details>
            </div>
            <Link href="/wage-hour/faq" className="see-all">See All FAQs →</Link>
          </section>

          <section className="next-steps">
            <h2>Ready to Protect Your Rights?</h2>
            <p>
              Don't let wage theft continue. California's strong labor laws are designed to protect you, 
              but you need to take action to enforce your rights.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary large">Start Tracking Violations Now</Link>
              <Link href="/contact" className="btn secondary large">Get Legal Consultation</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
