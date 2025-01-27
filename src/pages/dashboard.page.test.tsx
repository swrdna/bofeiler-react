import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import DashboardPage from './dashboard.page';

describe('Dashboard Page', () => {
  it('sholud render DashboardPage', () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>,
    );

    expect(screen.getByText('DashboardPage')).toBeInTheDocument();
  });
});
