import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import Nav from './Nav'
import { fetchFruits } from '../actions'

function App() {
  const fruits = useAppSelector((state) => state.fruits)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFruits())
  }, [dispatch])

  return (
    <>
      <div className="mt-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold"></h1>
        <>
          <Nav />{' '}
        </>
      </div>
    </>
  )
}

export default App
