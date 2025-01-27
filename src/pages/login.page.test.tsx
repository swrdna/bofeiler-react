import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import LoginPage from './login.page';

describe('Login Page', () => {
  it('sholud render LoginPage', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    expect(screen.getByText('Bofeiler')).toBeInTheDocument();
  });
});
