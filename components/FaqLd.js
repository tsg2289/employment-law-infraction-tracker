import JsonLd from './JsonLd';
import { SITE } from '../lib/siteMeta';

// FAQPage schema - only use when page has visible FAQ section
export default function FaqLd({ urlPath, faqs = [] }) {
  if (!faqs || faqs.length === 0) return null;
  
  const fullUrl = `${SITE.domain}${urlPath}`;
  
  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${fullUrl}#faq`,
    "mainEntity": faqs.map(({ question, answer, q, a }) => ({
      "@type": "Question",
      "name": question || q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer || a
      }
    }))
  };

  return <JsonLd data={faqSchema} />;
}
