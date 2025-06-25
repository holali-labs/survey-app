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
            <div className="grid gap-2">
              <Label>공개 여부</Label>
              <RadioGroup className="flex flex-col gap-2" defaultValue="public">
                <div className="flex items-center gap-1">
                  <RadioGroupItem id="public" value="public" />
                  <Label htmlFor="public">공개 (공개링크 제공)</Label>
                </div>
                <div className="flex items-center gap-1">
                  <RadioGroupItem id="private" value="private" />
                  <Label htmlFor="private">비공개 (비밀링크 제공)</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label>자동 종료 조건</Label>
              <RadioGroup className="flex flex-col gap-2" defaultValue="none">
                <div className="flex items-center gap-1">
                  <RadioGroupItem id="count" value="count" />
                  <Label htmlFor="count">응답수</Label>
                </div>
                <div className="flex items-center gap-1">
                  <RadioGroupItem id="date" value="date" />
                  <Label htmlFor="date">날짜</Label>
                </div>
                <div className="flex items-center gap-1">
                  <RadioGroupItem id="none" value="none" />
                  <Label htmlFor="none">없음</Label>
                </div>
              </RadioGroup>
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
