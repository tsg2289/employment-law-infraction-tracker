import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Sample posts data
const posts = [
  {
    id: 1,
    title: "Understanding California's New Wage Theft Prevention Laws",
    slug: "california-wage-theft-prevention-laws-2024",
    excerpt: "California has strengthened its wage theft prevention laws in 2024. Learn what these changes mean for employees and how to protect yourself from unpaid wages.",
    content: `
      <p>California continues to lead the nation in protecting workers' rights, and 2024 brings significant updates to wage theft prevention laws. As an employment attorney, I want to help you understand these changes and how they protect you.</p>
      
      <h2>What's New in 2024</h2>
      <p>The updated legislation includes:</p>
      <ul>
        <li>Increased penalties for employers who engage in wage theft</li>
        <li>Enhanced protection for workers who report violations</li>
        <li>Streamlined processes for recovering stolen wages</li>
      </ul>
      
      <h2>Key Protections for Employees</h2>
      <p>Under the new laws, employees have stronger protections against:</p>
      <ul>
        <li>Unpaid overtime compensation</li>
        <li>Meal and rest break violations</li>
        <li>Minimum wage violations</li>
        <li>Final paycheck delays</li>
      </ul>
      
      <h2>What to Do If You're a Victim</h2>
      <p>If you believe you're experiencing wage theft:</p>
      <ol>
        <li>Document everything - keep records of hours worked, pay stubs, and communications</li>
        <li>Use our <a href="/">Employment Law Infraction Tracker</a> to organize your case</li>
        <li>Contact an employment attorney for legal guidance</li>
        <li>File a complaint with the California Department of Labor Standards Enforcement</li>
      </ol>
      
      <h2>Employer Penalties Have Increased</h2>
      <p>Employers who engage in wage theft now face:</p>
      <ul>
        <li>Civil penalties up to $100 per employee per pay period</li>
        <li>Criminal charges for willful wage theft over $950</li>
        <li>Liability for attorney fees and court costs</li>
      </ul>
      
      <h2>Get Help Today</h2>
      <p>Don't let wage theft continue. If you're experiencing unpaid wages, overtime violations, or other employment law issues, contact me for a consultation. Together, we can protect your rights and recover what you're owed.</p>
    `,
    category: "wage-hour",
    tags: ["wage theft", "california law", "overtime", "unpaid wages", "employee rights"],
    publishDate: "2024-01-15T08:00:00Z",
    updatedDate: "2024-01-15T08:00:00Z",
    readTime: 5,
    wordCount: 450,
    featuredImage: null
  },
  {
    id: 2,
    title: "Recognizing Workplace Harassment: Know Your Rights",
    slug: "recognizing-workplace-harassment-know-your-rights",
    excerpt: "Workplace harassment takes many forms and can be subtle. Learn to recognize the signs and understand your legal protections under California and federal law.",
    content: `
      <p>Workplace harassment is unfortunately common, but many employees don't recognize it when it happens to them. Understanding what constitutes harassment and knowing your rights is crucial for protecting yourself and creating a safer work environment.</p>
      
      <h2>Types of Workplace Harassment</h2>
      <p>Harassment can take many forms:</p>
      
      <h3>Sexual Harassment</h3>
      <ul>
        <li>Unwelcome sexual advances or requests for sexual favors</li>
        <li>Sexual jokes, comments, or innuendo</li>
        <li>Displaying sexually explicit materials</li>
        <li>Unwanted touching or physical contact</li>
      </ul>
      
      <h3>Discriminatory Harassment</h3>
      <ul>
        <li>Comments or jokes based on race, religion, gender, age, or disability</li>
        <li>Exclusion from work activities based on protected characteristics</li>
        <li>Offensive symbols, pictures, or graffiti</li>
        <li>Mimicking accents or making cultural stereotypes</li>
      </ul>
      
      <h2>Hostile Work Environment</h2>
      <p>A hostile work environment exists when harassment is:</p>
      <ul>
        <li>Severe or pervasive enough to create an intimidating work environment</li>
        <li>Based on a protected characteristic (race, gender, religion, etc.)</li>
        <li>Unreasonably interferes with work performance</li>
      </ul>
      
      <h2>What You Can Do</h2>
      <p>If you're experiencing harassment:</p>
      <ol>
        <li>Document every incident - dates, times, witnesses, what was said or done</li>
        <li>Report to HR or your supervisor (check your employee handbook)</li>
        <li>Keep copies of all communications and reports</li>
        <li>Use our tracker tool to organize your documentation</li>
        <li>Consult with an employment attorney</li>
      </ol>
      
      <h2>Legal Protections</h2>
      <p>Both California's Fair Employment and Housing Act (FEHA) and federal Title VII protect employees from harassment. You have the right to:</p>
      <ul>
        <li>A workplace free from harassment</li>
        <li>File complaints without retaliation</li>
        <li>Seek damages for emotional distress and lost wages</li>
        <li>Have your employer investigate and address harassment</li>
      </ul>
      
      <h2>Don't Suffer in Silence</h2>
      <p>Harassment often escalates if not addressed. If you're experiencing workplace harassment, don't wait to take action. Contact an employment attorney who can help you understand your rights and options.</p>
    `,
    category: "harassment",
    tags: ["workplace harassment", "sexual harassment", "hostile work environment", "discrimination", "employee rights"],
    publishDate: "2024-01-10T10:00:00Z",
    readTime: 6,
    wordCount: 520,
    featuredImage: null
  },
  {
    id: 3,
    title: "FMLA vs. CFRA: Understanding Your Leave Rights in California",
    slug: "fmla-vs-cfra-leave-rights-california",
    excerpt: "California employees have protection under both federal FMLA and state CFRA laws. Learn the differences and how to maximize your leave protections.",
    content: `
      <p>If you need time off for medical reasons or to care for a family member, you may be protected under both federal and California state leave laws. Understanding the differences between FMLA and CFRA can help you maximize your protections.</p>
      
      <h2>Family and Medical Leave Act (FMLA)</h2>
      <p>The federal FMLA provides eligible employees with up to 12 weeks of unpaid leave for:</p>
      <ul>
        <li>Birth or adoption of a child</li>
        <li>Serious health condition of the employee</li>
        <li>Caring for a spouse, child, or parent with a serious health condition</li>
        <li>Military family leave</li>
      </ul>
      
      <h2>California Family Rights Act (CFRA)</h2>
      <p>CFRA is California's state leave law that provides similar protections but with some key differences:</p>
      <ul>
        <li>Covers employers with 5 or more employees (vs. 50 for FMLA)</li>
        <li>Includes domestic partners in the definition of family</li>
        <li>Has different eligibility requirements</li>
      </ul>
      
      <h2>Key Differences</h2>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: var(--panel);">
          <th style="padding: 10px; border: 1px solid var(--line);">Aspect</th>
          <th style="padding: 10px; border: 1px solid var(--line);">FMLA</th>
          <th style="padding: 10px; border: 1px solid var(--line);">CFRA</th>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid var(--line);">Employer Size</td>
          <td style="padding: 10px; border: 1px solid var(--line);">50+ employees</td>
          <td style="padding: 10px; border: 1px solid var(--line);">5+ employees</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid var(--line);">Family Definition</td>
          <td style="padding: 10px; border: 1px solid var(--line);">Spouse, child, parent</td>
          <td style="padding: 10px; border: 1px solid var(--line);">Includes domestic partners</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid var(--line);">Pregnancy Leave</td>
          <td style="padding: 10px; border: 1px solid var(--line);">Counts toward 12 weeks</td>
          <td style="padding: 10px; border: 1px solid var(--line);">Separate from bonding leave</td>
        </tr>
      </table>
      
      <h2>Pregnancy and Bonding Leave</h2>
      <p>This is where California law provides additional protection:</p>
      <ul>
        <li>Pregnancy Disability Leave (PDL) is separate from CFRA bonding leave</li>
        <li>You can take up to 4 months for pregnancy disability</li>
        <li>Plus an additional 12 weeks for bonding under CFRA</li>
        <li>This can total up to 7 months of protected leave</li>
      </ul>
      
      <h2>Common Violations</h2>
      <p>Employers sometimes violate leave laws by:</p>
      <ul>
        <li>Denying eligible leave requests</li>
        <li>Retaliating against employees who take leave</li>
        <li>Failing to restore employees to the same or equivalent position</li>
        <li>Not maintaining health insurance during leave</li>
      </ul>
      
      <h2>Protecting Your Rights</h2>
      <p>To protect yourself:</p>
      <ol>
        <li>Provide proper notice when possible (30 days advance notice preferred)</li>
        <li>Obtain medical certification if required</li>
        <li>Keep detailed records of all communications</li>
        <li>Document any denial or retaliation</li>
        <li>Know that both laws may apply - you might have more protection than you think</li>
      </ol>
      
      <h2>Get Legal Help</h2>
      <p>Leave law can be complex, and violations can have serious consequences for your career and finances. If your employer has denied your leave request or retaliated against you for taking protected leave, contact an employment attorney immediately.</p>
    `,
    category: "leave-of-absence",
    tags: ["FMLA", "CFRA", "family leave", "medical leave", "pregnancy leave", "employee rights"],
    publishDate: "2024-01-05T09:00:00Z",
    readTime: 7,
    wordCount: 680,
    featuredImage: null
  }
];

export default function BlogPost({ post, relatedPosts }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <div className="blog-wrap">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading article...</p>
        </div>
      </div>
    );
  }



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

  if (!post) {
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
            <p>The article you&apos;re looking for doesn&apos;t exist or has been moved.</p>
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
                    If you&apos;re experiencing employment law violations, don&apos;t wait. 
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

// Generate the paths for all blog posts
export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

// Fetch data for each blog post
export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Get related posts (posts in the same category, excluding current post)
  const relatedPosts = posts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)
    .map(p => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      category: p.category,
      publishDate: p.publishDate
    }));

  return {
    props: {
      post,
      relatedPosts,
    },
    // Revalidate every hour
    revalidate: 3600,
  };
}
