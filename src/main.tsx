import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router, ReactLocation } from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routes } from './routes';
import App from './App';
import './index.css';

const queryClient = new QueryClient();
const location = new ReactLocation();

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={routes}>
        <App />
      </Router>
    </QueryClientProvider>
  </StrictMode>
);