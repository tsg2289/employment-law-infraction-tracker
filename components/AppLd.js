import JsonLd from './JsonLd';
import { SITE } from '../lib/siteMeta';

// SoftwareApplication schema for tools and tracker pages
export default function AppLd({ 
  name, 
  urlPath, 
  description, 
  price = "0", 
  category = "WebApplication",
  features = [],
  aggregateRating,
  screenshots = []
}) {
  const fullUrl = `${SITE.domain}${urlPath}`;
  
  const appSchema = {
    "@type": "SoftwareApplication",
    "@id": `${fullUrl}#app`,
    "name": name,
    "applicationCategory": category,
    "operatingSystem": "Web Browser",
    "url": fullUrl,
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD"
    },
    "publisher": { "@id": `${SITE.domain}#org` },
    "inLanguage": SITE.language,
    "softwareVersion": "1.0",
    "releaseNotes": "Professional employment law violation tracking tool",
    ...(features.length > 0 && { "featureList": features }),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount,
        "bestRating": "5",
        "worstRating": "1"
      }
    }),
    ...(screenshots.length > 0 && {
      "screenshot": screenshots.map(url => ({
        "@type": "ImageObject",
        "url": url
      }))
    })
  };

  return <JsonLd data={appSchema} />;
}
