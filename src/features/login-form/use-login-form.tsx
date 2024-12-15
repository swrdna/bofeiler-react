import { useForm } from '@tanstack/react-form';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/providers/auth.provider';

const useLoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const form = useForm({
    validators: {
      onSubmitAsync: async ({ value }) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        if (value.password === 'indonesia!!') {
          setUser({
            id: 1,
            username: value.username,
            fullname: 'Admin',
            exp_token: 2556141803,
            access_token: 'jwttokenhere',
          });

          navigate('/');
        } else {
          return { form: 'Invalid username and password', fields: {} };
        }

        return null;
      },
    },
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return { form };
};

export default useLoginForm;
