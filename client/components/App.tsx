import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'

import LogIn from './Login'
import { useAuth0 } from '@auth0/auth0-react'
import Home from './Home'

function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <Home />
    </>
  )
}

export default App
