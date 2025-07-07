import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { createClient } from '@/lib/supabase/server';

export async function GET(_: Request) {
  const supabase = createClient();
  const { data, error: authError } = await supabase.auth.getUser();

  if (authError) {
    return NextResponse.json({ error: '인증 정보를 찾을 수 없습니다.' }, { status: 401 });
  }

  const surveys = await prisma.survey.findMany({
    where: {
      userId: data.user.id
    }
  });

  return NextResponse.json(surveys, { status: 200 });
}
