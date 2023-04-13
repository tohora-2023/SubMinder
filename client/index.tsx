import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store'
import './styles/index.css'

import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <Auth0Provider
    domain="tohora-2023-roisin.au.auth0.com"
    clientId="YSI0r6oMGzh2bTgvNLP5iqsSKYKgTHbo"
    redirectUri={window.location.origin}
    audience="https://subminder/api"
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
)
