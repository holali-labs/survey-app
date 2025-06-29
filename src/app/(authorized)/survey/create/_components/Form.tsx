'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

const schema = z.object({
  title: z.string().min(1, '설문 제목을 입력하세요.').max(100, '설문 제목은 100자 이하로 입력하세요.'),
  description: z.string()
});

export function SurveyForm() {
  type Schema = z.infer<typeof schema>;

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      description: ''
    }
  });

  const onSubmit = (values: Schema) => {
    // TODO: 설문 저장
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel>설문 제목</FormLabel>
              <FormControl>
                <Input placeholder="설문 제목을 입력해주세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel>설문 설명</FormLabel>
              <FormControl>
                <Textarea placeholder="설문 설명을 입력해주세요" {...field} className="min-h-[100px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          저장하기
        </Button>
      </form>
    </Form>
  );
}
