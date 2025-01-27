import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import LoginForm from './login-form';

describe('Login Form', () => {
  it('sholud render login input', () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );
    const inputUsername = screen.getByPlaceholderText('username: admin');
    const inputPassword = screen.getByPlaceholderText('password: indonesia!!');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    expect(inputUsername).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});
