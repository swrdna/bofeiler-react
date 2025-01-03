import { LoginForm } from '@/features';

const LoginPage = () => (
  <div className="flex h-screen w-full items-center justify-center px-4 bg-gray-100">
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-title justify-center mb-4">Bofeiler</div>
        <LoginForm />
      </div>
    </div>
  </div>
);

export default LoginPage;
