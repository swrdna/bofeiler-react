import { LoginForm } from '@/features';

const LoginPage = () => (
  <div className="flex h-screen w-full items-center justify-center px-4">
    <div className="mx-auto max-w-sm border p-4 rounded-xl">
      <div className="text-2xl text-center mb-4">Bofeiler</div>

      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
