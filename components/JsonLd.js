// Reusable JSON-LD component for structured data
export default function JsonLd({ data }) {
  const json = Array.isArray(data) ? data : [data];
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify({
          "@context": "https://schema.org",
          ...json.length === 1 ? json[0] : json
        }, null, 0) 
      }}
    />
  );
}
