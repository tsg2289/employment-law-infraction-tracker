import Head from 'next/head';
import BreadcrumbLd from '../../components/BreadcrumbLd';
import ArticleLd from '../../components/ArticleLd';
import FaqLd from '../../components/FaqLd';

export default function MissedMealBreakPenalty() {
  const faqs = [
    {
      question: "What is the meal-break penalty in California?",
      answer: "If a required meal break is not provided, the employer owes the employee one additional hour of pay at the employee's regular rate of compensation for each workday that the meal period is not provided."
    },
    {
      question: "How far back can I claim missed breaks?",
      answer: "In California, you can generally claim meal break penalties for up to three years back from when you file your claim, though the specific lookback period can vary depending on your situation."
    },
    {
      question: "Can I be fired for asking about breaks?",
      answer: "No, retaliation for asserting your right to meal breaks is illegal in California. If you're fired or disciplined for requesting your legally required breaks, you may have a retaliation claim."
    },
    {
      question: "Do I need to clock out for meal breaks?",
      answer: "Yes, in most cases you should clock out for meal breaks to show they were unpaid. However, if you're not relieved of all duties during your break, it should be paid time."
    }
  ];

  return (
    <>
      <Head>
        <title>Missed Meal Break Penalty California: How It Works + Free Tracker</title>
        <meta name="description" content="Learn California's meal break penalty rules with plain-English examples. Document violations with our professional tracker created by employment attorney the attorneys at Skeptical Lawyer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://employment-law-infraction-tracker.vercel.app/wage-hour/missed-meal-break-penalty/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Missed Meal Break Penalty California: Complete Guide" />
        <meta property="og:description" content="Professional guide to California meal break penalties with free tracking tool" />
        <meta property="og:url" content="https://employment-law-infraction-tracker.vercel.app/wage-hour/missed-meal-break-penalty/" />
        <meta property="og:type" content="article" />
      </Head>

      {/* Schema Markup */}
      <BreadcrumbLd
        segments={["wage-hour", "missed-meal-break-penalty"]}
        names={["Wage & Hour", "Missed Meal Break Penalty"]}
      />
      
      <ArticleLd
        title="Missed Meal Break Penalty California: How It Works + Free Tracker"
        description="Learn California's meal break penalty rules with plain-English examples. Document violations with our professional tracker."
        urlPath="/wage-hour/missed-meal-break-penalty/"
        imageUrl="https://employment-law-infraction-tracker.vercel.app/images/meal-break-penalty-hero.webp"
        datePublished="2024-12-19"
        dateModified="2024-12-19"
        wordCount={1500}
        readingTime={6}
      />
      
      <FaqLd
        urlPath="/wage-hour/missed-meal-break-penalty/"
        faqs={faqs}
      />

      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '20px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        lineHeight: '1.6',
        color: '#e6edf3',
        background: '#0b0f14',
        minHeight: '100vh'
      }}>
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '20px', fontSize: '14px' }}>
          <a href="/" style={{ color: '#14b8a6', textDecoration: 'none' }}>Home</a>
          <span style={{ margin: '0 8px', color: '#9aa4b2' }}>→</span>
          <a href="/wage-hour/" style={{ color: '#14b8a6', textDecoration: 'none' }}>Wage & Hour</a>
          <span style={{ margin: '0 8px', color: '#9aa4b2' }}>→</span>
          <span style={{ color: '#9aa4b2' }}>Missed Meal Break Penalty</span>
        </nav>

        <article>
          <header style={{ marginBottom: '40px' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '16px',
              color: '#e6edf3'
            }}>
              Missed Meal Break Penalty (California): How It Works + Free Tracker
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#9aa4b2',
              marginBottom: '20px'
            }}>
              Plain-English rules, examples, and what to document. Start a private log in minutes.
            </p>
            <div style={{ 
              fontSize: '14px', 
              color: '#9aa4b2',
              borderBottom: '1px solid #1f2937',
              paddingBottom: '20px'
            }}>
              By the attorneys at Skeptical Lawyer, Esq. • Updated December 19, 2024 • 6 min read
            </div>
          </header>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#14b8a6', marginBottom: '16px' }}>What is the Meal Break Penalty?</h2>
            <p style={{ marginBottom: '16px' }}>
              In California, if your employer fails to provide you with a required meal break, they owe you one additional hour of pay at your regular rate for each workday the meal period was not provided. This is called a "meal break penalty" or "premium pay."
            </p>
            <p style={{ marginBottom: '16px' }}>
              The law is designed to encourage employers to actually provide meal breaks, not just pay penalties instead.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#14b8a6', marginBottom: '16px' }}>When Are Meal Breaks Required?</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>If you work more than 5 hours: 30-minute unpaid meal break</li>
              <li style={{ marginBottom: '8px' }}>If you work more than 10 hours: Second 30-minute unpaid meal break</li>
              <li style={{ marginBottom: '8px' }}>Must be uninterrupted and duty-free</li>
              <li style={{ marginBottom: '8px' }}>Should occur before the end of your 5th hour of work</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#14b8a6', marginBottom: '16px' }}>Document Your Violations</h2>
            <div style={{ 
              background: '#1f2937', 
              padding: '20px', 
              borderRadius: '8px',
              border: '1px solid #14b8a6'
            }}>
              <p style={{ marginBottom: '16px' }}>
                <strong>Use our professional tracker to document meal break violations:</strong>
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                <li>Record dates and times of missed breaks</li>
                <li>Track your regular rate of pay</li>
                <li>Calculate potential penalties owed</li>
                <li>Generate professional summaries</li>
                <li>Attorney-client privilege protection available</li>
              </ul>
              <a 
                href="/" 
                style={{ 
                  display: 'inline-block',
                  background: '#14b8a6', 
                  color: '#000', 
                  padding: '12px 24px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Start Tracking Now →
              </a>
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#14b8a6', marginBottom: '16px' }}>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: '24px' }}>
                <h3 style={{ 
                  color: '#e6edf3', 
                  marginBottom: '8px',
                  fontSize: '1.1rem'
                }}>
                  {faq.question}
                </h3>
                <p style={{ color: '#9aa4b2', paddingLeft: '16px' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </section>

          <section style={{ 
            background: '#1f2937', 
            padding: '20px', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#14b8a6', marginBottom: '16px' }}>Need Legal Help?</h2>
            <p style={{ marginBottom: '16px' }}>
              This tracker was created by the attorneys at Skeptical Lawyer, Esq., a California employment attorney.
              For personalized legal advice about your meal break violations:
            </p>
            <a 
              href="mailto:thomas@skepticallawyers.com"
              style={{ 
                display: 'inline-block',
                background: '#14b8a6', 
                color: '#000', 
                padding: '12px 24px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              📧 Contact Attorney St. Germain
            </a>
          </section>
        </article>
      </div>
    </>
  );
}