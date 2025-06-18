import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);

  let next = searchParams.get('next') ?? '/';
  if (!next.startsWith('/')) {
    next = '/';
  }

  const code = searchParams.get('code');
  if (code) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (data.session?.user.id) {
      const user = await prisma.user.findUnique({
        where: {
          id: data.session?.user.id
        }
      });

      if (!user) {
        await prisma.user.create({
          data: {
            id: data.session?.user.id,
            email: data.session?.user.email,
            name: data.session?.user.user_metadata.name,
            provider: data.session?.user.app_metadata.provider as 'google' | 'kakao' | 'local'
          }
        });
      }
    }

    if (!error) {
      const forwardedHost = request.headers.get('x-forwarded-host'); // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === 'development';
      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}${next}`);
      }
      if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      }
      return NextResponse.redirect(`${origin}${next}`);
    }
  }
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
