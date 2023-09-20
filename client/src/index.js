import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-tqinqrn4chmb6p7m.us.auth0.com"
    clientId="x1MWv0ubEP7ipYTVkfZVXq2jCrpB4ftL"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
);
