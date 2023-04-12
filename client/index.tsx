import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  /**
   * Auth0Provider is a component that has a hook that provides
   * all authentication operations
   *
   * TODO: replace the empty strings below with your own domain, clientId, and audience
   */
  <Auth0Provider
    domain=""
    clientId=""
    redirectUri={window.location.origin}
    audience=""
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
)
