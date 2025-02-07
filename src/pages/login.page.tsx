import { LoginForm } from '@/features';

const LoginPage = () => (
  <div className="flex h-screen w-full items-center justify-center px-4">
    <div className="mx-auto max-w-sm rounded-xl border p-4">
      <div className="mb-4 text-center text-2xl">Bofeiler</div>

      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
