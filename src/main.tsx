import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './Pages/Home';
import './Styles/global.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
