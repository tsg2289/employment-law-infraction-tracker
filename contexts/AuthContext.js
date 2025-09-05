import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Add a maximum loading timeout to prevent infinite loading
    const maxLoadingTimeout = setTimeout(() => {
      if (loading) {
        console.warn('Authentication loading timeout reached')
        setError('Authentication service timeout')
        setLoading(false)
      }
    }, 3000) // 3 second max loading time

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn('Supabase environment variables not configured')
      setError('Authentication service not configured')
      setLoading(false)
      clearTimeout(maxLoadingTimeout)
      return
    }

    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setUser(session?.user ?? null)
        setLoading(false)
        clearTimeout(maxLoadingTimeout)
      } catch (err) {
        console.error('Auth session error:', err)
        setError('Authentication service unavailable')
        setLoading(false)
        clearTimeout(maxLoadingTimeout)
      }
    }

    getInitialSession()

    // Listen for auth changes
    let subscription
    try {
      const { data } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          setUser(session?.user ?? null)
          setLoading(false)
          clearTimeout(maxLoadingTimeout)
        }
      )
      subscription = data.subscription
    } catch (err) {
      console.error('Auth listener error:', err)
      setError('Authentication service unavailable')
      setLoading(false)
      clearTimeout(maxLoadingTimeout)
    }

    return () => {
      clearTimeout(maxLoadingTimeout)
      if (subscription) {
        subscription.unsubscribe()
      }
    }
  }, [])

  const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`
      }
    })
    return { data, error }
  }

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const resetPassword = async (email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`
    })
    return { data, error }
  }

  const value = {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut,
    resetPassword
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
