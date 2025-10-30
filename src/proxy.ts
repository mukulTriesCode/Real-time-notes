import { NextResponse, NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    if (pathname === '/login' || pathname === '/signup') {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/login', '/signup', '/dashboard/:path*'],
}