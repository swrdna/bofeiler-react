import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/providers/auth.provider';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const handleLogin = () => {
    setUser({
      id: 1,
      username: 'johnwick',
      fullname: 'John Wick',
      exp_token: 2556141803,
      access_token: 'jwttokenhere',
    });

    navigate('/');
  };

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Bofeiler</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="username"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
