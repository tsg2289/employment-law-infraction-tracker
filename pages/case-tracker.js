import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/AuthContext'
import AuthNav from '../components/AuthNav'
import Head from 'next/head'
import Link from 'next/link'

export default function CaseTracker() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin')
    }
  }, [user, loading, router])

  if (loading) {
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

  if (!user) {
    return null
  }

  return (
    <>
      <Head>
        <title>Case Tracker - Employment Law Infraction Tracker</title>
        <meta name="description" content="Track your employment law cases securely" />
      </Head>

      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        <AuthNav />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
              Employment Law Case Tracker
            </h1>
            <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
              Document and track your employment law violations securely
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* Wage & Hour */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <h3 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Wage & Hour Violations
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                Track overtime violations, meal break issues, minimum wage problems, and misclassification.
              </p>
              <Link href="/wage-hour" style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                Start Case
              </Link>
            </div>

            {/* Discrimination & Harassment */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚖️</div>
              <h3 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Discrimination & Harassment
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                Document discrimination based on protected classes and workplace harassment incidents.
              </p>
              <Link href="/discrimination" style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                Start Case
              </Link>
            </div>

            {/* Retaliation & Wrongful Termination */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚫</div>
              <h3 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Retaliation & Wrongful Termination
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                Track retaliation for protected activities and wrongful termination cases.
              </p>
              <Link href="/retaliation" style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                Start Case
              </Link>
            </div>

            {/* Leave of Absence */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏥</div>
              <h3 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Leave of Absence Issues
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                Document FMLA, CFRA, and other leave-related violations and denials.
              </p>
              <Link href="/leave" style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                Start Case
              </Link>
            </div>

            {/* Workplace Safety */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🦺</div>
              <h3 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Workplace Safety
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                Report OSHA violations, unsafe working conditions, and safety concerns.
              </p>
              <Link href="/safety" style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                Start Case
              </Link>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Your Case Dashboard
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
              View all your submitted cases and track their progress in your secure dashboard.
            </p>
            <Link href="/dashboard" style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              display: 'inline-block'
            }}>
              View Dashboard
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
