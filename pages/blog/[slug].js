import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/blog/posts/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data.post);
        setRelatedPosts(data.relatedPosts || []);
      } else if (response.status === 404) {
        setError('Post not found');
      } else {
        setError('Failed to load post');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  if (loading) {
    return (
      <div className="blog-wrap">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <>
        <Head>
          <title>Article Not Found | Employment Law Blog</title>
          <meta name="robots" content="noindex" />
        </Head>
        
        <div className="blog-wrap">
          <nav className="blog-nav">
            <div className="nav-content">
              <Link href="/" className="nav-brand">
                🏛️ Employment Law Tracker
              </Link>
              <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
              </div>
            </div>
          </nav>

          <div className="error-state">
            <div className="error-icon">📄</div>
            <h1>Article Not Found</h1>
            <p>The article you're looking for doesn't exist or has been moved.</p>
            <div className="error-actions">
              <Link href="/blog" className="btn primary">
                Browse All Articles
              </Link>
              <Link href="/" className="btn secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Employment Law Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://employment-law-infraction-tracker.vercel.app/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://employment-law-infraction-tracker.vercel.app/blog/${post.slug}`} />
        <meta property="og:published_time" content={post.publishDate} />
        <meta property="og:modified_time" content={post.updatedDate || post.publishDate} />
        <meta property="og:author" content="Thomas St. Germain, Esq." />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.featuredImage && <meta name="twitter:image" content={post.featuredImage} />}
        
        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title,
              "description": post.excerpt,
              "image": post.featuredImage || null,
              "author": {
                "@type": "Person",
                "name": "Thomas St. Germain, Esq.",
                "jobTitle": "Employment Law Attorney",
                "email": "thomas.st.germain22@gmail.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Employment Law Infraction Tracker",
                "founder": {
                  "@type": "Person",
                  "name": "Thomas St. Germain, Esq."
                }
              },
              "datePublished": post.publishDate,
              "dateModified": post.updatedDate || post.publishDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://employment-law-infraction-tracker.vercel.app/blog/${post.slug}`
              },
              "keywords": post.tags.join(", "),
              "articleSection": post.category,
              "wordCount": post.wordCount || null
            })
          }}
        />
      </Head>

      <div className="blog-wrap">
        {/* Navigation */}
        <nav className="blog-nav">
          <div className="nav-content">
            <Link href="/" className="nav-brand">
              🏛️ Employment Law Tracker
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>{post.title}</span>
        </div>

        {/* Article Header */}
        <article className="blog-post">
          <header className="post-header">
            <div className="post-meta-top">
              <span className="post-category">{post.category}</span>
              <div className="post-actions">
                <button onClick={copyUrl} className="share-btn" title="Copy URL">
                  🔗 Share
                </button>
              </div>
            </div>
            
            <h1 className="post-title">{post.title}</h1>
            
            <div className="post-meta">
              <div className="author-info">
                <div className="author-details">
                  <strong>Thomas St. Germain, Esq.</strong>
                  <span>Employment Law Attorney</span>
                </div>
              </div>
              
              <div className="post-stats">
                <time dateTime={post.publishDate}>
                  Published {formatDate(post.publishDate)}
                </time>
                {post.updatedDate && post.updatedDate !== post.publishDate && (
                  <time dateTime={post.updatedDate}>
                    Updated {formatDate(post.updatedDate)}
                  </time>
                )}
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {post.featuredImage && (
              <div className="featured-image">
                <img src={post.featuredImage} alt={post.title} />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="post-content">
            <div className="content-body">
              {/* Legal Disclaimer */}
              <div className="legal-disclaimer">
                <strong>⚖️ Legal Disclaimer:</strong> This article is for educational purposes only and does not constitute legal advice. 
                For specific legal guidance regarding your situation, consult with a qualified employment attorney.
              </div>

              {/* Article body will be rendered here - this is where you'll paste your blog content */}
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Call to Action */}
              <div className="post-cta">
                <div className="cta-content">
                  <h3>Need Legal Help?</h3>
                  <p>
                    If you're experiencing employment law violations, don't wait. 
                    Contact attorney Thomas St. Germain for a consultation.
                  </p>
                  <div className="cta-actions">
                    <a 
                      href="mailto:thomas.st.germain22@gmail.com?subject=Legal Consultation Request"
                      className="btn primary"
                    >
                      📧 Email Attorney
                    </a>
                    <Link href="/" className="btn secondary">
                      🏛️ Use Tracker Tool
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Footer */}
            <footer className="post-footer">
              <div className="post-tags">
                <strong>Tags:</strong>
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="post-share">
                <strong>Share this article:</strong>
                <div className="share-buttons">
                  <button 
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="share-twitter"
                  >
                    Twitter
                  </button>
                  <button 
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="share-linkedin"
                  >
                    LinkedIn
                  </button>
                  <button onClick={copyUrl} className="share-copy">
                    Copy Link
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <h3>Related Articles</h3>
            <div className="related-grid">
              {relatedPosts.map(relatedPost => (
                <article key={relatedPost.id} className="related-card">
                  <h4>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      {relatedPost.title}
                    </Link>
                  </h4>
                  <p>{relatedPost.excerpt}</p>
                  <div className="related-meta">
                    <span>{relatedPost.category}</span>
                    <span>{formatDate(relatedPost.publishDate)}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <h3>Stay Updated on Employment Law</h3>
            <p>Get the latest insights and updates delivered to your inbox.</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="btn primary">Subscribe</button>
            </div>
            <p className="newsletter-note">
              Free insights • No spam • Unsubscribe anytime
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="blog-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Legal Disclaimer</h4>
              <p>
                The information provided in this blog is for educational purposes only and does not constitute legal advice. 
                For specific legal guidance, consult with a qualified employment attorney.
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Contact Attorney St. Germain</h4>
              <p>
                Email: <a href="mailto:thomas.st.germain22@gmail.com">thomas.st.germain22@gmail.com</a><br/>
                For legal consultation and case evaluation
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Employment Tracker</Link></li>
                <li><Link href="/tools/overtime-calculator">Overtime Calculator</Link></li>
                <li><Link href="/tools/meal-break-penalty-calculator">Meal Break Calculator</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Employment Law Infraction Tracker. Created by Thomas St. Germain, Esq.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
