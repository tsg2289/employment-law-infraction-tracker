import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    employer: '',
    urgency: '',
    violationType: '',
    description: '',
    hasDocumentation: '',
    preferredContact: 'email'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateEmailContent = () => {
    const subject = `Employment Law Consultation Request - ${formData.violationType || 'Workplace Violation'}`;
    
    const bodyText = 
      `EMPLOYMENT LAW CONSULTATION REQUEST\n\n` +
      `Dear Attorney St. Germain,\n\n` +
      `I am requesting a consultation regarding potential employment law violations. I found your Employment Law Infraction Tracker and need legal advice to protect my rights.\n\n` +
      `CONTACT INFORMATION:\n` +
      `Name: ${formData.name || '[Please provide]'}\n` +
      `Email: ${formData.email || '[Please provide]'}\n` +
      `Phone: ${formData.phone || '[Please provide]'}\n` +
      `Preferred Contact Method: ${formData.preferredContact}\n\n` +
      `EMPLOYMENT INFORMATION:\n` +
      `Current/Former Employer: ${formData.employer || '[Please provide]'}\n` +
      `Type of Violation: ${formData.violationType || '[Please describe]'}\n` +
      `Urgency Level: ${formData.urgency || 'Not specified'}\n\n` +
      `SITUATION DESCRIPTION:\n` +
      `${formData.description || '[Please provide detailed description]'}\n\n` +
      `DOCUMENTATION:\n` +
      `Do you have documentation? ${formData.hasDocumentation || 'Not specified'}\n\n` +
      `CONSULTATION REQUEST:\n` +
      `I would like to schedule a consultation to:\n` +
      `• Discuss the potential violations and my legal rights\n` +
      `• Establish attorney-client privilege to protect my information\n` +
      `• Understand my legal options and potential remedies\n` +
      `• Develop a strategy to address these violations\n\n` +
      `Please contact me at your earliest convenience to discuss this matter and establish our attorney-client relationship.\n\n` +
      `Thank you for your time and for creating this valuable resource for employees.\n\n` +
      `Best regards,\n` +
      `${formData.name || '[Your name]'}\n\n` +
      `Generated from: Employment Law Infraction Tracker\n` +
      `Date: ${new Date().toLocaleDateString()}`;

    return { subject, bodyText };
  };

  const sendConsultationEmail = () => {
    const { subject, bodyText } = generateEmailContent();
    
    const useGmail = window.confirm(
      `📧 SEND CONSULTATION REQUEST 📧\n\n` +
      `Choose how to send your consultation request:\n\n` +
      `• Click "OK" to open Gmail\n` +
      `• Click "Cancel" to use your default email client`
    );
    
    if (useGmail) {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=thomas.st.germain22@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      window.open(gmailUrl, '_blank');
    } else {
      const mailtoUrl = `mailto:thomas.st.germain22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      window.open(mailtoUrl);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Attorney Thomas St. Germain - Employment Law Consultation | Employment Law Tracker</title>
        <meta name="description" content="Contact employment attorney Thomas St. Germain for legal consultation on workplace violations. Get help with wage theft, discrimination, harassment, and wrongful termination." />
        <meta name="keywords" content="employment attorney consultation, thomas st germain attorney, employment law help, workplace violation legal help" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> → <span>Contact Attorney</span>
        </nav>

        <main className="content">
          <section className="hero-section">
            <h1>Contact Attorney Thomas St. Germain</h1>
            <p className="lead">
              Get professional legal consultation for employment law violations. Protect your rights 
              and establish attorney-client privilege for your documented workplace violations.
            </p>
          </section>

          <section className="urgent-notice">
            <div className="urgent-card">
              <h2>🚨 Urgent Situations</h2>
              <p>
                If you're facing imminent termination, immediate retaliation, or urgent workplace safety issues, 
                contact Attorney St. Germain immediately. Time-sensitive employment situations require quick action 
                to preserve your rights and evidence.
              </p>
              <div className="urgent-contact">
                <p><strong>Email:</strong> thomas.st.germain22@gmail.com</p>
                <p><strong>Subject Line:</strong> "URGENT - Employment Law Matter"</p>
              </div>
            </div>
          </section>

          <section className="consultation-form">
            <div className="form-card">
              <h2>Request Legal Consultation</h2>
              <p>
                Complete this form to generate a comprehensive consultation request email. 
                This ensures Attorney St. Germain has the information needed to assess your situation 
                and provide effective legal guidance.
              </p>
              
              <form className="consultation-form-fields">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="preferredContact">Preferred Contact Method</label>
                    <select 
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either Email or Phone</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="employer">Current/Former Employer</label>
                    <input 
                      type="text" 
                      id="employer"
                      name="employer"
                      value={formData.employer}
                      onChange={handleInputChange}
                      placeholder="Company name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="urgency">Urgency Level</label>
                    <select 
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                    >
                      <option value="">Select urgency level</option>
                      <option value="immediate">Immediate (termination threat, safety issue)</option>
                      <option value="urgent">Urgent (within 1-2 weeks)</option>
                      <option value="soon">Soon (within 1 month)</option>
                      <option value="general">General consultation</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="violationType">Type of Workplace Violation *</label>
                  <select 
                    id="violationType"
                    name="violationType"
                    value={formData.violationType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select violation type</option>
                    <option value="Wage & Hour Violations">Wage & Hour Violations (unpaid overtime, meal breaks, etc.)</option>
                    <option value="Discrimination">Discrimination (race, gender, age, disability, etc.)</option>
                    <option value="Harassment">Harassment (sexual, hostile work environment, etc.)</option>
                    <option value="Retaliation">Retaliation (punishment for complaints or protected activities)</option>
                    <option value="Wrongful Termination">Wrongful Termination</option>
                    <option value="Leave Violations">Leave Violations (FMLA, sick leave, etc.)</option>
                    <option value="Safety Violations">Workplace Safety Violations</option>
                    <option value="Multiple Violations">Multiple Types of Violations</option>
                    <option value="Other">Other Employment Law Issue</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="description">Detailed Description of Situation *</label>
                  <textarea 
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Please provide a detailed description of the workplace violations you've experienced, including dates, people involved, and impact on your employment..."
                    rows="6"
                    required
                  ></textarea>
                  <small>The more detail you provide, the better Attorney St. Germain can assess your situation</small>
                </div>
                
                <div className="form-group">
                  <label htmlFor="hasDocumentation">Do you have documentation of the violations?</label>
                  <select 
                    id="hasDocumentation"
                    name="hasDocumentation"
                    value={formData.hasDocumentation}
                    onChange={handleInputChange}
                  >
                    <option value="">Select documentation status</option>
                    <option value="Yes - Extensive">Yes - I have extensive documentation</option>
                    <option value="Yes - Some">Yes - I have some documentation</option>
                    <option value="Limited">Limited documentation</option>
                    <option value="No - Need Help">No - I need help gathering evidence</option>
                    <option value="Used Tracker">I used the Employment Law Infraction Tracker</option>
                  </select>
                </div>
                
                <button type="button" className="btn primary large" onClick={sendConsultationEmail}>
                  📧 Send Consultation Request
                </button>
                
                <div className="form-note">
                  <p>
                    <strong>Note:</strong> This form generates an email to Attorney St. Germain with your 
                    consultation request. Your information will be transmitted securely and may be protected 
                    under attorney-client privilege once consultation begins.
                  </p>
                </div>
              </form>
            </div>
          </section>

          <section className="why-consult">
            <h2>Why Consult with Attorney St. Germain?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>⚖️ Employment Law Specialist</h3>
                <p>
                  Focused practice in California employment law with extensive experience in 
                  wage violations, discrimination, harassment, and wrongful termination cases.
                </p>
              </div>
              
              <div className="benefit-card">
                <h3>🔒 Attorney-Client Privilege</h3>
                <p>
                  Once consultation begins, your communications and documented violations 
                  may be protected under attorney-client privilege, providing crucial legal protection.
                </p>
              </div>
              
              <div className="benefit-card">
                <h3>📊 Comprehensive Case Assessment</h3>
                <p>
                  Professional evaluation of your claims' strength, potential damages, 
                  and the best legal strategy for your specific situation.
                </p>
              </div>
              
              <div className="benefit-card">
                <h3>🛡️ Retaliation Protection</h3>
                <p>
                  Guidance on protecting yourself from employer retaliation and legal remedies 
                  if retaliation occurs after seeking legal consultation.
                </p>
              </div>
              
              <div className="benefit-card">
                <h3>💼 Maximized Recovery</h3>
                <p>
                  Understanding of all available remedies including lost wages, penalties, 
                  emotional distress damages, punitive damages, and attorney fees.
                </p>
              </div>
              
              <div className="benefit-card">
                <h3>📈 Strategic Approach</h3>
                <p>
                  Development of the best strategy for your case, whether through negotiation, 
                  administrative claims, or litigation to achieve optimal results.
                </p>
              </div>
            </div>
          </section>

          <section className="consultation-process">
            <h2>What to Expect During Consultation</h2>
            <div className="process-steps">
              <div className="step">
                <h3>1. Initial Assessment</h3>
                <p>
                  Attorney St. Germain will review your situation, assess the strength of your claims, 
                  and identify all potential legal violations.
                </p>
              </div>
              
              <div className="step">
                <h3>2. Legal Rights Education</h3>
                <p>
                  You'll receive clear explanation of your rights under California employment law 
                  and how they apply to your specific situation.
                </p>
              </div>
              
              <div className="step">
                <h3>3. Evidence Review</h3>
                <p>
                  Review of your documentation and guidance on gathering additional evidence 
                  to strengthen your case.
                </p>
              </div>
              
              <div className="step">
                <h3>4. Strategy Development</h3>
                <p>
                  Discussion of all available options and development of the best strategy 
                  for achieving your goals.
                </p>
              </div>
              
              <div className="step">
                <h3>5. Next Steps</h3>
                <p>
                  Clear action plan with timelines, next steps, and ongoing legal representation 
                  if desired.
                </p>
              </div>
            </div>
          </section>

          <section className="frequently-asked">
            <h2>Consultation FAQ</h2>
            <div className="faq-list">
              <details>
                <summary>How much does an initial consultation cost?</summary>
                <p>
                  Many employment law consultations are provided at no charge for the initial assessment. 
                  Attorney St. Germain will discuss fee arrangements during your consultation based on 
                  your specific situation and case potential.
                </p>
              </details>
              
              <details>
                <summary>Is my consultation confidential?</summary>
                <p>
                  Yes. All communications with Attorney St. Germain regarding potential representation 
                  are confidential and may be protected under attorney-client privilege, even if you 
                  decide not to proceed with legal action.
                </p>
              </details>
              
              <details>
                <summary>What should I bring to the consultation?</summary>
                <p>
                  Bring any documentation you have including: pay stubs, timecards, emails, text messages, 
                  employee handbook, performance reviews, and your Employment Law Infraction Tracker data 
                  if you've been using it.
                </p>
              </details>
              
              <details>
                <summary>How quickly can I get a consultation?</summary>
                <p>
                  Attorney St. Germain prioritizes urgent employment matters. For time-sensitive situations 
                  (termination threats, safety issues), consultations can often be arranged within 24-48 hours.
                </p>
              </details>
              
              <details>
                <summary>What if I'm not sure if I have a case?</summary>
                <p>
                  That's exactly why consultation is valuable. Many employees are unsure whether their 
                  treatment was legal. Attorney St. Germain can assess your situation and help you understand 
                  your rights and options.
                </p>
              </details>
            </div>
          </section>

          <section className="before-consultation">
            <h2>Before Your Consultation</h2>
            <div className="preparation-checklist">
              <h3>📋 Gather Your Documentation</h3>
              <ul>
                <li>Employment Law Infraction Tracker data (if used)</li>
                <li>Pay stubs and wage statements</li>
                <li>Timecards and work schedules</li>
                <li>Email communications with employer</li>
                <li>Text messages about work issues</li>
                <li>Employee handbook and policies</li>
                <li>Performance reviews and disciplinary records</li>
                <li>Medical records (if applicable)</li>
                <li>Witness contact information</li>
              </ul>
              
              <h3>🧠 Prepare Your Timeline</h3>
              <ul>
                <li>When did violations begin?</li>
                <li>What specific incidents occurred?</li>
                <li>Did you report violations to anyone?</li>
                <li>How did your employer respond?</li>
                <li>Have you experienced retaliation?</li>
                <li>Are other employees affected?</li>
              </ul>
              
              <h3>❓ Questions to Ask</h3>
              <ul>
                <li>Do I have valid legal claims?</li>
                <li>What damages might I be entitled to?</li>
                <li>What are my options for resolution?</li>
                <li>How long do I have to take action?</li>
                <li>What are the risks and benefits of proceeding?</li>
                <li>How can I protect myself from retaliation?</li>
              </ul>
            </div>
          </section>

          <section className="contact-methods">
            <h2>Contact Information</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <h3>📧 Email (Preferred)</h3>
                <p><strong>thomas.st.germain22@gmail.com</strong></p>
                <ul>
                  <li>Best for detailed consultation requests</li>
                  <li>Allows for secure document transmission</li>
                  <li>Creates written record of communications</li>
                  <li>Usually responds within 24 hours</li>
                </ul>
              </div>
              
              <div className="contact-card">
                <h3>🏢 Practice Focus</h3>
                <ul>
                  <li>California Employment Law</li>
                  <li>Wage and Hour Violations</li>
                  <li>Discrimination and Harassment</li>
                  <li>Wrongful Termination</li>
                  <li>Retaliation Claims</li>
                  <li>Workplace Safety Issues</li>
                  <li>Class and Collective Actions</li>
                </ul>
              </div>
              
              <div className="contact-card">
                <h3>⚡ Response Times</h3>
                <ul>
                  <li><strong>Urgent matters:</strong> Within 24 hours</li>
                  <li><strong>General consultations:</strong> Within 2-3 business days</li>
                  <li><strong>Document review:</strong> Within 1 week</li>
                  <li><strong>Emergency situations:</strong> Same day when possible</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="next-steps">
            <h2>Protect Your Rights Today</h2>
            <p>
              Don't face workplace violations alone. Professional legal guidance can help you understand 
              your rights, protect your evidence, and achieve the best possible outcome for your situation.
            </p>
            <div className="cta-buttons">
              <button onClick={sendConsultationEmail} className="btn primary large">
                📧 Request Consultation Now
              </button>
              <Link href="/about" className="btn secondary large">Learn More About Attorney St. Germain</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
