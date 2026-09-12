import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get('access')?.value || request.cookies.get('token')?.value
    const { pathname } = request.nextUrl

    // Redirect logged-in users away from /login to /dashboard
    if (accessToken && pathname.startsWith('/login')) {
        const dashboardUrl = new URL('/', request.url)
        return NextResponse.redirect(dashboardUrl)
    }

    // Redirect unauthenticated users away from /dashboard to /login
    if (!accessToken && pathname.startsWith('/dashboard')) {
        const loginUrl = new URL('/login', request.url)
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard', '/dashboard/:path*', '/login'],
}
