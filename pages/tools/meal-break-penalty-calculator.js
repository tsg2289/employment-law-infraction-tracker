import Head from 'next/head';
import { useState } from 'react';
import BreadcrumbLd from '../../components/BreadcrumbLd';
import AppLd from '../../components/AppLd';

export default function MealBreakPenaltyCalculator() {
  const [hourlyRate, setHourlyRate] = useState('');
  const [missedBreaks, setMissedBreaks] = useState('');
  const [penalty, setPenalty] = useState(null);

  const calculatePenalty = () => {
    const rate = parseFloat(hourlyRate);
    const breaks = parseInt(missedBreaks);
    if (rate && breaks) {
      setPenalty(rate * breaks);
    }
  };

  return (
    <>
      <Head>
        <title>Meal Break Penalty Calculator (CA) - Free Employment Law Tool</title>
        <meta name="description" content="Calculate potential meal break penalties owed under California law. Free tool created by employment attorney Thomas St. Germain." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://employment-law-infraction-tracker.vercel.app/tools/meal-break-penalty-calculator/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Free Meal Break Penalty Calculator - California Employment Law" />
        <meta property="og:description" content="Professional calculator for meal break penalties in California" />
        <meta property="og:url" content="https://employment-law-infraction-tracker.vercel.app/tools/meal-break-penalty-calculator/" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Schema Markup */}
      <BreadcrumbLd
        segments={["tools", "meal-break-penalty-calculator"]}
        names={["Tools", "Meal Break Penalty Calculator"]}
      />
      
      <AppLd
        name="Meal Break Penalty Calculator (CA)"
        urlPath="/tools/meal-break-penalty-calculator/"
        description="Calculate potential meal-break premiums and penalties under California employment law. Professional tool created by attorney Thomas St. Germain."
        category="BusinessApplication"
        features={[
          "California Meal Break Penalty Calculation",
          "Hourly Rate Input",
          "Missed Break Counter",
          "Instant Penalty Calculation",
          "Professional Legal Tool",
          "Mobile-Friendly Interface"
        ]}
      />

      <div style={{ 
        maxWidth: '600px', 
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
          <a href="/tools/" style={{ color: '#14b8a6', textDecoration: 'none' }}>Tools</a>
          <span style={{ margin: '0 8px', color: '#9aa4b2' }}>→</span>
          <span style={{ color: '#9aa4b2' }}>Meal Break Penalty Calculator</span>
        </nav>

        <article>
          <header style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h1 style={{ 
              fontSize: '2.2rem', 
              marginBottom: '16px',
              color: '#e6edf3'
            }}>
              🧮 Meal Break Penalty Calculator
            </h1>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#9aa4b2',
              marginBottom: '20px'
            }}>
              Calculate potential meal break penalties owed under California law
            </p>
          </header>

          <div style={{ 
            background: '#1f2937', 
            padding: '30px', 
            borderRadius: '12px',
            border: '1px solid #374151',
            marginBottom: '30px'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="hourlyRate" style={{ 
                display: 'block', 
                marginBottom: '8px',
                fontWeight: '500',
                color: '#e6edf3'
              }}>
                Your Hourly Rate ($)
              </label>
              <input
                id="hourlyRate"
                type="number"
                step="0.01"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                placeholder="25.00"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '6px',
                  border: '1px solid #374151',
                  background: '#111827',
                  color: '#e6edf3',
                  fontSize: '16px'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="missedBreaks" style={{ 
                display: 'block', 
                marginBottom: '8px',
                fontWeight: '500',
                color: '#e6edf3'
              }}>
                Number of Missed Meal Breaks
              </label>
              <input
                id="missedBreaks"
                type="number"
                value={missedBreaks}
                onChange={(e) => setMissedBreaks(e.target.value)}
                placeholder="5"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '6px',
                  border: '1px solid #374151',
                  background: '#111827',
                  color: '#e6edf3',
                  fontSize: '16px'
                }}
              />
            </div>

            <button
              onClick={calculatePenalty}
              style={{
                width: '100%',
                padding: '14px',
                background: '#14b8a6',
                color: '#000',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginBottom: '20px'
              }}
            >
              Calculate Penalty
            </button>

            {penalty !== null && (
              <div style={{
                background: '#065f46',
                border: '1px solid #14b8a6',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#14b8a6', marginBottom: '8px' }}>
                  Estimated Penalty Owed:
                </h3>
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold',
                  color: '#e6edf3'
                }}>
                  ${penalty.toFixed(2)}
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#9aa4b2',
                  marginTop: '8px'
                }}>
                  This is an estimate. Consult an attorney for personalized advice.
                </p>
              </div>
            )}
          </div>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#14b8a6', marginBottom: '16px' }}>How It Works</h2>
            <ul style={{ paddingLeft: '20px', color: '#9aa4b2' }}>
              <li style={{ marginBottom: '8px' }}>
                For each missed meal break, you're owed 1 hour of pay at your regular rate
              </li>
              <li style={{ marginBottom: '8px' }}>
                This applies to breaks that were completely missed or interrupted
              </li>
              <li style={{ marginBottom: '8px' }}>
                California Labor Code Section 512 governs meal break requirements
              </li>
              <li style={{ marginBottom: '8px' }}>
                You may be able to claim penalties for up to 3 years back
              </li>
            </ul>
          </section>

          <div style={{ 
            background: '#1f2937', 
            padding: '20px', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#14b8a6', marginBottom: '16px' }}>
              Document Your Case
            </h2>
            <p style={{ marginBottom: '16px', color: '#9aa4b2' }}>
              Use our professional tracker to document meal break violations and build your case.
            </p>
            <a 
              href="/"
              style={{ 
                display: 'inline-block',
                background: '#14b8a6', 
                color: '#000', 
                padding: '12px 24px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginRight: '12px'
              }}
            >
              Start Tracking →
            </a>
            <a 
              href="mailto:thomas.st.germain22@gmail.com"
              style={{ 
                display: 'inline-block',
                border: '1px solid #14b8a6',
                color: '#14b8a6', 
                padding: '11px 23px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              📧 Get Legal Help
            </a>
          </div>
        </article>
      </div>
    </>
  );
}