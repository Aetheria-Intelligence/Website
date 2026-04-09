import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/design-tokens.css';
import './styles.css';
import './styles/r7-overrides.css';
import './styles/experience.css';

const redirect = new URLSearchParams(window.location.search).get('redirect');

if (redirect && window.location.pathname === '/') {
  window.history.replaceState(null, '', redirect);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
