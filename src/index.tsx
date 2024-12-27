import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Main from '@/main';

const container = document.querySelector('#root');
const root = createRoot(container as Element);

root.render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
