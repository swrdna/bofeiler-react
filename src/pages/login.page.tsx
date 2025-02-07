import { LoginForm } from '@/features';

const LoginPage = () => (
  <div className="flex h-screen w-full items-center justify-center px-4">
    <div className="card border">
      <div className="card-body">
        <div className="card-title mb-4 justify-center">Bofeiler</div>
        <LoginForm />
      </div>
    </div>
  </div>
);

export default LoginPage;
