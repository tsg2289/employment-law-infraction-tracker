import Head from 'next/head';
import Link from 'next/link';

export default function Leave() {
  return (
    <>
      <Head>
        <title>California Leave Laws - FMLA, CFRA, Sick Leave Rights | Employment Law Tracker</title>
        <meta name="description" content="Complete guide to California leave laws. Learn about FMLA, CFRA, sick leave, pregnancy disability leave, and protection from retaliation." />
        <meta name="keywords" content="california leave laws, fmla, cfra, sick leave, pregnancy disability leave, family leave, medical leave" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> → <span>Leave of Absence Rights</span>
        </nav>

        <main className="content">
          <section className="hero-section">
            <h1>California Leave of Absence Laws</h1>
            <p className="lead">
              California provides extensive leave protections for employees, including FMLA, CFRA, 
              pregnancy disability leave, and sick leave. Learn your rights, eligibility requirements, 
              and protection from retaliation.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary">Track Leave Violations</Link>
              <Link href="/leave/eligibility-checker" className="btn secondary">Check Eligibility</Link>
            </div>
          </section>

          <section className="leave-types-overview">
            <h2>Types of Protected Leave in California</h2>
            <div className="leave-types-grid">
              <div className="leave-card">
                <h3>👨‍👩‍👧‍👦 Family Medical Leave Act (FMLA)</h3>
                <p>Federal law providing unpaid, job-protected leave for qualifying family and medical reasons</p>
                <ul>
                  <li>Up to 12 weeks per year</li>
                  <li>Employers with 50+ employees</li>
                  <li>Employee worked 1,250+ hours</li>
                  <li>Job restoration guarantee</li>
                </ul>
                <Link href="/leave/fmla-guide">FMLA Guide →</Link>
              </div>
              
              <div className="leave-card">
                <h3>🏠 California Family Rights Act (CFRA)</h3>
                <p>California's expanded family leave law with broader coverage than FMLA</p>
                <ul>
                  <li>Up to 12 weeks per year</li>
                  <li>Employers with 5+ employees</li>
                  <li>No hours worked requirement</li>
                  <li>Broader family definition</li>
                </ul>
                <Link href="/leave/cfra-guide">CFRA Guide →</Link>
              </div>
              
              <div className="leave-card">
                <h3>🤰 Pregnancy Disability Leave (PDL)</h3>
                <p>California leave for pregnancy-related disabilities and childbirth recovery</p>
                <ul>
                  <li>Up to 4 months per pregnancy</li>
                  <li>Employers with 5+ employees</li>
                  <li>Pregnancy-related disabilities</li>
                  <li>Separate from bonding leave</li>
                </ul>
                <Link href="/leave/pregnancy-disability-leave">PDL Guide →</Link>
              </div>
              
              <div className="leave-card">
                <h3>🏥 Paid Sick Leave</h3>
                <p>California's mandatory paid sick leave for all employees</p>
                <ul>
                  <li>Minimum 3 days/24 hours annually</li>
                  <li>All employers (no size limit)</li>
                  <li>Accrues from day one</li>
                  <li>Usable after 90 days</li>
                </ul>
                <Link href="/leave/paid-sick-leave">Sick Leave Guide →</Link>
              </div>
              
              <div className="leave-card">
                <h3>💊 Kin Care</h3>
                <p>Use accrued sick leave to care for family members</p>
                <ul>
                  <li>Up to half of annual sick leave</li>
                  <li>Spouse, children, parents</li>
                  <li>Grandparents, grandchildren, siblings</li>
                  <li>Domestic partners</li>
                </ul>
                <Link href="/leave/kin-care">Kin Care Guide →</Link>
              </div>
              
              <div className="leave-card">
                <h3>🎖️ Military Leave</h3>
                <p>Leave for military service members and their families</p>
                <ul>
                  <li>Military training and deployment</li>
                  <li>Qualifying exigency leave</li>
                  <li>Military caregiver leave</li>
                  <li>Job protection and benefits</li>
                </ul>
                <Link href="/leave/military-leave">Military Leave Guide →</Link>
              </div>
            </div>
          </section>

          <section className="eligibility-requirements">
            <h2>Eligibility Requirements by Leave Type</h2>
            <div className="eligibility-comparison">
              <div className="comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Leave Type</th>
                      <th>Employer Size</th>
                      <th>Employee Tenure</th>
                      <th>Hours Worked</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>FMLA</td>
                      <td>50+ employees</td>
                      <td>12 months</td>
                      <td>1,250 hours</td>
                      <td>12 weeks/year</td>
                    </tr>
                    <tr>
                      <td>CFRA</td>
                      <td>5+ employees</td>
                      <td>12 months</td>
                      <td>1,250 hours</td>
                      <td>12 weeks/year</td>
                    </tr>
                    <tr>
                      <td>PDL</td>
                      <td>5+ employees</td>
                      <td>None</td>
                      <td>None</td>
                      <td>4 months/pregnancy</td>
                    </tr>
                    <tr>
                      <td>Paid Sick Leave</td>
                      <td>All employers</td>
                      <td>90 days to use</td>
                      <td>None</td>
                      <td>3+ days/year</td>
                    </tr>
                    <tr>
                      <td>Kin Care</td>
                      <td>All employers</td>
                      <td>None</td>
                      <td>None</td>
                      <td>½ of sick leave</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <Link href="/tools/leave-eligibility-calculator" className="btn secondary">Calculate Your Eligibility →</Link>
          </section>

          <section className="leave-reasons">
            <h2>Qualifying Reasons for Leave</h2>
            <div className="reasons-grid">
              <div className="reason-category">
                <h3>👩‍⚕️ Your Own Medical Condition</h3>
                <ul>
                  <li>Serious health condition requiring treatment</li>
                  <li>Pregnancy and childbirth complications</li>
                  <li>Chronic conditions requiring periodic treatment</li>
                  <li>Surgery and recovery periods</li>
                  <li>Mental health conditions</li>
                  <li>Substance abuse treatment</li>
                </ul>
              </div>
              
              <div className="reason-category">
                <h3>👨‍👩‍👧‍👦 Family Member Care</h3>
                <ul>
                  <li>Spouse's serious health condition</li>
                  <li>Child's medical needs (any age if disabled)</li>
                  <li>Parent's serious health condition</li>
                  <li>Grandparent, grandchild, sibling care (CFRA)</li>
                  <li>Parent-in-law care (CFRA)</li>
                  <li>Domestic partner care</li>
                </ul>
              </div>
              
              <div className="reason-category">
                <h3>👶 New Child Bonding</h3>
                <ul>
                  <li>Birth of child</li>
                  <li>Adoption of child</li>
                  <li>Foster care placement</li>
                  <li>Bonding with new child</li>
                  <li>Must be taken within 12 months</li>
                </ul>
              </div>
              
              <div className="reason-category">
                <h3>🪖 Military Family Needs</h3>
                <ul>
                  <li>Qualifying exigency (deployment)</li>
                  <li>Military caregiver leave</li>
                  <li>Short notice deployment</li>
                  <li>Military events and activities</li>
                  <li>Childcare and school activities</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="leave-process">
            <h2>How to Request Leave</h2>
            <div className="process-steps">
              <div className="step">
                <h3>1. Provide Notice</h3>
                <ul>
                  <li>30 days advance notice when foreseeable</li>
                  <li>As soon as practicable for emergencies</li>
                  <li>Follow employer's notice procedures</li>
                  <li>Provide enough information to trigger protections</li>
                </ul>
              </div>
              
              <div className="step">
                <h3>2. Complete Paperwork</h3>
                <ul>
                  <li>Employee portion of leave forms</li>
                  <li>Medical certification if required</li>
                  <li>Provide requested documentation</li>
                  <li>Meet employer's deadlines</li>
                </ul>
              </div>
              
              <div className="step">
                <h3>3. Medical Certification</h3>
                <ul>
                  <li>Healthcare provider completes forms</li>
                  <li>Describes medical condition and need</li>
                  <li>Estimates duration of leave needed</li>
                  <li>May require periodic recertification</li>
                </ul>
              </div>
              
              <div className="step">
                <h3>4. Employer Response</h3>
                <ul>
                  <li>Employer has 5 days to respond</li>
                  <li>Must provide eligibility and rights notice</li>
                  <li>Can request additional information</li>
                  <li>Must approve or deny with reasons</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="employer-obligations">
            <h2>Employer Obligations During Leave</h2>
            <div className="obligations-grid">
              <div className="obligation-category">
                <h3>🛡️ Job Protection</h3>
                <ul>
                  <li>Restore to same or equivalent position</li>
                  <li>Same pay, benefits, and terms</li>
                  <li>Cannot lose seniority or accrued benefits</li>
                  <li>Protection from retaliation</li>
                </ul>
              </div>
              
              <div className="obligation-category">
                <h3>🏥 Health Insurance</h3>
                <ul>
                  <li>Continue group health coverage</li>
                  <li>Same terms as if actively working</li>
                  <li>Employee pays their portion of premiums</li>
                  <li>Can recover premiums if no return to work</li>
                </ul>
              </div>
              
              <div className="obligation-category">
                <h3>📋 Notice Requirements</h3>
                <ul>
                  <li>Provide eligibility notice</li>
                  <li>Explain rights and responsibilities</li>
                  <li>Give designation notice</li>
                  <li>Communicate about leave status</li>
                </ul>
              </div>
              
              <div className="obligation-category">
                <h3>🤝 Interactive Process</h3>
                <ul>
                  <li>Engage in good faith discussions</li>
                  <li>Consider reasonable accommodations</li>
                  <li>Explore all leave options</li>
                  <li>Document interactions</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="common-violations">
            <h2>Common Leave Law Violations</h2>
            <div className="violations-list">
              <div className="violation">
                <h3>🚫 Leave Denial</h3>
                <p>Wrongfully denying eligible employees their leave rights</p>
                <ul>
                  <li>Refusing clearly qualifying leave requests</li>
                  <li>Requiring unnecessary documentation</li>
                  <li>Applying inconsistent standards</li>
                  <li>Intimidating employees from taking leave</li>
                </ul>
                <Link href="/leave/wrongful-denial" className="learn-more">Fight Wrongful Denial →</Link>
              </div>
              
              <div className="violation">
                <h3>🔄 Retaliation</h3>
                <p>Punishing employees for exercising leave rights</p>
                <ul>
                  <li>Termination upon return from leave</li>
                  <li>Demotion or reduced responsibilities</li>
                  <li>Hostile treatment after leave</li>
                  <li>Counting leave as attendance violation</li>
                </ul>
                <Link href="/retaliation" className="learn-more">Retaliation Protection →</Link>
              </div>
              
              <div className="violation">
                <h3>🏢 Failure to Restore Position</h3>
                <p>Not returning employees to equivalent positions</p>
                <ul>
                  <li>Eliminating position during leave</li>
                  <li>Offering inferior position upon return</li>
                  <li>Reducing pay or benefits</li>
                  <li>Loss of seniority or accrued time</li>
                </ul>
                <Link href="/leave/restoration-rights" className="learn-more">Restoration Rights →</Link>
              </div>
              
              <div className="violation">
                <h3>💊 Benefits Interference</h3>
                <p>Improperly handling health insurance and benefits</p>
                <ul>
                  <li>Canceling health insurance during leave</li>
                  <li>Requiring different premium payments</li>
                  <li>Loss of accrued vacation or sick time</li>
                  <li>Pension and retirement interference</li>
                </ul>
                <Link href="/leave/benefits-protection" className="learn-more">Benefits Protection →</Link>
              </div>
            </div>
          </section>

          <section className="intermittent-leave">
            <h2>Intermittent & Reduced Schedule Leave</h2>
            <div className="intermittent-info">
              <div className="what-is">
                <h3>What is Intermittent Leave?</h3>
                <p>
                  Taking leave in separate blocks of time or working a reduced schedule 
                  when medically necessary for a serious health condition.
                </p>
              </div>
              
              <div className="when-allowed">
                <h3>When It's Allowed:</h3>
                <ul>
                  <li>Employee's own serious health condition</li>
                  <li>Caring for family member with serious condition</li>
                  <li>Medical appointments and treatments</li>
                  <li>Chronic conditions with flare-ups</li>
                  <li>Recovery periods requiring reduced hours</li>
                </ul>
              </div>
              
              <div className="employer-rights">
                <h3>Employer Rights:</h3>
                <ul>
                  <li>Require medical certification for need</li>
                  <li>Transfer to alternative position with same pay</li>
                  <li>Track intermittent leave usage</li>
                  <li>Require periodic recertification</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="tools-section">
            <h2>Leave Rights Tools</h2>
            <div className="tools-grid">
              <Link href="/tools/leave-eligibility-calculator" className="tool-card">
                <h3>✅ Eligibility Calculator</h3>
                <p>Determine which leave laws apply to your situation</p>
              </Link>
              
              <Link href="/tools/leave-request-template" className="tool-card">
                <h3>📝 Leave Request Templates</h3>
                <p>Generate proper leave request letters</p>
              </Link>
              
              <Link href="/" className="tool-card">
                <h3>📱 Leave Violation Tracker</h3>
                <p>Document leave denials and retaliation</p>
              </Link>
              
              <Link href="/tools/fmla-cfra-comparison" className="tool-card">
                <h3>⚖️ FMLA vs CFRA Comparison</h3>
                <p>Understand the differences between leave laws</p>
              </Link>
            </div>
          </section>

          <section className="return-to-work">
            <h2>Returning to Work</h2>
            <div className="return-info">
              <div className="restoration-rights">
                <h3>Your Restoration Rights</h3>
                <ul>
                  <li>Return to same position or equivalent</li>
                  <li>Same pay, benefits, and working conditions</li>
                  <li>Same shift and work location (if possible)</li>
                  <li>Restore all accrued seniority and benefits</li>
                  <li>No loss of promotional opportunities</li>
                </ul>
              </div>
              
              <div className="fitness-for-duty">
                <h3>Fitness for Duty</h3>
                <ul>
                  <li>Employer may require medical clearance</li>
                  <li>Must be job-related and consistent</li>
                  <li>Cannot be more stringent than for other employees</li>
                  <li>Must relate to essential job functions</li>
                </ul>
              </div>
              
              <div className="accommodations">
                <h3>Reasonable Accommodations</h3>
                <ul>
                  <li>May need accommodations upon return</li>
                  <li>Employer must engage in interactive process</li>
                  <li>Modified duties or schedule</li>
                  <li>Separate from leave protections</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="faq-preview">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <details>
                <summary>Can I use FMLA and CFRA at the same time?</summary>
                <p>
                  If you're eligible for both, they generally run concurrently for the same leave reason. 
                  However, CFRA's broader family definition may provide additional leave time in some situations.
                </p>
              </details>
              
              <details>
                <summary>Do I get paid during family leave?</summary>
                <p>
                  FMLA and CFRA are unpaid, but you may use accrued vacation or sick time. 
                  California's Paid Family Leave (PFL) program provides partial wage replacement 
                  for family bonding and care.
                </p>
              </details>
              
              <details>
                <summary>Can my employer deny my leave request?</summary>
                <p>
                  Employers can only deny leave if you're not eligible or don't provide required 
                  documentation. They cannot deny leave for qualifying reasons if you meet 
                  eligibility requirements.
                </p>
              </details>
            </div>
            <Link href="/leave/faq" className="see-all">See All FAQs →</Link>
          </section>

          <section className="next-steps">
            <h2>Protect Your Leave Rights</h2>
            <p>
              Leave laws provide crucial protections for employees facing medical needs and 
              family obligations. Don't let employers deny your rights or retaliate against you.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary large">Document Leave Violations</Link>
              <Link href="/contact" className="btn secondary large">Get Legal Help</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
