import JsonLd from './JsonLd';
import { SITE } from '../lib/siteMeta';

// Auto-build BreadcrumbList from URL segments
export default function BreadcrumbLd({ segments = [], names = [] }) {
  if (segments.length === 0) return null;
  
  // Build breadcrumb items with proper URLs
  const itemListElement = [
    // Always include home
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE.domain
    },
    // Add each segment
    ...segments.map((seg, i) => ({
      "@type": "ListItem",
      "position": i + 2,
      "name": names[i] || seg.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      "item": `${SITE.domain}/${segments.slice(0, i + 1).join("/")}/`
    }))
  ];

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${SITE.domain}/${segments.join("/")}/#breadcrumbs`,
    "itemListElement": itemListElement
  };

  return <JsonLd data={breadcrumbSchema} />;
}
