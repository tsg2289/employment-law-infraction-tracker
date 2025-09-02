import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Harassment() {
  return (
    <>
      <Head>
        <title>Workplace Harassment Laws California - Know Your Rights | Employment Law Tracker</title>
        <meta name="description" content="Complete guide to California workplace harassment laws. Learn about sexual harassment, hostile work environment, and how to report violations safely." />
        <meta name="keywords" content="workplace harassment, sexual harassment, hostile work environment, california harassment laws, feha" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> → <span>Workplace Harassment</span>
        </nav>

        <main className="content">
          <section className="hero-section">
            <h1>California Workplace Harassment Laws</h1>
            <p className="lead">
              California's Fair Employment and Housing Act (FEHA) provides strong protections against workplace harassment. 
              Learn your rights, understand what constitutes harassment, and discover your options for reporting and legal action.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary">Document Harassment Incidents</Link>
              <Link href="/harassment/report-harassment-without-hr" className="btn secondary">Reporting Options</Link>
            </div>
          </section>

          <section className="overview-grid">
            <div className="card">
              <h2>🚫 Sexual Harassment</h2>
              <p>
                Unwelcome sexual advances, requests for sexual favors, or verbal/physical conduct of a sexual nature. 
                Includes quid pro quo and hostile environment harassment.
              </p>
              <div className="links">
                <Link href="/harassment/sexual-harassment-examples">Examples of Sexual Harassment</Link>
                <Link href="/harassment/quid-pro-quo-vs-hostile-environment">Types of Sexual Harassment</Link>
              </div>
            </div>

            <div className="card">
              <h2>🏢 Hostile Work Environment</h2>
              <p>
                Unwelcome conduct based on protected characteristics that creates an intimidating, 
                hostile, or offensive work environment for a reasonable person.
              </p>
              <div className="links">
                <Link href="/harassment/hostile-work-environment-examples">Examples & Case Studies</Link>
                <Link href="/harassment/proving-hostile-environment">How to Prove Your Case</Link>
              </div>
            </div>

            <div className="card">
              <h2>⚖️ Protected Classes</h2>
              <p>
                Harassment based on race, gender, age, disability, religion, sexual orientation, 
                and other protected characteristics is illegal under California law.
              </p>
              <div className="links">
                <Link href="/harassment/protected-class-harassment">All Protected Classes</Link>
                <Link href="/harassment/intersectional-harassment">Multiple Protected Classes</Link>
              </div>
            </div>

            <div className="card">
              <h2>📢 Reporting Harassment</h2>
              <p>
                Know your options for reporting harassment internally and externally. 
                Employers have duties to investigate and prevent harassment.
              </p>
              <div className="links">
                <Link href="/harassment/report-harassment-without-hr">Reporting Without HR</Link>
                <Link href="/harassment/employer-investigation-requirements">Employer Duties</Link>
              </div>
            </div>

            <div className="card">
              <h2>🛡️ Retaliation Protection</h2>
              <p>
                It's illegal for employers to retaliate against employees who report harassment 
                or participate in harassment investigations.
              </p>
              <div className="links">
                <Link href="/harassment/retaliation-for-reporting">Retaliation Examples</Link>
                <Link href="/retaliation" className="pillar-link">Learn About Retaliation →</Link>
              </div>
            </div>

            <div className="card">
              <h2>💼 Supervisor vs Coworker</h2>
              <p>
                Different standards apply depending on whether harassment comes from supervisors, 
                coworkers, or third parties like customers or vendors.
              </p>
              <div className="links">
                <Link href="/harassment/supervisor-harassment">Supervisor Harassment</Link>
                <Link href="/harassment/third-party-harassment">Customer/Vendor Harassment</Link>
              </div>
            </div>
          </section>

          <section className="warning-signs">
            <h2>Recognizing Harassment: Warning Signs</h2>
            <div className="signs-grid">
              <div className="sign-category">
                <h3>Sexual Harassment Signs</h3>
                <ul>
                  <li>Unwanted sexual comments or jokes</li>
                  <li>Inappropriate touching or physical contact</li>
                  <li>Sexual advances or requests for dates</li>
                  <li>Sharing explicit images or content</li>
                  <li>Comments about your body or appearance</li>
                  <li>Quid pro quo offers or threats</li>
                </ul>
              </div>
              
              <div className="sign-category">
                <h3>Hostile Environment Signs</h3>
                <ul>
                  <li>Offensive jokes about protected characteristics</li>
                  <li>Derogatory comments or slurs</li>
                  <li>Bullying or intimidation tactics</li>
                  <li>Exclusion from work activities</li>
                  <li>Sabotage of your work or reputation</li>
                  <li>Threats or aggressive behavior</li>
                </ul>
              </div>
              
              <div className="sign-category">
                <h3>Escalation Patterns</h3>
                <ul>
                  <li>Behavior becomes more frequent</li>
                  <li>Comments become more explicit</li>
                  <li>Physical contact increases</li>
                  <li>Behavior continues despite objections</li>
                  <li>Others begin participating</li>
                  <li>Your work performance is affected</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="common-situations">
            <h2>Common Harassment Situations</h2>
            <div className="situation-list">
              <div className="situation">
                <h3>The "Joking" Coworker</h3>
                <p>
                  Constant sexual jokes, inappropriate comments disguised as humor, or offensive remarks 
                  about protected characteristics that make you uncomfortable.
                </p>
                <Link href="/harassment/sexual-harassment-examples" className="learn-more">See Examples →</Link>
              </div>
              
              <div className="situation">
                <h3>The Overly Friendly Manager</h3>
                <p>
                  Unwanted physical contact, personal questions, invitations to non-work events, 
                  or hints that your job depends on personal relationships.
                </p>
                <Link href="/harassment/supervisor-harassment" className="learn-more">Supervisor Harassment →</Link>
              </div>
              
              <div className="situation">
                <h3>The Hostile Team</h3>
                <p>
                  Group behavior that excludes, demeans, or targets you based on protected characteristics, 
                  creating a toxic work environment.
                </p>
                <Link href="/harassment/hostile-work-environment-examples" className="learn-more">Hostile Environment →</Link>
              </div>
              
              <div className="situation">
                <h3>The Retaliatory Response</h3>
                <p>
                  Your work conditions worsen, you're excluded from opportunities, or face discipline 
                  after reporting harassment or refusing advances.
                </p>
                <Link href="/harassment/retaliation-for-reporting" className="learn-more">Retaliation Signs →</Link>
              </div>
            </div>
          </section>

          <section className="reporting-options">
            <h2>Your Reporting Options</h2>
            <div className="reporting-grid">
              <div className="option">
                <h3>1. Internal Reporting</h3>
                <ul>
                  <li>Direct supervisor (if not the harasser)</li>
                  <li>Human Resources department</li>
                  <li>Company hotline or ombudsman</li>
                  <li>Follow written complaint procedures</li>
                </ul>
                <p><strong>Pros:</strong> May resolve quickly, maintains employment relationship</p>
                <p><strong>Cons:</strong> Company may not investigate properly, potential for retaliation</p>
              </div>
              
              <div className="option">
                <h3>2. External Agencies</h3>
                <ul>
                  <li>California Civil Rights Department (CRD)</li>
                  <li>Equal Employment Opportunity Commission (EEOC)</li>
                  <li>File complaint within statute of limitations</li>
                  <li>Receive "right to sue" letter</li>
                </ul>
                <p><strong>Pros:</strong> Official investigation, legal protection, required before lawsuit</p>
                <p><strong>Cons:</strong> Can be slow, limited remedies available</p>
              </div>
              
              <div className="option">
                <h3>3. Legal Action</h3>
                <ul>
                  <li>Consult with employment attorney</li>
                  <li>File lawsuit in state or federal court</li>
                  <li>Seek damages for emotional distress, lost wages</li>
                  <li>Potential punitive damages</li>
                </ul>
                <p><strong>Pros:</strong> Maximum recovery potential, public accountability</p>
                <p><strong>Cons:</strong> Time-consuming, expensive, public process</p>
              </div>
            </div>
            <Link href="/harassment/report-harassment-without-hr" className="btn secondary">Learn About Reporting Without HR →</Link>
          </section>

          <section className="tools-section">
            <h2>Harassment Documentation Tools</h2>
            <div className="tools-grid">
              <Link href="/" className="tool-card">
                <h3>📱 Incident Tracker</h3>
                <p>Document harassment incidents with dates, witnesses, and details</p>
              </Link>
              
              <Link href="/tools/harassment-log-template" className="tool-card">
                <h3>📝 Harassment Log Template</h3>
                <p>Download template to track patterns of harassment</p>
              </Link>
              
              <Link href="/tools/witness-statement-template" className="tool-card">
                <h3>👥 Witness Statement Template</h3>
                <p>Collect witness statements about harassment incidents</p>
              </Link>
              
              <Link href="/tools/workplace-complaint-letter-generator" className="tool-card">
                <h3>✍️ Complaint Letter Generator</h3>
                <p>Generate formal harassment complaint letters</p>
              </Link>
            </div>
          </section>

          <section className="legal-remedies">
            <h2>Legal Remedies & Damages</h2>
            <div className="remedies-grid">
              <div className="remedy">
                <h3>Economic Damages</h3>
                <ul>
                  <li>Lost wages and benefits</li>
                  <li>Future earning capacity</li>
                  <li>Medical expenses</li>
                  <li>Job search costs</li>
                </ul>
              </div>
              
              <div className="remedy">
                <h3>Non-Economic Damages</h3>
                <ul>
                  <li>Emotional distress</li>
                  <li>Pain and suffering</li>
                  <li>Loss of enjoyment of life</li>
                  <li>Humiliation and embarrassment</li>
                </ul>
              </div>
              
              <div className="remedy">
                <h3>Equitable Relief</h3>
                <ul>
                  <li>Reinstatement to position</li>
                  <li>Promotion to rightful position</li>
                  <li>Policy changes</li>
                  <li>Training requirements</li>
                </ul>
              </div>
              
              <div className="remedy">
                <h3>Punitive Damages</h3>
                <ul>
                  <li>Available for egregious conduct</li>
                  <li>Designed to punish and deter</li>
                  <li>Can be substantial amounts</li>
                  <li>Attorney fees may be available</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="faq-preview">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <details>
                <summary>What's the difference between harassment and discrimination?</summary>
                <p>
                  Harassment is unwelcome conduct that creates a hostile work environment, while discrimination 
                  involves adverse employment actions (firing, not hiring, etc.) based on protected characteristics. 
                  They often occur together.
                </p>
              </details>
              
              <details>
                <summary>Do I have to report harassment to my employer first?</summary>
                <p>
                  While not legally required, reporting internally first may help resolve the issue quickly and 
                  can strengthen your legal case by showing the employer had notice and opportunity to address it.
                </p>
              </details>
              
              <details>
                <summary>How long do I have to file a harassment complaint?</summary>
                <p>
                  In California, you have 3 years to file a complaint with the Civil Rights Department and 
                  1 year from receiving a right-to-sue letter to file a lawsuit.
                </p>
              </details>
            </div>
            <Link href="/harassment/faq" className="see-all">See All FAQs →</Link>
          </section>

          <section className="next-steps">
            <h2>Don't Suffer in Silence</h2>
            <p>
              Workplace harassment is illegal and you have rights. Whether you're experiencing harassment now 
              or want to be prepared, documenting incidents and understanding your options is crucial.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary large">Document Harassment Now</Link>
              <Link href="/contact" className="btn secondary large">Get Legal Help</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
