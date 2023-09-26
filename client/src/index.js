import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
  <React.StrictMode>
  <Auth0Provider
    domain="dev-tqinqrn4chmb6p7m.us.auth0.com"
    clientId="x1MWv0ubEP7ipYTVkfZVXq2jCrpB4ftL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
    </ChakraProvider>
);