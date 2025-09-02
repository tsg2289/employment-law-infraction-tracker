import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Employment Law Infraction Tracker | Thomas St. Germain, Esq.</title>
        <meta name="description" content="Learn about the Employment Law Infraction Tracker, created by attorney Thomas St. Germain to help employees document workplace violations and protect their rights." />
        <meta name="keywords" content="employment attorney, thomas st germain, workplace violations, employment law, california labor law" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> → <span>About</span>
        </nav>

        <main className="content">
          <section className="hero-section">
            <h1>About the Employment Law Infraction Tracker</h1>
            <p className="lead">
              Created by employment attorney Thomas St. Germain to empower employees with 
              knowledge of their rights and tools to document workplace violations.
            </p>
          </section>

          <section className="mission-section">
            <div className="mission-card">
              <h2>Our Mission</h2>
              <p>
                Too many employees suffer workplace violations in silence, either unaware of their rights 
                or unsure how to document and address illegal conduct. The Employment Law Infraction Tracker 
                was created to bridge this gap by providing:
              </p>
              <ul>
                <li><strong>Education:</strong> Clear, accessible information about employment laws</li>
                <li><strong>Documentation:</strong> Secure tools to track violations and build evidence</li>
                <li><strong>Empowerment:</strong> Resources to understand legal options and take action</li>
                <li><strong>Protection:</strong> Guidance on preserving attorney-client privilege</li>
              </ul>
            </div>
          </section>

          <section className="attorney-profile">
            <div className="profile-content">
              <div className="attorney-info">
                <h2>About Thomas St. Germain, Esq.</h2>
                <p>
                  Thomas St. Germain is a licensed attorney specializing in employment law with a focus 
                  on protecting employee rights. With extensive experience in California employment law, 
                  he has witnessed firsthand how workplace violations can devastate employees' lives 
                  and careers.
                </p>
                
                <h3>Why This Tracker Was Created</h3>
                <p>
                  Throughout his practice, Attorney St. Germain noticed a recurring problem: employees 
                  would come to him months or years after violations occurred, often with insufficient 
                  documentation to build a strong case. Many had suffered in silence, unaware that 
                  their employer's conduct was illegal.
                </p>
                
                <p>
                  This tracker was born from the recognition that employees need resources <em>before</em> 
                  they seek legal help - tools to recognize violations as they happen, document them 
                  properly, and understand their rights in real-time.
                </p>
                
                <h3>Legal Philosophy</h3>
                <blockquote>
                  "Every employee deserves to work with dignity, free from discrimination, harassment, 
                  and wage theft. Knowledge is power, and informed employees are empowered employees. 
                  This tracker ensures no violation goes unnoticed or undocumented."
                </blockquote>
                
                <div className="credentials">
                  <h3>Professional Background</h3>
                  <ul>
                    <li>Licensed to practice law in California</li>
                    <li>Specialization in employment and labor law</li>
                    <li>Experience with wage and hour violations</li>
                    <li>Discrimination and harassment case expertise</li>
                    <li>Wrongful termination and retaliation claims</li>
                    <li>Class action and collective action experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="how-it-helps">
            <h2>How This Tracker Protects You</h2>
            <div className="protection-grid">
              <div className="protection-card">
                <h3>🔒 Secure Documentation</h3>
                <p>
                  Your data is stored securely and can be used to build a comprehensive record 
                  of workplace violations. Proper documentation is crucial for successful legal claims.
                </p>
              </div>
              
              <div className="protection-card">
                <h3>⚖️ Attorney-Client Privilege</h3>
                <p>
                  The tracker is designed with legal consultation in mind. When you consult with 
                  Attorney St. Germain, your documented violations may be protected under 
                  attorney-client privilege.
                </p>
              </div>
              
              <div className="protection-card">
                <h3>📚 Legal Education</h3>
                <p>
                  Comprehensive guides help you understand your rights under California law, 
                  recognize violations, and know when to seek legal help.
                </p>
              </div>
              
              <div className="protection-card">
                <h3>⏰ Real-Time Tracking</h3>
                <p>
                  Document violations as they happen, not months later when memories fade. 
                  Contemporary records are more credible and legally valuable.
                </p>
              </div>
              
              <div className="protection-card">
                <h3>🛡️ Retaliation Protection</h3>
                <p>
                  Learn about your rights to report violations without fear of retaliation, 
                  and document any retaliatory conduct that occurs.
                </p>
              </div>
              
              <div className="protection-card">
                <h3>💼 Career Protection</h3>
                <p>
                  Understanding your rights helps you make informed decisions about your career 
                  and prevents employers from taking advantage of legal ignorance.
                </p>
              </div>
            </div>
          </section>

          <section className="commitment-section">
            <div className="commitment-content">
              <h2>Our Commitment to You</h2>
              
              <div className="commitment-grid">
                <div className="commitment-item">
                  <h3>🔐 Privacy First</h3>
                  <p>
                    Your information is confidential and secure. We understand the sensitive 
                    nature of employment disputes and protect your privacy accordingly.
                  </p>
                </div>
                
                <div className="commitment-item">
                  <h3>📖 Free Education</h3>
                  <p>
                    All educational content is provided free of charge. Every employee 
                    should have access to information about their workplace rights.
                  </p>
                </div>
                
                <div className="commitment-item">
                  <h3>⚡ Responsive Support</h3>
                  <p>
                    When you need legal consultation, Attorney St. Germain provides timely 
                    responses to protect your rights and preserve evidence.
                  </p>
                </div>
                
                <div className="commitment-item">
                  <h3>🎯 Results-Oriented</h3>
                  <p>
                    Our goal is to help you achieve the best possible outcome, whether 
                    through negotiation, administrative claims, or litigation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="why-document">
            <h2>Why Documentation Matters</h2>
            <div className="documentation-importance">
              <div className="importance-card">
                <h3>📋 Legal Evidence</h3>
                <p>
                  Contemporary documentation of violations provides crucial evidence for legal claims. 
                  Courts and agencies give more weight to records made at the time of incidents.
                </p>
              </div>
              
              <div className="importance-card">
                <h3>🧠 Memory Preservation</h3>
                <p>
                  Human memory fades over time. Detailed records preserve important facts, quotes, 
                  and circumstances that might otherwise be forgotten.
                </p>
              </div>
              
              <div className="importance-card">
                <h3>📈 Pattern Recognition</h3>
                <p>
                  Tracking violations over time reveals patterns of illegal conduct that might 
                  not be apparent from individual incidents.
                </p>
              </div>
              
              <div className="importance-card">
                <h3>💪 Negotiation Power</h3>
                <p>
                  Well-documented violations provide leverage in negotiations with employers 
                  and can lead to quicker resolutions.
                </p>
              </div>
            </div>
          </section>

          <section className="california-focus">
            <h2>Why California Employment Law?</h2>
            <div className="california-info">
              <p>
                California has some of the strongest employee protection laws in the nation. 
                However, these protections are only valuable if employees know about them and 
                can prove violations occurred.
              </p>
              
              <div className="california-strengths">
                <h3>California's Employee Protections Include:</h3>
                <ul>
                  <li><strong>Wage & Hour:</strong> Daily overtime, meal and rest break requirements, minimum wage protections</li>
                  <li><strong>Anti-Discrimination:</strong> Broader protected classes and stronger remedies than federal law</li>
                  <li><strong>Family Leave:</strong> More generous leave policies and job protection</li>
                  <li><strong>Safety Rights:</strong> Strong workplace safety protections and whistleblower rights</li>
                  <li><strong>Retaliation Protection:</strong> Comprehensive protections for employees who assert their rights</li>
                </ul>
              </div>
              
              <p>
                This tracker helps you understand and document violations of these valuable protections, 
                ensuring that California's strong employee rights become meaningful in practice.
              </p>
            </div>
          </section>

          <section className="get-help">
            <h2>When to Seek Legal Consultation</h2>
            <div className="consultation-info">
              <p>
                While this tracker provides valuable education and documentation tools, it's not 
                a substitute for legal advice. Consider consulting with Attorney St. Germain when:
              </p>
              
              <ul>
                <li>You've documented significant violations and want to understand your options</li>
                <li>Your employer has retaliated against you for asserting your rights</li>
                <li>You're facing termination and believe it may be wrongful</li>
                <li>You want to ensure your documentation is protected under attorney-client privilege</li>
                <li>You're considering filing a complaint or lawsuit</li>
                <li>Other employees are experiencing similar violations (potential class action)</li>
              </ul>
              
              <div className="consultation-benefits">
                <h3>Benefits of Legal Consultation:</h3>
                <ul>
                  <li>Attorney-client privilege protection for your documented violations</li>
                  <li>Professional assessment of your claims' strength</li>
                  <li>Guidance on the best strategy for your situation</li>
                  <li>Protection from employer retaliation</li>
                  <li>Maximization of potential recovery</li>
                  <li>Access to legal remedies unavailable through self-help</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="contact-info">
            <h2>Contact Attorney Thomas St. Germain</h2>
            <div className="contact-card">
              <p>
                For legal consultation regarding documented workplace violations:
              </p>
              
              <div className="contact-details">
                <div className="contact-method">
                  <h3>📧 Email</h3>
                  <p>thomas.st.germain22@gmail.com</p>
                  <p><small>Preferred method for initial consultations</small></p>
                </div>
                
                <div className="contact-method">
                  <h3>⚖️ Practice Areas</h3>
                  <ul>
                    <li>Wage and hour violations</li>
                    <li>Discrimination and harassment</li>
                    <li>Wrongful termination</li>
                    <li>Retaliation claims</li>
                    <li>Workplace safety violations</li>
                    <li>Class and collective actions</li>
                  </ul>
                </div>
                
                <div className="contact-method">
                  <h3>🔒 Confidentiality</h3>
                  <p>
                    All communications regarding potential legal representation are confidential 
                    and may be protected under attorney-client privilege.
                  </p>
                </div>
              </div>
              
              <Link href="/contact" className="btn primary">Get Legal Consultation →</Link>
            </div>
          </section>

          <section className="next-steps">
            <h2>Start Protecting Your Rights Today</h2>
            <p>
              Don't wait until violations escalate or your memory fades. Start documenting 
              workplace violations now and empower yourself with knowledge of your rights.
            </p>
            <div className="cta-buttons">
              <Link href="/" className="btn primary large">Start Tracking Violations</Link>
              <Link href="/wage-hour" className="btn secondary large">Learn Your Rights</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
