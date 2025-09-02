import JsonLd from './JsonLd';
import { SITE } from '../lib/siteMeta';

// LegalService schema - only use on consultation/contact pages with NAP data
export default function LegalServiceLd({ 
  telephone,
  address,
  hours,
  priceRange,
  serviceTypes = []
}) {
  const legalServiceSchema = {
    "@type": "LegalService",
    "@id": `${SITE.domain}/consultation#legalservice`,
    "name": `${SITE.name} — Employment Law Consultation`,
    "url": `${SITE.domain}/consultation`,
    "description": "Professional employment law consultation and legal representation in California",
    "areaServed": SITE.areaServed,
    "parentOrganization": { "@id": `${SITE.domain}#org` },
    "provider": {
      "@type": "Person",
      "name": SITE.author.name,
      "jobTitle": SITE.author.jobTitle,
      "email": SITE.author.email
    },
    ...(telephone && { "telephone": telephone }),
    ...(address && {
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "CA",
        "addressCountry": "US",
        ...address
      }
    }),
    ...(hours && { "openingHours": hours }),
    ...(priceRange && { "priceRange": priceRange }),
    ...(serviceTypes.length > 0 && {
      "serviceType": serviceTypes,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Employment Law Services",
        "itemListElement": serviceTypes.map((service, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service
          }
        }))
      }
    })
  };

  return <JsonLd data={legalServiceSchema} />;
}
