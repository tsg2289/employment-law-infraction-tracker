import Head from 'next/head';

// Simple test page to verify schema rendering
export default function SchemaTest() {
  return (
    <>
      <Head>
        <title>Schema Test Page</title>
      </Head>
      
      {/* Direct JSON-LD test without components */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Test Organization",
            "url": "https://employment-law-infraction-tracker.vercel.app"
          })
        }}
      />

      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Schema Test Page</h1>
        <p>This page tests if basic JSON-LD schema renders correctly.</p>
        
        <h2>Instructions:</h2>
        <ol>
          <li>View page source (Ctrl+U)</li>
          <li>Search for "application/ld+json"</li>
          <li>You should see the Organization schema</li>
          <li>Test this URL in Google Rich Results Test</li>
        </ol>
        
        <h2>Expected Schema:</h2>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
{`{
  "@context": "https://schema.org",
  "@type": "Organization", 
  "name": "Test Organization",
  "url": "https://employment-law-infraction-tracker.vercel.app"
}`}
        </pre>
        
        <p>
          <strong>Test URL:</strong> 
          <br />
          <code>https://employment-law-infraction-tracker.vercel.app/schema-test</code>
        </p>
        
        <p>
          <a href="/" style={{ color: '#14b8a6' }}>← Back to Main App</a>
        </p>
      </div>
    </>
  );
}
