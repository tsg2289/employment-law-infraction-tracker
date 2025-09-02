import JsonLd from './JsonLd';
import { SITE } from '../lib/siteMeta';

// Article schema for pillar pages, guides, and blog posts
export default function ArticleLd({ 
  title, 
  description, 
  urlPath, 
  imageUrl, 
  datePublished, 
  dateModified, 
  authorName = SITE.author.name,
  wordCount,
  readingTime 
}) {
  const fullUrl = `${SITE.domain}${urlPath}`;
  
  const articleSchema = {
    "@type": "Article",
    "@id": `${fullUrl}#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "headline": title,
    "description": description,
    "image": imageUrl ? [{
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630
    }] : undefined,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": authorName,
      ...(authorName === SITE.author.name && {
        "jobTitle": SITE.author.jobTitle,
        "email": SITE.author.email
      })
    },
    "publisher": { "@id": `${SITE.domain}#org` },
    "inLanguage": SITE.language,
    ...(wordCount && { "wordCount": wordCount }),
    ...(readingTime && { 
      "timeRequired": `PT${readingTime}M`,
      "speakable": {
        "@type": "SpeakableSpecification",
        "xpath": ["//h1", "//h2", "//p[1]"]
      }
    })
  };

  // Remove undefined properties
  Object.keys(articleSchema).forEach(key => 
    articleSchema[key] === undefined && delete articleSchema[key]
  );

  return <JsonLd data={articleSchema} />;
}
