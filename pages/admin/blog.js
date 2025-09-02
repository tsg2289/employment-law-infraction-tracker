import { useState } from 'react';
import Head from 'next/head';

export default function BlogAdmin() {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'wage-hour',
    tags: '',
    featuredImage: '',
    publishDate: new Date().toISOString().split('T')[0],
    readTime: 5
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const categories = [
    'wage-hour',
    'harassment',
    'discrimination',
    'retaliation',
    'leave-of-absence',
    'workplace-safety',
    'legal-updates',
    'case-studies'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setFormData(prev => ({
        ...prev,
        slug
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Process tags
      const tags = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      // Create post object
      const postData = {
        ...formData,
        tags,
        publishDate: new Date(formData.publishDate).toISOString(),
        readTime: parseInt(formData.readTime),
        wordCount: formData.content.split(' ').length
      };

      // In a real app, this would save to a database
      console.log('New blog post:', postData);
      
      // For now, just show success message
      setMessage('✅ Blog post created successfully! (Note: This is a demo - in production, this would save to a database)');
      
      // Reset form
      setFormData({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        category: 'wage-hour',
        tags: '',
        featuredImage: '',
        publishDate: new Date().toISOString().split('T')[0],
        readTime: 5
      });

    } catch (error) {
      setMessage('❌ Error creating blog post: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const previewPost = () => {
    const previewData = encodeURIComponent(JSON.stringify(formData));
    window.open(`/admin/blog-preview?data=${previewData}`, '_blank');
  };

  return (
    <>
      <Head>
        <title>Blog Admin - Add New Post</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="admin-wrap">
        <div className="admin-header">
          <h1>📝 Add New Blog Post</h1>
          <p>Create and manage employment law blog content</p>
        </div>

        <div className="admin-content">
          <form onSubmit={handleSubmit} className="blog-form">
            <div className="form-section">
              <h2>Post Details</h2>
              
              <div className="form-group">
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Understanding California's New Wage Theft Prevention Laws"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="slug">URL Slug *</label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  placeholder="california-wage-theft-prevention-laws-2024"
                  required
                />
                <small>Auto-generated from title. Edit if needed.</small>
              </div>

              <div className="form-group">
                <label htmlFor="excerpt">Excerpt *</label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder="A brief summary of the article (1-2 sentences)..."
                  rows="3"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="readTime">Read Time (minutes) *</label>
                  <input
                    type="number"
                    id="readTime"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleInputChange}
                    min="1"
                    max="60"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="wage theft, california law, overtime, employee rights (comma separated)"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="publishDate">Publish Date *</label>
                  <input
                    type="date"
                    id="publishDate"
                    name="publishDate"
                    value={formData.publishDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="featuredImage">Featured Image URL</label>
                  <input
                    type="url"
                    id="featuredImage"
                    name="featuredImage"
                    value={formData.featuredImage}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Content</h2>
              <div className="form-group">
                <label htmlFor="content">Article Content (HTML) *</label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Paste your blog post HTML content here..."
                  rows="20"
                  required
                />
                <small>
                  You can paste HTML content here. Use standard HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, etc.
                </small>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" onClick={previewPost} className="btn secondary">
                👁️ Preview Post
              </button>
              <button type="submit" disabled={isSubmitting} className="btn primary">
                {isSubmitting ? '⏳ Creating...' : '✅ Create Post'}
              </button>
            </div>

            {message && (
              <div className={`message ${message.includes('✅') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}
          </form>
        </div>

        <div className="admin-help">
          <h3>📋 Quick Guide</h3>
          <ul>
            <li><strong>Title:</strong> Make it descriptive and SEO-friendly</li>
            <li><strong>Excerpt:</strong> 1-2 sentences that summarize the article</li>
            <li><strong>Category:</strong> Choose the most relevant employment law category</li>
            <li><strong>Tags:</strong> Use comma-separated keywords for better searchability</li>
            <li><strong>Content:</strong> Paste your HTML content with proper headings and structure</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .admin-wrap {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          background: var(--bg);
          color: var(--ink);
          min-height: 100vh;
        }

        .admin-header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--line);
        }

        .admin-header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: var(--ink);
        }

        .admin-header p {
          color: var(--muted);
          font-size: 1.1rem;
        }

        .blog-form {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 30px;
        }

        .form-section {
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--line);
        }

        .form-section:last-child {
          border-bottom: none;
        }

        .form-section h2 {
          color: var(--accent);
          margin-bottom: 20px;
          font-size: 1.5rem;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
          color: var(--ink);
        }

        input, textarea, select {
          width: 100%;
          padding: 12px;
          background: var(--bg);
          border: 1px solid var(--line);
          border-radius: 8px;
          color: var(--ink);
          font-family: inherit;
          font-size: 1rem;
        }

        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: var(--accent);
        }

        textarea {
          resize: vertical;
        }

        small {
          display: block;
          margin-top: 4px;
          color: var(--muted);
          font-size: 0.85rem;
        }

        .form-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-top: 30px;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .btn.primary {
          background: var(--accent);
          color: var(--bg);
        }

        .btn.secondary {
          background: transparent;
          color: var(--accent);
          border: 1px solid var(--accent);
        }

        .btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .message {
          margin-top: 20px;
          padding: 12px 16px;
          border-radius: 8px;
          font-weight: 500;
        }

        .message.success {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .admin-help {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 24px;
        }

        .admin-help h3 {
          color: var(--accent);
          margin-bottom: 16px;
        }

        .admin-help ul {
          list-style: none;
          padding: 0;
        }

        .admin-help li {
          margin-bottom: 8px;
          color: var(--muted);
          line-height: 1.5;
        }

        .admin-help strong {
          color: var(--ink);
        }

        @media (max-width: 768px) {
          .admin-wrap {
            padding: 16px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .form-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </>
  );
}
