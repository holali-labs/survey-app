'use client';

import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';

type Props = {
  children: React.ReactNode;
  provider: 'google' | 'kakao';
};
export function LoginButton({ provider, children }: Props) {
  const supabase = createClient();

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={async () => {
        await supabase.auth.signInWithOAuth({
          provider,
          options: { redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback` }
        });
      }}
    >
      {children}
    </Button>
  );
}
