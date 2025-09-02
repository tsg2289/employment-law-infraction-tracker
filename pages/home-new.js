import Head from 'next/head';
import Link from 'next/link';

export default function HomeNew() {
  return (
    <>
      <Head>
        <title>Employment Law Infraction Tracker - Know Your Rights, Track Violations | the attorneys at Skeptical Lawyer, Esq.</title>
        <meta name="description" content="Free employment law tracker and educational resources. Document workplace violations, understand your rights, and get legal help for wage theft, discrimination, harassment, and wrongful termination in California." />
        <meta name="keywords" content="employment law tracker, workplace violations, california employment rights, wage theft, discrimination, harassment, wrongful termination" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://employment-law-tracker.vercel.app/" />
      </Head>

      <div className="homepage-wrap">
        {/* Hero Section */}
        <section className="hero-main">
          <div className="hero-content">
            <h1>Know Your Rights. Track Violations Privately.</h1>
            <p className="hero-lead">
              Don't let workplace violations go unnoticed. This free tracker helps California employees 
              document wage theft, discrimination, harassment, and other illegal conduct while learning 
              their rights under employment law.
            </p>
            
            <div className="hero-cta">
              <Link href="/" className="btn primary large">Start Tracking Violations</Link>
              <Link href="/about" className="btn secondary large">Learn More</Link>
            </div>
            
            <div className="hero-trust">
              <p>✅ <strong>Created by Employment Attorney the attorneys at Skeptical Lawyer</strong></p>
              <p>🔒 <strong>Private & Secure</strong> • 📚 <strong>Free Legal Education</strong> • ⚖️ <strong>Attorney-Client Privilege Protection</strong></p>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="problem-solution">
          <div className="problem-side">
            <h2>Are You Experiencing Workplace Violations?</h2>
            <div className="violation-signs">
              <div className="sign">
                <h3>💰 Wage & Hour Violations</h3>
                <ul>
                  <li>Not paid overtime for work over 8 hours/day</li>
                  <li>Missing meal or rest breaks</li>
                  <li>Working off-the-clock without pay</li>
                  <li>Misclassified as exempt from overtime</li>
                </ul>
              </div>
              
              <div className="sign">
                <h3>🚫 Discrimination & Harassment</h3>
                <ul>
                  <li>Treated differently due to race, gender, age, etc.</li>
                  <li>Sexual harassment or hostile work environment</li>
                  <li>Denied promotions or opportunities unfairly</li>
                  <li>Pregnancy or disability discrimination</li>
                </ul>
              </div>
              
              <div className="sign">
                <h3>🔄 Retaliation & Wrongful Termination</h3>
                <ul>
                  <li>Punished for reporting violations</li>
                  <li>Fired after taking protected leave</li>
                  <li>Terminated for whistleblowing</li>
                  <li>Constructive discharge situations</li>
                </ul>
              </div>
            </div>
            
            <p className="problem-impact">
              <strong>These violations cost you money, harm your career, and damage your well-being.</strong> 
              Many employees suffer in silence because they don't know their rights or how to document violations properly.
            </p>
          </div>
          
          <div className="solution-side">
            <h2>Here's How We Help</h2>
            <div className="solution-features">
              <div className="feature">
                <h3>📚 Learn Your Rights</h3>
                <p>Comprehensive guides to California employment law written in plain English. Understand what conduct is illegal and what protections you have.</p>
              </div>
              
              <div className="feature">
                <h3>📱 Document Violations</h3>
                <p>Secure tracking system to record workplace violations as they happen. Proper documentation is crucial for successful legal claims.</p>
              </div>
              
              <div className="feature">
                <h3>🧮 Calculate Damages</h3>
                <p>Interactive calculators help you determine exactly how much you're owed in unpaid wages, penalties, and other damages.</p>
              </div>
              
              <div className="feature">
                <h3>⚖️ Get Legal Help</h3>
                <p>Direct access to employment attorney the attorneys at Skeptical Lawyer for legal consultation and representation when you need it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Employee Journey Section */}
        <section className="employee-journey">
          <h2>Your Path to Justice</h2>
          <div className="journey-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Recognize Violations</h3>
              <p>Learn to identify illegal workplace conduct through our comprehensive legal guides</p>
              <Link href="/wage-hour" className="step-link">Start Learning →</Link>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3>Document Everything</h3>
              <p>Use our secure tracker to record violations, gather evidence, and build your case</p>
              <Link href="/" className="step-link">Start Tracking →</Link>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <h3>Calculate Damages</h3>
              <p>Determine exactly what you're owed using our specialized calculators</p>
              <Link href="/tools/overtime-calculator" className="step-link">Calculate Now →</Link>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <h3>Take Action</h3>
              <p>Get legal consultation to protect your rights and pursue remedies</p>
              <Link href="/contact" className="step-link">Get Help →</Link>
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="core-pillars">
          <h2>California Employment Law Rights</h2>
          <p className="pillars-intro">
            California has some of the strongest worker protections in the nation. 
            Click any area to learn your rights and see common violations.
          </p>
          
          <div className="pillars-grid">
            <Link href="/wage-hour" className="pillar-card">
              <h3>💰 Wage & Hour Rights</h3>
              <p>Overtime pay, meal breaks, rest breaks, minimum wage, and final pay rights</p>
              <div className="pillar-stats">Most common violations</div>
            </Link>
            
            <Link href="/harassment" className="pillar-card">
              <h3>🚫 Harassment Protection</h3>
              <p>Sexual harassment, hostile work environment, and protected class harassment</p>
              <div className="pillar-stats">Strong legal remedies</div>
            </Link>
            
            <Link href="/discrimination" className="pillar-card">
              <h3>⚖️ Discrimination Laws</h3>
              <p>Protected classes, reasonable accommodations, and equal treatment rights</p>
              <div className="pillar-stats">Broad legal protections</div>
            </Link>
            
            <Link href="/retaliation" className="pillar-card">
              <h3>🛡️ Retaliation Protection</h3>
              <p>Whistleblower rights, complaint protection, and wrongful termination</p>
              <div className="pillar-stats">Cannot be punished</div>
            </Link>
            
            <Link href="/leave" className="pillar-card">
              <h3>🏥 Leave Rights</h3>
              <p>FMLA, CFRA, sick leave, pregnancy leave, and job restoration</p>
              <div className="pillar-stats">Job protection guaranteed</div>
            </Link>
            
            <Link href="/safety" className="pillar-card">
              <h3>⚠️ Workplace Safety</h3>
              <p>OSHA rights, hazard reporting, and protection from unsafe work</p>
              <div className="pillar-stats">Right to safe workplace</div>
            </Link>
          </div>
        </section>

        {/* Tools Section */}
        <section className="tools-preview">
          <h2>Free Employment Law Tools</h2>
          <div className="tools-grid">
            <Link href="/tools/overtime-calculator" className="tool-preview">
              <h3>🧮 Overtime Calculator</h3>
              <p>Calculate exactly how much overtime pay you're owed under California law</p>
            </Link>
            
            <Link href="/tools/meal-break-penalty-calculator" className="tool-preview">
              <h3>🍽️ Meal Break Penalty Calculator</h3>
              <p>Calculate penalty pay for missed or interrupted meal breaks</p>
            </Link>
            
            <Link href="/" className="tool-preview">
              <h3>📱 Violation Tracker</h3>
              <p>Secure system to document workplace violations and build evidence</p>
            </Link>
            
            <Link href="/tools" className="tool-preview">
              <h3>📝 Legal Templates</h3>
              <p>Download complaint letters, log templates, and documentation tools</p>
            </Link>
          </div>
        </section>

        {/* Attorney Section */}
        <section className="attorney-section">
          <div className="attorney-content">
            <div className="attorney-info">
              <h2>Created by Employment Attorney the attorneys at Skeptical Lawyer</h2>
              <p>
                This tracker was created by a licensed California employment attorney who has seen 
                too many employees suffer violations without proper documentation or knowledge of their rights.
              </p>
              
              <div className="attorney-credentials">
                <div className="credential">
                  <h3>⚖️ Legal Expertise</h3>
                  <p>Specialized practice in California employment law with extensive case experience</p>
                </div>
                
                <div className="credential">
                  <h3>🔒 Attorney-Client Privilege</h3>
                  <p>Your documented violations may be protected under privilege when you consult with Attorney St. Germain</p>
                </div>
                
                <div className="credential">
                  <h3>📞 Direct Access</h3>
                  <p>Get legal consultation directly from the attorney who created this system</p>
                </div>
              </div>
              
              <Link href="/about" className="btn secondary">Learn More About Attorney St. Germain →</Link>
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials Section */}
        <section className="social-proof">
          <h2>Why Employees Choose This Tracker</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <h3>✅ Comprehensive Coverage</h3>
              <p>Covers all major areas of California employment law in one place</p>
            </div>
            
            <div className="benefit">
              <h3>🔒 Secure & Private</h3>
              <p>Your sensitive employment data is protected and confidential</p>
            </div>
            
            <div className="benefit">
              <h3>📚 Educational Focus</h3>
              <p>Learn your rights while documenting violations - knowledge is power</p>
            </div>
            
            <div className="benefit">
              <h3>⚡ Attorney Access</h3>
              <p>Direct connection to specialized employment attorney when needed</p>
            </div>
            
            <div className="benefit">
              <h3>💰 Free to Use</h3>
              <p>All educational content and basic tracking features are completely free</p>
            </div>
            
            <div className="benefit">
              <h3>📱 Easy to Use</h3>
              <p>Intuitive interface designed for employees, not lawyers</p>
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="urgency-section">
          <div className="urgency-content">
            <h2>🚨 Don't Wait - Violations Are Happening Now</h2>
            <div className="urgency-points">
              <div className="urgency-point">
                <h3>⏰ Time Limits Apply</h3>
                <p>Employment law claims have strict deadlines. Document violations before it's too late.</p>
              </div>
              
              <div className="urgency-point">
                <h3>📉 Evidence Disappears</h3>
                <p>Emails get deleted, witnesses leave, and memories fade. Capture evidence now.</p>
              </div>
              
              <div className="urgency-point">
                <h3>💸 Money Lost Daily</h3>
                <p>Every day of unpaid overtime or missed breaks is money out of your pocket.</p>
              </div>
              
              <div className="urgency-point">
                <h3>🔄 Violations Continue</h3>
                <p>Employers rarely fix problems voluntarily. Documentation leads to accountability.</p>
              </div>
            </div>
            
            <div className="urgency-cta">
              <p><strong>Start protecting yourself today. It only takes 5 minutes to begin tracking violations.</strong></p>
              <Link href="/" className="btn primary large urgent">Start Your Violation Log Now</Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-preview">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is this tracker really free?</h3>
              <p>Yes, all educational content and basic violation tracking is completely free. Legal consultation fees only apply if you choose to hire Attorney St. Germain for representation.</p>
            </div>
            
            <div className="faq-item">
              <h3>Is my information confidential?</h3>
              <p>Absolutely. Your data is secure and private. When you consult with Attorney St. Germain, your information may be protected under attorney-client privilege.</p>
            </div>
            
            <div className="faq-item">
              <h3>What if I'm not sure if I have a case?</h3>
              <p>That's exactly why this tracker exists. Use the educational guides to learn about your rights, then document any potential violations. Attorney consultation can help assess your situation.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can my employer see what I'm tracking?</h3>
              <p>No. This is a private system for your personal use. However, be careful about accessing it on company devices or networks.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta">
          <div className="cta-content">
            <h2>Ready to Protect Your Rights?</h2>
            <p>
              Don't let workplace violations continue. You have rights under California law, 
              and this tracker gives you the tools to enforce them.
            </p>
            
            <div className="cta-options">
              <div className="cta-option">
                <h3>📱 Start Tracking Violations</h3>
                <p>Begin documenting workplace violations immediately</p>
                <Link href="/" className="btn primary">Start Tracker →</Link>
              </div>
              
              <div className="cta-option">
                <h3>📚 Learn Your Rights First</h3>
                <p>Understand California employment law before tracking</p>
                <Link href="/wage-hour" className="btn secondary">Learn Rights →</Link>
              </div>
              
              <div className="cta-option">
                <h3>⚖️ Get Legal Help Now</h3>
                <p>Immediate consultation with employment attorney</p>
                <Link href="/contact" className="btn primary">Contact Attorney →</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
