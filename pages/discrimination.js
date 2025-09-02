import Head from 'next/head';
import Link from 'next/link';

export default function Discrimination() {
  return (
    <>
      <Head>
        <title>Workplace Discrimination Laws California - Protected Classes | Employment Law Tracker</title>
        <meta name="description" content="Complete guide to California workplace discrimination laws. Learn about protected classes, pregnancy discrimination, disability accommodation, and legal remedies." />
        <meta name="keywords" content="workplace discrimination, protected classes, pregnancy discrimination, disability discrimination, feha, california discrimination laws" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> → <span>Workplace Discrimination</span>
        </nav>

        <main className="content">
          <section className="hero-section">
            <h1>California Workplace Discrimination Laws</h1>
            <p className="lead">
              California's Fair Employment and Housing Act (FEHA) protects employees from discrimination based on 
              protected characteristics. Learn about your rights, accommodation requirements, and legal remedies 
              for discrimination.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary">Document Discrimination</Link>
              <Link href="/discrimination/protected-classes" className="btn secondary">View Protected Classes</Link>
            </div>
          </section>

          <section className="protected-classes">
            <h2>California Protected Classes</h2>
            <p>It's illegal to discriminate based on any of these characteristics:</p>
            <div className="classes-grid">
              <div className="class-card">
                <h3>🌍 Race & Ethnicity</h3>
                <p>Protection against discrimination based on race, color, national origin, or ancestry</p>
                <Link href="/discrimination/race-discrimination">Learn More →</Link>
              </div>
              
              <div className="class-card">
                <h3>⚧️ Sex & Gender</h3>
                <p>Includes sex, gender identity, gender expression, and sexual orientation</p>
                <Link href="/discrimination/gender-discrimination">Learn More →</Link>
              </div>
              
              <div className="class-card">
                <h3>🤰 Pregnancy</h3>
                <p>Pregnancy, childbirth, and related medical conditions require accommodation</p>
                <Link href="/discrimination/pregnancy-discrimination">Learn More →</Link>
              </div>
              
              <div className="class-card">
                <h3>♿ Disability</h3>
                <p>Physical and mental disabilities require reasonable accommodation</p>
                <Link href="/discrimination/disability-discrimination">Learn More →</Link>
              </div>
              
              <div className="class-card">
                <h3>📅 Age</h3>
                <p>Protection for employees 40 years and older</p>
                <Link href="/discrimination/age-discrimination">Learn More →</Link>
              </div>
              
              <div className="class-card">
                <h3>✝️ Religion</h3>
                <p>Religious beliefs, practices, and observance require accommodation</p>
                <Link href="/discrimination/religious-discrimination">Learn More →</Link>
              </div>
              
              <div className="class-card">
                <h3>💍 Marital Status</h3>
                <p>Single, married, divorced, or domestic partnership status</p>
                <Link href="/discrimination/marital-status-discrimination">Learn More →</Link>
              </div>
              
              <div className="class-card">
                <h3>🪖 Military Status</h3>
                <p>Military service, veteran status, and deployment obligations</p>
                <Link href="/discrimination/military-discrimination">Learn More →</Link>
              </div>
            </div>
          </section>

          <section className="discrimination-types">
            <h2>Types of Workplace Discrimination</h2>
            <div className="types-grid">
              <div className="type-card">
                <h3>Hiring Discrimination</h3>
                <p>
                  Refusing to hire, using biased interview questions, or applying different 
                  standards based on protected characteristics.
                </p>
                <ul>
                  <li>Biased job postings or requirements</li>
                  <li>Discriminatory interview questions</li>
                  <li>Background check disparities</li>
                  <li>Refusing reasonable accommodations</li>
                </ul>
                <Link href="/discrimination/hiring-discrimination">Examples & Rights →</Link>
              </div>
              
              <div className="type-card">
                <h3>Pay & Promotion Discrimination</h3>
                <p>
                  Unequal pay, benefits, or advancement opportunities based on 
                  protected characteristics rather than merit.
                </p>
                <ul>
                  <li>Pay disparities for equal work</li>
                  <li>Promotion bypass patterns</li>
                  <li>Unequal benefit access</li>
                  <li>Performance review bias</li>
                </ul>
                <Link href="/discrimination/pay-promotion-discrimination">Know Your Rights →</Link>
              </div>
              
              <div className="type-card">
                <h3>Termination Discrimination</h3>
                <p>
                  Firing employees or forcing resignation based on protected 
                  characteristics or failure to accommodate.
                </p>
                <ul>
                  <li>Pretextual terminations</li>
                  <li>Failure to accommodate</li>
                  <li>Constructive discharge</li>
                  <li>Pattern of targeting</li>
                </ul>
                <Link href="/discrimination/wrongful-termination">Wrongful Termination →</Link>
              </div>
              
              <div className="type-card">
                <h3>Accommodation Failures</h3>
                <p>
                  Refusing to provide reasonable accommodations for disabilities, 
                  pregnancy, or religious practices.
                </p>
                <ul>
                  <li>Disability accommodation refusal</li>
                  <li>Pregnancy accommodation denial</li>
                  <li>Religious practice conflicts</li>
                  <li>Interactive process failures</li>
                </ul>
                <Link href="/discrimination/accommodation-failures">Accommodation Rights →</Link>
              </div>
            </div>
          </section>

          <section className="accommodation-focus">
            <h2>Reasonable Accommodation Requirements</h2>
            <div className="accommodation-grid">
              <div className="accommodation-category">
                <h3>Disability Accommodations</h3>
                <p>Examples of reasonable accommodations for disabilities:</p>
                <ul>
                  <li>Modified work schedules</li>
                  <li>Ergonomic equipment</li>
                  <li>Accessible workspaces</li>
                  <li>Job restructuring</li>
                  <li>Assistive technology</li>
                  <li>Modified policies</li>
                </ul>
                <Link href="/discrimination/disability-accommodation-examples">See All Examples →</Link>
              </div>
              
              <div className="accommodation-category">
                <h3>Pregnancy Accommodations</h3>
                <p>California requires accommodations for pregnancy-related conditions:</p>
                <ul>
                  <li>More frequent breaks</li>
                  <li>Seating availability</li>
                  <li>Light duty assignments</li>
                  <li>Modified schedules</li>
                  <li>Temporary transfers</li>
                  <li>Leave for medical appointments</li>
                </ul>
                <Link href="/discrimination/pregnancy-accommodation-rights">Pregnancy Rights →</Link>
              </div>
              
              <div className="accommodation-category">
                <h3>Religious Accommodations</h3>
                <p>Accommodations for religious beliefs and practices:</p>
                <ul>
                  <li>Schedule modifications for worship</li>
                  <li>Dress code exceptions</li>
                  <li>Dietary accommodations</li>
                  <li>Prayer time allowances</li>
                  <li>Holiday schedule adjustments</li>
                  <li>Workspace modifications</li>
                </ul>
                <Link href="/discrimination/religious-accommodation-examples">Religious Rights →</Link>
              </div>
            </div>
          </section>

          <section className="common-scenarios">
            <h2>Common Discrimination Scenarios</h2>
            <div className="scenario-list">
              <div className="scenario">
                <h3>The "Cultural Fit" Excuse</h3>
                <p>
                  Being passed over for hire or promotion due to "culture fit" concerns that are really 
                  about your protected characteristics rather than job qualifications.
                </p>
                <Link href="/discrimination/cultural-fit-discrimination" className="learn-more">Learn More →</Link>
              </div>
              
              <div className="scenario">
                <h3>Pregnancy Penalty</h3>
                <p>
                  Being treated differently after announcing pregnancy, denied accommodations, 
                  or pushed out due to assumptions about your abilities or commitment.
                </p>
                <Link href="/discrimination/pregnancy-discrimination" className="learn-more">Pregnancy Rights →</Link>
              </div>
              
              <div className="scenario">
                <h3>Age-Based Assumptions</h3>
                <p>
                  Being excluded from opportunities, training, or technology projects due to 
                  age-based stereotypes about abilities or adaptability.
                </p>
                <Link href="/discrimination/age-discrimination" className="learn-more">Age Discrimination →</Link>
              </div>
              
              <div className="scenario">
                <h3>Accommodation Runaround</h3>
                <p>
                  Endless delays, requirements for unnecessary documentation, or refusal to engage 
                  in the interactive process for disability accommodations.
                </p>
                <Link href="/discrimination/interactive-process-failures" className="learn-more">Interactive Process →</Link>
              </div>
            </div>
          </section>

          <section className="proving-discrimination">
            <h2>Proving Your Discrimination Case</h2>
            <div className="proof-methods">
              <div className="method">
                <h3>Direct Evidence</h3>
                <p>Clear statements or actions showing discriminatory intent</p>
                <ul>
                  <li>Discriminatory comments or slurs</li>
                  <li>Written communications</li>
                  <li>Witness testimony</li>
                  <li>Recorded conversations</li>
                </ul>
              </div>
              
              <div class="method">
                <h3>Circumstantial Evidence</h3>
                <p>Patterns and circumstances that suggest discrimination</p>
                <ul>
                  <li>Statistical disparities</li>
                  <li>Similarly situated comparators</li>
                  <li>Timing of adverse actions</li>
                  <li>Pretext for decisions</li>
                </ul>
              </div>
              
              <div className="method">
                <h3>Pattern Evidence</h3>
                <p>Systematic discrimination affecting multiple employees</p>
                <ul>
                  <li>Company-wide disparities</li>
                  <li>Discriminatory policies</li>
                  <li>Management training gaps</li>
                  <li>Complaint handling patterns</li>
                </ul>
              </div>
            </div>
            <Link href="/discrimination/building-your-case" className="btn secondary">Build Your Case →</Link>
          </section>

          <section className="tools-section">
            <h2>Discrimination Documentation Tools</h2>
            <div className="tools-grid">
              <Link href="/" className="tool-card">
                <h3>📊 Discrimination Tracker</h3>
                <p>Document discriminatory incidents and patterns</p>
              </Link>
              
              <Link href="/tools/accommodation-request-template" className="tool-card">
                <h3>📝 Accommodation Request Template</h3>
                <p>Generate formal accommodation request letters</p>
              </Link>
              
              <Link href="/tools/comparator-analysis" className="tool-card">
                <h3>⚖️ Comparator Analysis Tool</h3>
                <p>Compare your treatment to similarly situated employees</p>
              </Link>
              
              <Link href="/tools/discrimination-evidence-checklist" className="tool-card">
                <h3>✅ Evidence Checklist</h3>
                <p>Ensure you're collecting all relevant evidence</p>
              </Link>
            </div>
          </section>

          <section className="legal-remedies">
            <h2>Legal Remedies for Discrimination</h2>
            <div className="remedies-grid">
              <div className="remedy-category">
                <h3>Monetary Damages</h3>
                <ul>
                  <li>Back pay and lost benefits</li>
                  <li>Front pay for future losses</li>
                  <li>Emotional distress damages</li>
                  <li>Punitive damages (when applicable)</li>
                  <li>Attorney fees and costs</li>
                </ul>
              </div>
              
              <div className="remedy-category">
                <h3>Equitable Relief</h3>
                <ul>
                  <li>Job reinstatement</li>
                  <li>Promotion to rightful position</li>
                  <li>Policy changes</li>
                  <li>Training requirements</li>
                  <li>Monitoring compliance</li>
                </ul>
              </div>
              
              <div className="remedy-category">
                <h3>Accommodation Orders</h3>
                <ul>
                  <li>Reasonable accommodations</li>
                  <li>Interactive process training</li>
                  <li>Accessibility improvements</li>
                  <li>Policy modifications</li>
                  <li>Future accommodation procedures</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="faq-preview">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <details>
                <summary>What's the difference between discrimination and harassment?</summary>
                <p>
                  Discrimination typically involves tangible employment actions (hiring, firing, promotion, pay) 
                  based on protected characteristics, while harassment creates a hostile work environment. 
                  Both can occur together.
                </p>
              </details>
              
              <details>
                <summary>How do I prove I was discriminated against?</summary>
                <p>
                  You can use direct evidence (discriminatory statements), circumstantial evidence (patterns, 
                  timing, pretext), or statistical evidence showing disparate treatment or impact.
                </p>
              </details>
              
              <details>
                <summary>Can small employers discriminate in California?</summary>
                <p>
                  FEHA applies to employers with 5 or more employees for most types of discrimination. 
                  Some protections apply to even smaller employers, and federal law may also apply.
                </p>
              </details>
            </div>
            <Link href="/discrimination/faq" className="see-all">See All FAQs →</Link>
          </section>

          <section className="next-steps">
            <h2>Stand Up for Your Rights</h2>
            <p>
              Discrimination in the workplace is illegal and you have powerful legal protections. 
              Don't let unfair treatment continue - document incidents and understand your options.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary large">Document Discrimination Now</Link>
              <Link href="/contact" className="btn secondary large">Get Legal Consultation</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
