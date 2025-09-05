import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Link from 'next/link'

export default function AuthNav() {
  const { user, loading, signOut } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  if (!mounted) {
    return null
  }

  if (loading) {
    return (
      <div style={{ padding: '1rem', textAlign: 'right' }}>
        <span style={{ color: '#6b7280' }}>Loading...</span>
      </div>
    )
  }

  if (!user) {
    return (
      <div style={{ 
        padding: '1rem', 
        textAlign: 'right', 
        backgroundColor: '#f9fafb', 
        borderBottom: '1px solid #e5e7eb' 
      }}>
        <Link 
          href="/auth/signin" 
          style={{ 
            color: '#3b82f6', 
            textDecoration: 'none', 
            marginRight: '1rem',
            fontWeight: '500'
          }}
        >
          Sign In
        </Link>
        <Link 
          href="/auth/signup" 
          style={{ 
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          Sign Up
        </Link>
      </div>
    )
  }

  return (
    <div style={{ 
      padding: '1rem', 
      textAlign: 'right', 
      backgroundColor: '#f9fafb', 
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ color: '#374151' }}>
        Welcome, <strong>{user.email}</strong>
      </div>
      <div>
        <Link 
          href="/dashboard" 
          style={{ 
            color: '#3b82f6', 
            textDecoration: 'none', 
            marginRight: '1rem',
            fontWeight: '500'
          }}
        >
          Dashboard
        </Link>
        <button
          onClick={handleSignOut}
          style={{
            backgroundColor: '#ef4444',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}
