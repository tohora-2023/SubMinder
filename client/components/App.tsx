import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'

import { fetchFruits } from '../actions'
import LogIn from './Login'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const fruits = useAppSelector((state) => state.fruits)
  const dispatch = useAppDispatch()
  const { isAuthenticated } = useAuth0()

  useEffect(() => {
    dispatch(fetchFruits())
  }, [dispatch])

  return (
    <>
      {isAuthenticated ? (
        <div className="mt-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Fullstack Boilerplate</h1>
          <ul className="mt-4 flex flex-col gap-4 rounded-lg bg-slate-300 px-8 py-4">
            {fruits.map((fruit) => (
              <li className="font-semibold text-slate-900" key={fruit}>
                {fruit}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <LogIn />
      )}
    </>
  )
}

export default App
