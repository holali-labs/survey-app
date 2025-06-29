import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function Page() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>설문 생성</CardTitle>
        <CardDescription>새로운 설문지를 생성하세요. 제목, 설명, 옵션을 입력하고 저장하세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">제목</Label>
              <Input id="title" type="text" placeholder="설문 제목" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">설명</Label>
              <Textarea className="min-h-[100px]" id="description" placeholder="설문 설명" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          생성
        </Button>
      </CardFooter>
    </Card>
  );
}
