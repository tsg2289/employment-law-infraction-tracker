import Head from 'next/head';
import Link from 'next/link';

export default function Safety() {
  return (
    <>
      <Head>
        <title>California Workplace Safety Laws - OSHA Rights & Protections | Employment Law Tracker</title>
        <meta name="description" content="Complete guide to California workplace safety laws. Learn about OSHA rights, Cal/OSHA protections, reporting violations, and retaliation protection." />
        <meta name="keywords" content="workplace safety, cal osha, california workplace safety, osha violations, safety complaints, workplace hazards" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> → <span>Workplace Safety</span>
        </nav>

        <main className="content">
          <section className="hero-section">
            <h1>California Workplace Safety Laws</h1>
            <p className="lead">
              Every employee has the right to a safe workplace. California's workplace safety laws, 
              enforced by Cal/OSHA, provide strong protections against hazards and retaliation for 
              reporting safety violations.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary">Report Safety Violations</Link>
              <Link href="/safety/cal-osha-complaint" className="btn secondary">File Cal/OSHA Complaint</Link>
            </div>
          </section>

          <section className="safety-rights">
            <h2>Your Workplace Safety Rights</h2>
            <div className="rights-grid">
              <div className="right-card">
                <h3>🛡️ Right to a Safe Workplace</h3>
                <p>Your employer must provide a workplace free from recognized hazards</p>
                <ul>
                  <li>Safe working conditions and environment</li>
                  <li>Proper safety equipment and training</li>
                  <li>Hazard-free tools and machinery</li>
                  <li>Protection from toxic substances</li>
                </ul>
              </div>
              
              <div className="right-card">
                <h3>📢 Right to Report Hazards</h3>
                <p>You can report safety violations without fear of retaliation</p>
                <ul>
                  <li>Report to your employer</li>
                  <li>File Cal/OSHA complaints</li>
                  <li>Contact safety representatives</li>
                  <li>Participate in inspections</li>
                </ul>
              </div>
              
              <div className="right-card">
                <h3>🚫 Right to Refuse Unsafe Work</h3>
                <p>You can refuse work that poses immediate danger to your health or safety</p>
                <ul>
                  <li>Imminent danger to life or health</li>
                  <li>No reasonable alternative</li>
                  <li>Insufficient time for Cal/OSHA inspection</li>
                  <li>Protection from retaliation</li>
                </ul>
              </div>
              
              <div className="right-card">
                <h3>📋 Right to Information</h3>
                <p>Access to safety information, training, and records</p>
                <ul>
                  <li>Safety training and procedures</li>
                  <li>Hazard communication information</li>
                  <li>Accident and injury records</li>
                  <li>Inspection results</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="common-hazards">
            <h2>Common Workplace Hazards</h2>
            <div className="hazards-grid">
              <div className="hazard-category">
                <h3>🏭 Physical Hazards</h3>
                <ul>
                  <li>Unsafe machinery and equipment</li>
                  <li>Fall hazards and unguarded openings</li>
                  <li>Electrical hazards and exposed wiring</li>
                  <li>Fire hazards and blocked exits</li>
                  <li>Noise exposure above safe levels</li>
                  <li>Temperature extremes (heat/cold)</li>
                </ul>
                <Link href="/safety/physical-hazards">Learn More →</Link>
              </div>
              
              <div className="hazard-category">
                <h3>☠️ Chemical Hazards</h3>
                <ul>
                  <li>Toxic chemical exposure</li>
                  <li>Inadequate ventilation</li>
                  <li>Missing safety data sheets</li>
                  <li>Improper chemical storage</li>
                  <li>Lack of personal protective equipment</li>
                  <li>Asbestos and lead exposure</li>
                </ul>
                <Link href="/safety/chemical-hazards">Learn More →</Link>
              </div>
              
              <div className="hazard-category">
                <h3>🦠 Biological Hazards</h3>
                <ul>
                  <li>Infectious disease exposure</li>
                  <li>Bloodborne pathogen risks</li>
                  <li>Mold and fungi exposure</li>
                  <li>Inadequate sanitation</li>
                  <li>Contaminated work surfaces</li>
                  <li>Pest infestations</li>
                </ul>
                <Link href="/safety/biological-hazards">Learn More →</Link>
              </div>
              
              <div className="hazard-category">
                <h3>🧠 Ergonomic Hazards</h3>
                <ul>
                  <li>Repetitive motion injuries</li>
                  <li>Heavy lifting without assistance</li>
                  <li>Poor workstation setup</li>
                  <li>Awkward working positions</li>
                  <li>Vibration exposure</li>
                  <li>Inadequate rest breaks</li>
                </ul>
                <Link href="/safety/ergonomic-hazards">Learn More →</Link>
              </div>
              
              <div className="hazard-category">
                <h3>😰 Psychological Hazards</h3>
                <ul>
                  <li>Workplace violence threats</li>
                  <li>Severe workplace stress</li>
                  <li>Harassment and bullying</li>
                  <li>Isolation and lack of support</li>
                  <li>Excessive work demands</li>
                  <li>Traumatic incident exposure</li>
                </ul>
                <Link href="/safety/psychological-hazards">Learn More →</Link>
              </div>
              
              <div className="hazard-category">
                <h3>🌡️ Environmental Hazards</h3>
                <ul>
                  <li>Extreme heat exposure (indoor/outdoor)</li>
                  <li>Poor air quality</li>
                  <li>Inadequate lighting</li>
                  <li>Excessive humidity</li>
                  <li>Weather-related hazards</li>
                  <li>Radiation exposure</li>
                </ul>
                <Link href="/safety/environmental-hazards">Learn More →</Link>
              </div>
            </div>
          </section>

          <section className="cal-osha-overview">
            <h2>California Occupational Safety & Health Administration (Cal/OSHA)</h2>
            <div className="cal-osha-info">
              <div className="cal-osha-card">
                <h3>🏛️ What is Cal/OSHA?</h3>
                <p>
                  California's workplace safety enforcement agency, providing stronger 
                  protections than federal OSHA in many areas.
                </p>
                <ul>
                  <li>Enforces workplace safety standards</li>
                  <li>Conducts workplace inspections</li>
                  <li>Issues citations and penalties</li>
                  <li>Provides safety training and resources</li>
                </ul>
              </div>
              
              <div className="cal-osha-card">
                <h3>📞 How to Contact Cal/OSHA</h3>
                <p>Report workplace safety violations and request inspections</p>
                <ul>
                  <li>Online complaint system</li>
                  <li>Phone: 1-833-579-0927</li>
                  <li>Anonymous complaints accepted</li>
                  <li>Available in multiple languages</li>
                </ul>
              </div>
              
              <div className="cal-osha-card">
                <h3>🕒 Cal/OSHA Response Times</h3>
                <p>Timeline for Cal/OSHA to respond to different types of hazards</p>
                <ul>
                  <li>Imminent hazard: Immediately</li>
                  <li>Serious hazard: Within 3 working days</li>
                  <li>Non-serious hazard: Within 30 days</li>
                  <li>Discrimination complaint: Within 30 days</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="reporting-process">
            <h2>How to Report Safety Violations</h2>
            <div className="reporting-steps">
              <div className="step">
                <h3>1. Internal Reporting</h3>
                <p>Start by reporting to your employer when safe to do so</p>
                <ul>
                  <li>Notify your supervisor immediately</li>
                  <li>Use company safety reporting procedures</li>
                  <li>Document the hazard and your report</li>
                  <li>Follow up on corrective action</li>
                </ul>
                <div className="step-note">
                  ⚠️ Skip this step if reporting would expose you to retaliation or the hazard is immediately dangerous
                </div>
              </div>
              
              <div className="step">
                <h3>2. Cal/OSHA Complaint</h3>
                <p>File formal complaint with California's safety enforcement agency</p>
                <ul>
                  <li>Complete Cal/OSHA complaint form</li>
                  <li>Provide detailed hazard description</li>
                  <li>Include location and affected employees</li>
                  <li>Request inspection if needed</li>
                </ul>
                <div className="step-note">
                  💡 Complaints can be filed anonymously to protect your identity
                </div>
              </div>
              
              <div className="step">
                <h3>3. Document Everything</h3>
                <p>Keep detailed records of hazards and reporting efforts</p>
                <ul>
                  <li>Photos/videos of hazardous conditions</li>
                  <li>Written reports and communications</li>
                  <li>Witness statements and contact information</li>
                  <li>Medical records if injured</li>
                </ul>
              </div>
              
              <div className="step">
                <h3>4. Follow Up</h3>
                <p>Monitor progress and ensure hazards are corrected</p>
                <ul>
                  <li>Track employer's response</li>
                  <li>Monitor Cal/OSHA inspection results</li>
                  <li>Report continuing hazards</li>
                  <li>Document any retaliation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="retaliation-protection">
            <h2>Protection from Retaliation</h2>
            <div className="retaliation-info">
              <div className="protected-activities">
                <h3>Protected Safety Activities</h3>
                <p>You cannot be retaliated against for:</p>
                <ul>
                  <li>Filing Cal/OSHA complaints</li>
                  <li>Reporting safety hazards</li>
                  <li>Participating in safety inspections</li>
                  <li>Refusing unsafe work</li>
                  <li>Requesting safety equipment</li>
                  <li>Supporting other employees' safety complaints</li>
                  <li>Testifying in safety proceedings</li>
                </ul>
              </div>
              
              <div className="retaliation-examples">
                <h3>Examples of Illegal Retaliation</h3>
                <ul>
                  <li>Termination after safety complaint</li>
                  <li>Demotion or pay reduction</li>
                  <li>Schedule changes or hour cuts</li>
                  <li>Harassment or hostile treatment</li>
                  <li>Exclusion from safety committees</li>
                  <li>Threats or intimidation</li>
                  <li>Disciplinary actions</li>
                </ul>
              </div>
              
              <div className="remedies">
                <h3>Remedies for Retaliation</h3>
                <ul>
                  <li>Reinstatement to position</li>
                  <li>Back pay and benefits</li>
                  <li>Removal of disciplinary actions</li>
                  <li>Compensation for damages</li>
                  <li>Attorney fees</li>
                  <li>Punitive damages (when applicable)</li>
                </ul>
              </div>
            </div>
            <Link href="/retaliation" className="btn secondary">Learn More About Retaliation Protection →</Link>
          </section>

          <section className="employer-obligations">
            <h2>Employer Safety Obligations</h2>
            <div className="obligations-grid">
              <div className="obligation-category">
                <h3>🏗️ General Duty</h3>
                <ul>
                  <li>Provide workplace free from recognized hazards</li>
                  <li>Comply with all applicable safety standards</li>
                  <li>Ensure employee compliance with safety rules</li>
                  <li>Correct hazards in timely manner</li>
                </ul>
              </div>
              
              <div className="obligation-category">
                <h3>📚 Training & Information</h3>
                <ul>
                  <li>Provide safety training to all employees</li>
                  <li>Train on specific job hazards</li>
                  <li>Ensure understanding of safety procedures</li>
                  <li>Provide training in employee's language</li>
                </ul>
              </div>
              
              <div className="obligation-category">
                <h3>🦺 Personal Protective Equipment</h3>
                <ul>
                  <li>Provide necessary safety equipment</li>
                  <li>Ensure proper fit and maintenance</li>
                  <li>Train employees on proper use</li>
                  <li>Replace damaged equipment</li>
                </ul>
              </div>
              
              <div className="obligation-category">
                <h3>📊 Record Keeping</h3>
                <ul>
                  <li>Maintain injury and illness logs</li>
                  <li>Report serious injuries to Cal/OSHA</li>
                  <li>Post safety notices and citations</li>
                  <li>Provide access to safety records</li>
                </ul>
              </div>
              
              <div className="obligation-category">
                <h3>🔍 Workplace Monitoring</h3>
                <ul>
                  <li>Monitor for health hazards</li>
                  <li>Conduct regular safety inspections</li>
                  <li>Test air quality and noise levels</li>
                  <li>Maintain monitoring records</li>
                </ul>
              </div>
              
              <div className="obligation-category">
                <h3>📋 Injury Response</h3>
                <ul>
                  <li>Provide first aid and medical attention</li>
                  <li>Report serious injuries immediately</li>
                  <li>Investigate accidents thoroughly</li>
                  <li>Implement corrective measures</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="industry-specific">
            <h2>Industry-Specific Safety Issues</h2>
            <div className="industries-grid">
              <div className="industry-card">
                <h3>🏗️ Construction</h3>
                <ul>
                  <li>Fall protection requirements</li>
                  <li>Scaffolding and ladder safety</li>
                  <li>Excavation and trenching</li>
                  <li>Heavy machinery operation</li>
                </ul>
                <Link href="/safety/construction-safety">Construction Safety →</Link>
              </div>
              
              <div className="industry-card">
                <h3>🏭 Manufacturing</h3>
                <ul>
                  <li>Machine guarding requirements</li>
                  <li>Lockout/tagout procedures</li>
                  <li>Chemical exposure protection</li>
                  <li>Noise and vibration control</li>
                </ul>
                <Link href="/safety/manufacturing-safety">Manufacturing Safety →</Link>
              </div>
              
              <div className="industry-card">
                <h3>🏥 Healthcare</h3>
                <ul>
                  <li>Bloodborne pathogen protection</li>
                  <li>Patient lifting safety</li>
                  <li>Workplace violence prevention</li>
                  <li>Chemical and drug safety</li>
                </ul>
                <Link href="/safety/healthcare-safety">Healthcare Safety →</Link>
              </div>
              
              <div className="industry-card">
                <h3>🍽️ Restaurant/Food Service</h3>
                <ul>
                  <li>Kitchen equipment safety</li>
                  <li>Slip and fall prevention</li>
                  <li>Burn and cut prevention</li>
                  <li>Food safety and sanitation</li>
                </ul>
                <Link href="/safety/restaurant-safety">Restaurant Safety →</Link>
              </div>
              
              <div className="industry-card">
                <h3>💼 Office Work</h3>
                <ul>
                  <li>Ergonomic workstation setup</li>
                  <li>Indoor air quality</li>
                  <li>Emergency evacuation procedures</li>
                  <li>Workplace violence prevention</li>
                </ul>
                <Link href="/safety/office-safety">Office Safety →</Link>
              </div>
              
              <div className="industry-card">
                <h3>🌾 Agriculture</h3>
                <ul>
                  <li>Heat illness prevention</li>
                  <li>Pesticide exposure protection</li>
                  <li>Machinery and equipment safety</li>
                  <li>Field sanitation requirements</li>
                </ul>
                <Link href="/safety/agriculture-safety">Agriculture Safety →</Link>
              </div>
            </div>
          </section>

          <section className="tools-section">
            <h2>Workplace Safety Tools</h2>
            <div className="tools-grid">
              <Link href="/" className="tool-card">
                <h3>⚠️ Safety Violation Tracker</h3>
                <p>Document workplace hazards and safety violations</p>
              </Link>
              
              <Link href="/tools/cal-osha-complaint-generator" className="tool-card">
                <h3>📝 Cal/OSHA Complaint Generator</h3>
                <p>Generate formal safety complaint letters</p>
              </Link>
              
              <Link href="/tools/safety-hazard-checklist" className="tool-card">
                <h3>✅ Safety Hazard Checklist</h3>
                <p>Comprehensive workplace safety assessment tool</p>
              </Link>
              
              <Link href="/tools/safety-training-tracker" className="tool-card">
                <h3>📚 Safety Training Tracker</h3>
                <p>Track required safety training and certifications</p>
              </Link>
            </div>
          </section>

          <section className="emergency-situations">
            <h2>Emergency Safety Situations</h2>
            <div className="emergency-info">
              <div className="immediate-danger">
                <h3>🚨 Immediate Danger</h3>
                <p>If you face immediate risk of serious injury or death:</p>
                <ul>
                  <li>Remove yourself from danger immediately</li>
                  <li>Call 911 if medical attention needed</li>
                  <li>Report to Cal/OSHA immediately: 1-833-579-0927</li>
                  <li>Document the hazard with photos/video if safe</li>
                  <li>Notify your employer after ensuring safety</li>
                </ul>
              </div>
              
              <div className="injury-response">
                <h3>🏥 Workplace Injury Response</h3>
                <p>If you're injured at work:</p>
                <ul>
                  <li>Seek immediate medical attention</li>
                  <li>Report injury to employer immediately</li>
                  <li>File workers' compensation claim</li>
                  <li>Document the accident scene and causes</li>
                  <li>Keep all medical records and receipts</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="faq-preview">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <details>
                <summary>Can I file an anonymous safety complaint?</summary>
                <p>
                  Yes, Cal/OSHA accepts anonymous complaints. However, providing your contact 
                  information allows them to get additional details and update you on the investigation.
                </p>
              </details>
              
              <details>
                <summary>What if my employer retaliates against me for reporting safety violations?</summary>
                <p>
                  Retaliation for safety complaints is illegal under both state and federal law. 
                  You can file a discrimination complaint with Cal/OSHA and may have grounds for a lawsuit.
                </p>
              </details>
              
              <details>
                <summary>How long does Cal/OSHA have to inspect after I file a complaint?</summary>
                <p>
                  Cal/OSHA must respond to imminent hazards immediately, serious hazards within 3 working days, 
                  and non-serious hazards within 30 days of receiving the complaint.
                </p>
              </details>
            </div>
            <Link href="/safety/faq" className="see-all">See All FAQs →</Link>
          </section>

          <section className="next-steps">
            <h2>Your Safety Matters</h2>
            <p>
              Don't risk your health and safety for any job. You have the right to a safe workplace 
              and strong legal protections against retaliation for reporting violations.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary large">Report Safety Violations</Link>
              <Link href="/contact" className="btn secondary large">Get Legal Help</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
