import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'

import LogIn from './Login'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      {isAuthenticated ? (
        <div className="mt-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Fullstack Boilerplate</h1>
        </div>
      ) : (
        <LogIn />
      )}
    </>
  )
}

export default App
