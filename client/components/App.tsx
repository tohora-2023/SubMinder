import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'

import ManageSubscription from './ManageSubscriptions'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // dispatch(fetchFruits())
  }, [dispatch])

  return (
    <>
      <div className="mt-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Fullstack Boilerplate</h1>
        <ManageSubscription />
      </div>
    </>
  )
}

export default App
