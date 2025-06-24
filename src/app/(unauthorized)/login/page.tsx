import { LoginForm } from '@/components/auth/login/Form';
import { Layers as ByForm } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <ByForm color="#2b7fff" size={24} strokeWidth={2} />
          ByForm
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
