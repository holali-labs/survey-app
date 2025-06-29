import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  const supabase = createClient();
  const { data, error: authError } = await supabase.auth.getUser();
  const body = await request.json();

  if (authError) {
    return NextResponse.json({ error: '인증 정보를 찾을 수 없습니다.' }, { status: 401 });
  }

  const newSurvey = await prisma.survey.create({
    data: {
      title: body.title,
      description: body.description,
      userId: data.user.id
    }
  });

  return NextResponse.json(newSurvey, { status: 201 });
}
