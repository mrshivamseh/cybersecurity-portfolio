
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import './mobile.css';
import App from './app';
import { portfolio } from './data/portfolio';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root was not found in index.html');
}

document.title = `${portfolio.name} | ${portfolio.role}`;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
