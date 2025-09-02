import Head from 'next/head';
import Link from 'next/link';

export default function Termination() {
  return (
    <>
      <Head>
        <title>California Wrongful Termination Laws - At-Will Employment Limits | Employment Law Tracker</title>
        <meta name="description" content="Complete guide to California wrongful termination laws. Learn about at-will employment exceptions, unlawful firing, and legal remedies for wrongful discharge." />
        <meta name="keywords" content="wrongful termination, at-will employment, unlawful firing, california termination laws, constructive discharge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> → <span>Wrongful Termination</span>
        </nav>

        <main className="content">
          <section className="hero-section">
            <h1>California Wrongful Termination Laws</h1>
            <p className="lead">
              While California is an at-will employment state, there are important exceptions that protect 
              employees from unlawful termination. Learn when your firing may be illegal and what legal 
              remedies are available.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary">Analyze Your Termination</Link>
              <Link href="/termination/at-will-exceptions" className="btn secondary">At-Will Exceptions</Link>
            </div>
          </section>

          <section className="at-will-overview">
            <h2>Understanding At-Will Employment</h2>
            <div className="at-will-grid">
              <div className="at-will-card">
                <h3>📋 What At-Will Means</h3>
                <p>
                  In California, employers can generally terminate employees for any reason, 
                  at any time, without advance notice - but there are important legal exceptions.
                </p>
                <ul>
                  <li>No contract required for termination</li>
                  <li>No advance notice required</li>
                  <li>Reason not required (but helpful)</li>
                  <li>Employee can also quit anytime</li>
                </ul>
              </div>
              
              <div className="at-will-card">
                <h3>🚫 Important Exceptions</h3>
                <p>
                  You cannot be fired for discriminatory reasons, in retaliation for protected 
                  activities, or in violation of public policy.
                </p>
                <ul>
                  <li>Discrimination based on protected class</li>
                  <li>Retaliation for protected activities</li>
                  <li>Public policy violations</li>
                  <li>Breach of employment contract</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="wrongful-termination-types">
            <h2>Types of Wrongful Termination</h2>
            <div className="termination-types">
              <div className="type-card">
                <h3>⚖️ Discriminatory Termination</h3>
                <p>Firing based on protected characteristics rather than job performance</p>
                <div className="examples">
                  <h4>Examples:</h4>
                  <ul>
                    <li>Terminated due to pregnancy announcement</li>
                    <li>Fired because of age, race, or gender</li>
                    <li>Dismissed for religious beliefs or practices</li>
                    <li>Terminated due to disability or medical condition</li>
                  </ul>
                </div>
                <Link href="/discrimination" className="learn-more">Learn About Discrimination →</Link>
              </div>
              
              <div className="type-card">
                <h3>🔄 Retaliatory Termination</h3>
                <p>Firing in response to protected activities or complaints</p>
                <div className="examples">
                  <h4>Examples:</h4>
                  <ul>
                    <li>Fired after filing harassment complaint</li>
                    <li>Terminated for reporting wage violations</li>
                    <li>Dismissed after requesting accommodations</li>
                    <li>Fired for using protected leave (FMLA)</li>
                  </ul>
                </div>
                <Link href="/retaliation" className="learn-more">Learn About Retaliation →</Link>
              </div>
              
              <div className="type-card">
                <h3>🏛️ Public Policy Violations</h3>
                <p>Termination that violates fundamental public policy</p>
                <div className="examples">
                  <h4>Examples:</h4>
                  <ul>
                    <li>Fired for refusing to commit crimes</li>
                    <li>Terminated for reporting illegal activities</li>
                    <li>Dismissed for jury duty service</li>
                    <li>Fired for exercising voting rights</li>
                  </ul>
                </div>
                <Link href="/termination/public-policy-violations" className="learn-more">Public Policy Protection →</Link>
              </div>
              
              <div className="type-card">
                <h3>📄 Breach of Contract</h3>
                <p>Violation of written or implied employment contracts</p>
                <div className="examples">
                  <h4>Examples:</h4>
                  <ul>
                    <li>Firing without following handbook procedures</li>
                    <li>Terminating without required progressive discipline</li>
                    <li>Violating specific contract terms</li>
                    <li>Implied contract through policies/practices</li>
                  </ul>
                </div>
                <Link href="/termination/contract-violations" className="learn-more">Contract Protection →</Link>
              </div>
            </div>
          </section>

          <section className="constructive-discharge">
            <h2>Constructive Discharge</h2>
            <div className="constructive-info">
              <div className="definition">
                <h3>What is Constructive Discharge?</h3>
                <p>
                  When working conditions become so intolerable that a reasonable person would 
                  feel compelled to resign. Legally treated as termination, not voluntary resignation.
                </p>
              </div>
              
              <div className="conditions">
                <h3>Conditions That May Create Constructive Discharge:</h3>
                <ul>
                  <li>Severe harassment or discrimination</li>
                  <li>Dangerous or unsafe working conditions</li>
                  <li>Significant reduction in pay or responsibilities</li>
                  <li>Impossible performance standards</li>
                  <li>Transfer to undesirable location</li>
                  <li>Elimination of essential job functions</li>
                  <li>Constant criticism and humiliation</li>
                  <li>Isolation from colleagues and resources</li>
                </ul>
              </div>
              
              <div className="proving">
                <h3>Proving Constructive Discharge:</h3>
                <ul>
                  <li>Objective standard: reasonable person test</li>
                  <li>Deliberate intent to force resignation</li>
                  <li>No reasonable alternative but to quit</li>
                  <li>Working conditions materially changed</li>
                  <li>Employer's actions were the cause</li>
                </ul>
              </div>
            </div>
            <Link href="/termination/constructive-discharge-examples" className="btn secondary">See Examples →</Link>
          </section>

          <section className="termination-red-flags">
            <h2>Red Flags: Signs of Wrongful Termination</h2>
            <div className="red-flags-grid">
              <div className="flag-category">
                <h3>🕐 Timing Red Flags</h3>
                <ul>
                  <li>Fired shortly after filing complaint</li>
                  <li>Terminated after requesting accommodation</li>
                  <li>Dismissed upon return from protected leave</li>
                  <li>Fired after pregnancy announcement</li>
                  <li>Terminated near retirement eligibility</li>
                  <li>Dismissed after workers' comp claim</li>
                </ul>
              </div>
              
              <div className="flag-category">
                <h3>📊 Pattern Red Flags</h3>
                <ul>
                  <li>Different treatment from similar employees</li>
                  <li>Sudden negative performance reviews</li>
                  <li>Changed evaluation standards</li>
                  <li>Pretextual reasons for termination</li>
                  <li>Inconsistent application of policies</li>
                  <li>History of discriminatory comments</li>
                </ul>
              </div>
              
              <div className="flag-category">
                <h3>💬 Statement Red Flags</h3>
                <ul>
                  <li>Discriminatory comments by management</li>
                  <li>References to protected characteristics</li>
                  <li>Threats about complaints or activities</li>
                  <li>Comments about "troublemakers"</li>
                  <li>Age-related remarks ("fresh blood")</li>
                  <li>Stereotypical assumptions</li>
                </ul>
              </div>
              
              <div className="flag-category">
                <h3>📋 Procedural Red Flags</h3>
                <ul>
                  <li>Failure to follow handbook procedures</li>
                  <li>Skipping progressive discipline</li>
                  <li>No documentation of performance issues</li>
                  <li>Rushed termination process</li>
                  <li>Refusal to provide termination reason</li>
                  <li>Immediate security escort</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="immediate-steps">
            <h2>Immediate Steps After Termination</h2>
            <div className="steps-timeline">
              <div className="step">
                <h3>Day 1: Document Everything</h3>
                <ul>
                  <li>Write down exactly what happened</li>
                  <li>Note who was present during termination</li>
                  <li>Record the reason given (if any)</li>
                  <li>Save all work-related documents</li>
                  <li>Take screenshots of work accounts before access ends</li>
                </ul>
              </div>
              
              <div className="step">
                <h3>First Week: Secure Evidence</h3>
                <ul>
                  <li>Request personnel file from employer</li>
                  <li>Collect performance reviews and evaluations</li>
                  <li>Gather emails, texts, and communications</li>
                  <li>Contact potential witnesses</li>
                  <li>Review employee handbook and policies</li>
                </ul>
              </div>
              
              <div className="step">
                <h3>First Month: Understand Your Rights</h3>
                <ul>
                  <li>Research applicable laws and protections</li>
                  <li>Calculate potential damages</li>
                  <li>Determine statute of limitations deadlines</li>
                  <li>Consider consulting with attorney</li>
                  <li>File for unemployment benefits</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="common-scenarios">
            <h2>Common Wrongful Termination Scenarios</h2>
            <div className="scenario-list">
              <div className="scenario">
                <h3>The Pregnancy Penalty</h3>
                <p>
                  You announce your pregnancy and within weeks face performance criticism 
                  that was never mentioned before, leading to termination.
                </p>
                <Link href="/termination/pregnancy-termination" className="learn-more">Pregnancy Protection →</Link>
              </div>
              
              <div className="scenario">
                <h3>The Complaint Backlash</h3>
                <p>
                  After filing a harassment or discrimination complaint, you're terminated 
                  for alleged policy violations or performance issues.
                </p>
                <Link href="/termination/complaint-retaliation" className="learn-more">Retaliation Protection →</Link>
              </div>
              
              <div className="scenario">
                <h3>The Age Shuffle</h3>
                <p>
                  Older employees are systematically eliminated through "restructuring" 
                  while younger workers are retained or hired.
                </p>
                <Link href="/termination/age-discrimination-termination" className="learn-more">Age Discrimination →</Link>
              </div>
              
              <div className="scenario">
                <h3>The Medical Leave Punishment</h3>
                <p>
                  You return from FMLA leave to find your position eliminated or face 
                  immediate termination for "business reasons."
                </p>
                <Link href="/termination/fmla-termination" className="learn-more">FMLA Protection →</Link>
              </div>
            </div>
          </section>

          <section className="damages-remedies">
            <h2>Damages & Legal Remedies</h2>
            <div className="damages-grid">
              <div className="damage-category">
                <h3>💰 Economic Damages</h3>
                <ul>
                  <li>Lost wages from termination date</li>
                  <li>Lost benefits and insurance</li>
                  <li>Future earning capacity losses</li>
                  <li>Job search and retraining costs</li>
                  <li>Pension and retirement losses</li>
                </ul>
              </div>
              
              <div className="damage-category">
                <h3>😢 Non-Economic Damages</h3>
                <ul>
                  <li>Emotional distress and suffering</li>
                  <li>Loss of professional reputation</li>
                  <li>Humiliation and embarrassment</li>
                  <li>Anxiety and depression</li>
                  <li>Impact on family relationships</li>
                </ul>
              </div>
              
              <div className="damage-category">
                <h3>⚖️ Equitable Relief</h3>
                <ul>
                  <li>Reinstatement to former position</li>
                  <li>Front pay in lieu of reinstatement</li>
                  <li>Restoration of benefits and seniority</li>
                  <li>Policy changes and training</li>
                  <li>Injunctive relief</li>
                </ul>
              </div>
              
              <div className="damage-category">
                <h3>⚡ Punitive Damages</h3>
                <ul>
                  <li>Available for egregious conduct</li>
                  <li>Designed to punish employer</li>
                  <li>Deter future violations</li>
                  <li>Can be substantial amounts</li>
                  <li>Attorney fees may be recoverable</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="tools-section">
            <h2>Wrongful Termination Tools</h2>
            <div className="tools-grid">
              <Link href="/" className="tool-card">
                <h3>📱 Termination Analyzer</h3>
                <p>Analyze whether your termination may be wrongful</p>
              </Link>
              
              <Link href="/tools/termination-timeline-template" className="tool-card">
                <h3>⏰ Termination Timeline</h3>
                <p>Document the events leading to your termination</p>
              </Link>
              
              <Link href="/tools/damages-calculator" className="tool-card">
                <h3>💰 Damages Calculator</h3>
                <p>Estimate potential damages from wrongful termination</p>
              </Link>
              
              <Link href="/tools/evidence-preservation-checklist" className="tool-card">
                <h3>📋 Evidence Checklist</h3>
                <p>Ensure you preserve all relevant evidence</p>
              </Link>
            </div>
          </section>

          <section className="statute-limitations">
            <h2>Important Deadlines</h2>
            <div className="deadlines-info">
              <div className="deadline-warning">
                <h3>⚠️ Don't Wait - Deadlines Matter</h3>
                <p>
                  Employment law claims have strict deadlines. Missing these deadlines 
                  can permanently bar your right to seek legal remedies.
                </p>
              </div>
              
              <div className="deadlines-grid">
                <div className="deadline">
                  <h4>FEHA Claims (Discrimination/Harassment)</h4>
                  <p><strong>3 years</strong> to file with Civil Rights Department</p>
                  <p><strong>1 year</strong> from right-to-sue letter to file lawsuit</p>
                </div>
                
                <div className="deadline">
                  <h4>Wrongful Termination in Violation of Public Policy</h4>
                  <p><strong>2 years</strong> from termination date</p>
                </div>
                
                <div className="deadline">
                  <h4>Breach of Contract</h4>
                  <p><strong>4 years</strong> for written contracts</p>
                  <p><strong>2 years</strong> for oral contracts</p>
                </div>
                
                <div className="deadline">
                  <h4>Wage Claims</h4>
                  <p><strong>3 years</strong> for most wage violations</p>
                  <p><strong>4 years</strong> for certain written contract violations</p>
                </div>
              </div>
            </div>
          </section>

          <section className="faq-preview">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <details>
                <summary>Can I be fired for no reason in California?</summary>
                <p>
                  Yes, California is an at-will state, meaning you can generally be terminated 
                  without reason. However, you cannot be fired for illegal reasons such as 
                  discrimination, retaliation, or public policy violations.
                </p>
              </details>
              
              <details>
                <summary>How do I prove my termination was wrongful?</summary>
                <p>
                  Gather evidence showing the true reason for termination was illegal: timing, 
                  discriminatory comments, different treatment from others, pretextual reasons, 
                  and documentation of protected activities.
                </p>
              </details>
              
              <details>
                <summary>Should I sign a severance agreement?</summary>
                <p>
                  Don't sign immediately. Review carefully, especially release clauses. 
                  Consider consulting an attorney first. You may have claims worth more 
                  than the severance offered.
                </p>
              </details>
            </div>
            <Link href="/termination/faq" className="see-all">See All FAQs →</Link>
          </section>

          <section className="next-steps">
            <h2>Your Termination May Not Be Legal</h2>
            <p>
              Don't assume your firing was lawful just because California is at-will. 
              Many terminations violate employment laws and you may have valuable legal claims.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary large">Analyze Your Termination</Link>
              <Link href="/contact" className="btn secondary large">Get Legal Consultation</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
