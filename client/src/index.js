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
    domain="dev-pkerk343c7ujo0mk.us.auth0.com"
    clientId="MJvZELFNNwbrzAYBDjP6V5DIUnXblBD3"
    clientSecret="2DN81sMwu1PIYrkdQSXNCkH6ykV34Qp4PZSThZiVMOlqgknkmrt_3iw3IkiW9ar9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
    </ChakraProvider>
);