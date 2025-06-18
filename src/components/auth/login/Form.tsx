import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoginButton } from '@/components/auth/login/Button';
import Google from '@/components/svgr/Google';
import Kakao from '@/components/svgr/Kakao';
import Link from 'next/link';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">ByForm</CardTitle>
          <CardDescription>Google or Kakao로 로그인</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <LoginButton provider="google">
                  <Google />
                  구글 로그인
                </LoginButton>
                <LoginButton provider="kakao">
                  <Kakao />
                  카카오 로그인
                </LoginButton>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">ByForm으로 로그인</span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" placeholder="email@byform.com" required />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">비밀번호</Label>
                    <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                      비밀번호를 잊으셨나요?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  로그인
                </Button>
              </div>
              <div className="text-center text-sm">
                계정이 없으신가요? &nbsp;
                <Link href="/signup" className="underline underline-offset-4">
                  회원가입
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
