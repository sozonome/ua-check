import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// fonts
import '@fontsource/raleway/latin.css';
import '@fontsource/inter/latin.css';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
