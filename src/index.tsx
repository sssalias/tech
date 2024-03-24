import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app/App'
import {BrowserRouter} from 'react-router-dom'
import {ReactKeycloakProvider} from '@react-keycloak/web'
import {keycloak} from 'procces/auth'
import AuthProvider from 'procces/auth/auth-provider'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ReactKeycloakProvider authClient={keycloak} initOptions={{onLoad: 'login-required'}}>
      <React.StrictMode>
          <AuthProvider>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </AuthProvider>
      </React.StrictMode>
    </ReactKeycloakProvider>
);

