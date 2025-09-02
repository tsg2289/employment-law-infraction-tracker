// Site-wide constants for schema markup and meta data
export const SITE = {
  name: "Employment Law Infraction Tracker",
  domain: "https://employment-law-infraction-tracker.vercel.app",
  logoUrl: "https://employment-law-infraction-tracker.vercel.app/favicon.ico", // Update with actual logo
  description: "Professional employment law violation tracker created by attorney Thomas St. Germain. Document workplace violations with legal protection.",
  author: {
    name: "Thomas St. Germain, Esq.",
    email: "thomas.st.germain22@gmail.com",
    jobTitle: "Employment Law Attorney"
  },
  sameAs: [
    // Add social media profiles when available
    // "https://www.linkedin.com/in/thomas-st-germain",
    // "https://x.com/thomasstgermain"
  ],
  areaServed: "US-CA",
  language: "en-US"
};

// Common schema fragments
export const SCHEMA_FRAGMENTS = {
  organization: {
    "@type": "Organization",
    "@id": `${SITE.domain}#org`,
    "name": SITE.name,
    "url": SITE.domain,
    "logo": {
      "@type": "ImageObject",
      "url": SITE.logoUrl
    },
    "sameAs": SITE.sameAs,
    "founder": {
      "@type": "Person",
      "name": SITE.author.name,
      "jobTitle": SITE.author.jobTitle,
      "email": SITE.author.email
    }
  },
  
  website: {
    "@type": "WebSite",
    "@id": `${SITE.domain}#website`,
    "url": SITE.domain,
    "name": SITE.name,
    "description": SITE.description,
    "publisher": { "@id": `${SITE.domain}#org` },
    "inLanguage": SITE.language,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE.domain}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }
};
