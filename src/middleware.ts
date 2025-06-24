import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const supabase = createClient();
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - login
     * - signup
     * - auth/callback
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!login|signup|auth/callback|_next/static|_next/image|favicon.ico).*)'
  ]
};
