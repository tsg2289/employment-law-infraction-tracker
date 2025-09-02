import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Sample posts data - in production, this would come from a CMS or database
const samplePosts = [
  {
    id: 1,
    title: "California Overtime Rules Explained (Daily vs. Weekly Overtime)",
    slug: "california-overtime-rules-daily-vs-weekly",
    excerpt: "Understanding California's overtime rules can be confusing, especially since the state's laws are stricter than federal law. Learn when you're entitled to overtime pay and how daily overtime differs from weekly overtime.",
    category: "wage-hour",
    tags: ["overtime", "california law", "daily overtime", "weekly overtime", "wage calculations", "employee rights"],
    publishDate: "2024-01-20T09:00:00Z",
    readTime: 6,
    featuredImage: null
  },
  {
    id: 2,
    title: "Understanding California's New Wage Theft Prevention Laws",
    slug: "california-wage-theft-prevention-laws-2024",
    excerpt: "California has strengthened its wage theft prevention laws in 2024. Learn what these changes mean for employees and how to protect yourself from unpaid wages.",
    category: "wage-hour",
    tags: ["wage theft", "california law", "overtime", "unpaid wages", "employee rights"],
    publishDate: "2024-01-15T08:00:00Z",
    readTime: 5,
    featuredImage: null
  },
  {
    id: 3,
    title: "Recognizing Workplace Harassment: Know Your Rights",
    slug: "recognizing-workplace-harassment-know-your-rights",
    excerpt: "Workplace harassment takes many forms and can be subtle. Learn to recognize the signs and understand your legal protections under California and federal law.",
    category: "harassment",
    tags: ["workplace harassment", "sexual harassment", "hostile work environment", "discrimination", "employee rights"],
    publishDate: "2024-01-10T10:00:00Z",
    readTime: 6,
    featuredImage: null
  },
  {
    id: 4,
    title: "FMLA vs. CFRA: Understanding Your Leave Rights in California",
    slug: "fmla-vs-cfra-leave-rights-california",
    excerpt: "California employees have protection under both federal FMLA and state CFRA laws. Learn the differences and how to maximize your leave protections.",
    category: "leave-of-absence",
    tags: ["FMLA", "CFRA", "family leave", "medical leave", "pregnancy leave", "employee rights"],
    publishDate: "2024-01-05T09:00:00Z",
    readTime: 7,
    featuredImage: null
  }
];

export default function Blog({ posts = samplePosts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(posts.map(post => post.category))];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <title>Employment Law Blog - Legal Insights & Updates | Thomas St. Germain, Esq.</title>
        <meta name="description" content="Stay informed with the latest employment law insights, workplace rights updates, and legal advice from attorney Thomas St. Germain. Expert analysis on wage theft, discrimination, harassment, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://employment-law-infraction-tracker.vercel.app/blog" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Employment Law Blog - Legal Insights & Updates" />
        <meta property="og:description" content="Expert employment law insights and workplace rights updates from attorney Thomas St. Germain." />
        <meta property="og:url" content="https://employment-law-infraction-tracker.vercel.app/blog" />
        
        {/* Schema markup for Blog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Employment Law Blog",
              "description": "Expert employment law insights and workplace rights updates",
              "url": "https://employment-law-infraction-tracker.vercel.app/blog",
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
              }
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
              <Link href="/blog" className="active">Blog</Link>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">Home</Link> / <span>Blog</span>
        </div>

        {/* Hero Section */}
        <section className="blog-hero">
          <div className="hero-content">
            <h1>Employment Law Blog</h1>
            <p className="lead">
              Stay informed with the latest insights on workplace rights, employment law updates, 
              and legal advice from attorney Thomas St. Germain. Protecting your rights starts with understanding them.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <strong>{posts.length}</strong>
                <span>Articles</span>
              </div>
              <div className="stat">
                <strong>{categories.length - 1}</strong>
                <span>Categories</span>
              </div>
              <div className="stat">
                <strong>Free</strong>
                <span>Legal Insights</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="blog-filters">
          <div className="filter-content">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Articles' : category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <main className="blog-content">
          {filteredPosts.length > 0 ? (
            <div className="posts-grid">
              {filteredPosts.map(post => (
                <article key={post.id} className="post-card">
                  {post.featuredImage && (
                    <div className="post-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={post.featuredImage} alt={post.title} />
                    </div>
                  )}
                  
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-category">{post.category}</span>
                      <span className="post-date">{formatDate(post.publishDate)}</span>
                    </div>
                    
                    <h2 className="post-title">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="post-excerpt">{post.excerpt}</p>
                    
                    <div className="post-tags">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    
                    <div className="post-footer">
                      <Link href={`/blog/${post.slug}`} className="read-more">
                        Read Full Article →
                      </Link>
                      <span className="read-time">{post.readTime} min read</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📝</div>
              <h3>No Articles Found</h3>
              <p>
                {searchTerm || selectedCategory !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'Articles will appear here once published.'
                }
              </p>
              {posts.length === 0 && (
                <div className="getting-started">
                  <h4>Getting Started</h4>
                  <p>This blog will feature regular updates on:</p>
                  <ul>
                    <li>Employment law changes and updates</li>
                    <li>Workplace rights and protections</li>
                    <li>Case studies and legal insights</li>
                    <li>Practical advice for employees</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </main>

        {/* Tracker CTA */}
        <section className="tracker-cta-section" style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, #10a693 100%)',
          color: 'var(--bg)',
          padding: '60px 20px',
          textAlign: 'center'
        }}>
          <div className="cta-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '16px', color: 'var(--bg)' }}>
              🏛️ Document Your Employment Law Case
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '30px', 
              color: 'rgba(255,255,255,0.9)',
              lineHeight: '1.6'
            }}>
              Use our professional Employment Law Infraction Tracker to organize your case, 
              document violations, and protect your legal rights with attorney-client privilege.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                href="/" 
                className="btn"
                style={{ 
                  background: 'var(--bg)', 
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  padding: '16px 32px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
              >
                🚀 Start Tracking Your Case
              </Link>
              <Link 
                href="/contact" 
                className="btn"
                style={{ 
                  background: 'transparent', 
                  color: 'var(--bg)',
                  border: '2px solid var(--bg)',
                  textDecoration: 'none',
                  padding: '14px 30px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '12px'
                }}
              >
                📞 Contact Attorney
              </Link>
            </div>
          </div>
        </section>

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
              <h4>Contact the Attorneys at Skeptical Lawyer</h4>
              <p>
                Email: <a href="mailto:thomas@skepticallawyers.com">thomas@skepticallawyers.com</a><br/>
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

// Static generation for better performance
export async function getStaticProps() {
  return {
    props: {
      posts: samplePosts
    },
    // Revalidate every hour
    revalidate: 3600
  };
}
