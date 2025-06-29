import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SurveyForm } from './_components/Form';

export default function Page() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>설문 생성</CardTitle>
        <CardDescription>새로운 설문지를 생성하세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <SurveyForm />
      </CardContent>
    </Card>
  );
}
