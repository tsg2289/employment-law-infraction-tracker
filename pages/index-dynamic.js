import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/AuthContext'
import AuthNav from '../components/AuthNav'

export default function Home() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [showFeatures, setShowFeatures] = useState(false)
  const [authError, setAuthError] = useState(null)
  const [mounted, setMounted] = useState(false)

  // Handle hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // If user is authenticated, redirect to dashboard (only after mounting)
  useEffect(() => {
    if (mounted && !loading && user) {
      router.push('/dashboard')
    }
  }, [user, loading, router, mounted])

  // Add timeout for loading state to prevent infinite loading
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setAuthError('Authentication service is taking longer than expected. You can still use the site.')
      }
    }, 5000) // 5 second timeout

    return () => clearTimeout(timer)
  }, [loading])

  // Don't render anything until mounted (prevents hydration mismatch)
  if (!mounted) {
    return null
  }

  // If there's an auth error or loading takes too long, show the page anyway
  if (loading && !authError) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #e5e7eb', 
            borderTop: '4px solid #3b82f6', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }} />
          <p style={{ color: '#6b7280' }}>Loading...</p>
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Employment Law Infraction Tracker - Secure Case Management</title>
        <meta name="description" content="Securely track and document employment law violations with our protected case management system. Sign up for free and keep your employment cases organized." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
        {authError && (
          <div style={{ 
            backgroundColor: '#fef3c7', 
            border: '1px solid #f59e0b', 
            color: '#92400e', 
            padding: '0.75rem', 
            textAlign: 'center',
            fontSize: '0.875rem'
          }}>
            ⚠️ {authError}
          </div>
        )}
        <AuthNav />
        
        {/* Hero Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '4rem 1rem',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              lineHeight: '1.1'
            }}>
              Employment Law Infraction Tracker
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              marginBottom: '2rem',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>
              Securely document and track employment law violations with our protected case management system. 
              Your data is private and secure with enterprise-level protection.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/auth/signup" style={{
                backgroundColor: '#ffffff',
                color: '#667eea',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s'
              }}>
                Get Started Free
              </Link>
            <button
                onClick={() => setShowFeatures(!showFeatures)}
                style={{ 
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                Learn More
              </button>
            </div>
            </div>
                </div>

        {/* Security Badge */}
        <div style={{ 
          backgroundColor: '#f8fafc', 
          padding: '2rem 1rem',
          textAlign: 'center',
          borderBottom: '1px solid #e2e8f0'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ 
                backgroundColor: '#10b981', 
                color: 'white', 
                padding: '0.5rem', 
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                🔒
              </div>
              <h3 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>
                Enterprise-Level Security
              </h3>
                </div>
            <p style={{ color: '#6b7280', fontSize: '1rem', margin: 0 }}>
              Your sensitive employment data is protected with row-level security, email verification, and encrypted storage.
            </p>
                </div>
              </div>

        {/* Case Types Section */}
        <div style={{ 
          padding: '4rem 1rem', 
          backgroundColor: '#ffffff'
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ 
              textAlign: 'center', 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#1f2937', 
              marginBottom: '3rem' 
            }}>
              Track All Types of Employment Issues
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {[
                { title: 'Wage & Hour Violations', icon: '💰', desc: 'Overtime, meal breaks, minimum wage issues' },
                { title: 'Discrimination & Harassment', icon: '⚖️', desc: 'Protected class discrimination and harassment' },
                { title: 'Retaliation & Wrongful Termination', icon: '🚫', desc: 'Retaliation for protected activities' },
                { title: 'Leave of Absence Issues', icon: '🏥', desc: 'FMLA, CFRA, and other leave violations' },
                { title: 'Workplace Safety', icon: '🦺', desc: 'OSHA violations and unsafe conditions' }
              ].map((item, index) => (
                <div key={index} style={{ 
                  backgroundColor: 'white', 
                  padding: '1.5rem', 
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <h4 style={{ color: '#1f2937', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.4' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
              </div>
              
            <div style={{ textAlign: 'center' }}>
              <Link href="/auth/signup" style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                display: 'inline-block'
              }}>
                Start Tracking Your Cases
              </Link>
                </div>
                </div>
              </div>
              
        {/* How It Works Section */}
        <div style={{ padding: '4rem 1rem', backgroundColor: '#1f2937', color: 'white' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem' }}>
              How It Works
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div>
                <div style={{ 
                  backgroundColor: '#3b82f6', 
                  color: 'white', 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold',
                  margin: '0 auto 1rem'
                }}>
                  1
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Sign Up</h3>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Create your secure account with email verification</p>
              </div>
              
              <div>
              <div style={{ 
                  backgroundColor: '#3b82f6', 
                  color: 'white', 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold',
                  margin: '0 auto 1rem'
                }}>
                  2
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Document Cases</h3>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Record employment law violations with our guided forms</p>
              </div>
              
                <div>
                <div style={{ 
                  backgroundColor: '#3b82f6', 
                  color: 'white', 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold',
                  margin: '0 auto 1rem'
                }}>
                  3
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Track Progress</h3>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Monitor your cases in your secure personal dashboard</p>
              </div>
                </div>
              </div>
              </div>
              
        {/* CTA Section */}
              <div style={{ 
          padding: '4rem 1rem', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          textAlign: 'center' 
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Ready to Get Started?
            </h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: '0.9' }}>
              Join thousands of users who trust our platform to securely manage their employment law cases.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/auth/signup" style={{
                backgroundColor: 'white',
                color: '#3b82f6',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                Create Free Account
              </Link>
              <Link href="/auth/signin" style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                    textDecoration: 'none', 
                    fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                Sign In
                  </Link>
                </div>
              </div>
      </div>

        {/* Footer */}
        <div style={{ 
          padding: '2rem 1rem', 
          backgroundColor: '#1f2937', 
          color: '#d1d5db', 
          textAlign: 'center',
          borderTop: '1px solid #374151'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            © 2024 Employment Law Infraction Tracker. Your data is secure and private.
          </p>
        </div>
      </div>
    </>
  )
}
