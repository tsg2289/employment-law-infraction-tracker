// Reusable JSON-LD component for structured data
export default function JsonLd({ data }) {
  if (!data) return null;
  
  // Handle single item vs array
  let schemaData;
  if (Array.isArray(data)) {
    // For multiple items, create an array with @context
    schemaData = {
      "@context": "https://schema.org",
      "@graph": data
    };
  } else {
    // For single item, add @context directly
    schemaData = {
      "@context": "https://schema.org",
      ...data
    };
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(schemaData, null, 0) 
      }}
    />
  );
}
