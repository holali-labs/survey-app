import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function LoginForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>바이폼에 로그인하기</CardTitle>
        <CardDescription>아래의 정보를 입력해주세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="email@byform.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">비밀번호</Label>
                <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button type="submit" className="w-full">
          로그인
        </Button>
        <Button variant="outline" className="w-full">
          구글 로그인
        </Button>
        <Button variant="outline" className="w-full">
          카카오 로그인
        </Button>
      </CardFooter>
    </Card>
  );
}
