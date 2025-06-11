import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createClient() {
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      async getAll() {
        const cookieStore = await cookies();
        return cookieStore.getAll().map(c => ({ name: c.name, value: c.value }));
      },
      async setAll(cookieList) {
        const cookieStore = await cookies();
        cookieList.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
      }
    }
  });
}
