import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return req.cookies.get(name)?.value
        },
        set(name, value, options) {
          res.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name, options) {
          res.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // Refresh session if expired - required for Server Components
  await supabase.auth.getSession()

  // Get the current user
  const { data: { user } } = await supabase.auth.getUser()

  // Define protected routes
  const protectedRoutes = [
    '/admin',
    '/dashboard'
  ]

  // Define auth routes (redirect to home if already authenticated)
  const authRoutes = [
    '/auth/signin',
    '/auth/signup',
    '/auth/forgot-password'
  ]

  const { pathname } = req.nextUrl

  // Redirect authenticated users away from auth pages
  if (user && authRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // Redirect unauthenticated users from protected routes
  if (!user && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/auth/signin', req.url))
  }

  // For API routes, check authentication
  if (pathname.startsWith('/api/') && !pathname.startsWith('/api/auth/')) {
    // Allow certain public API routes
    const publicApiRoutes = [
      '/api/blog',
      '/api/info'
    ]

    if (!publicApiRoutes.some(route => pathname.startsWith(route))) {
      if (!user) {
        return NextResponse.json(
          { error: 'Authentication required' },
          { status: 401 }
        )
      }
    }
  }

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
