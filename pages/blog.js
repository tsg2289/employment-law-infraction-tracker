import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Fetch blog posts from API
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog/posts');
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts || []);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

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
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading articles...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="posts-grid">
              {filteredPosts.map(post => (
                <article key={post.id} className="post-card">
                  {post.featuredImage && (
                    <div className="post-image">
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
