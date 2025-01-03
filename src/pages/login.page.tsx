import { LoginForm } from '@/features';

const LoginPage = () => (
  <div className="flex h-screen w-full items-center justify-center px-4">
    <div className="mx-auto max-w-sm">
      <div className="text-2xl text-center">Bofeiler</div>

      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
