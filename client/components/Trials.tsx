import { useAuth0 } from '@auth0/auth0-react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useEffect, useState } from 'react'
import { fetchTrials } from '../actions/trials'

export default function Trials() {
  const { getAccessTokenSilently, user } = useAuth0()
  const dispatch = useAppDispatch()
  const { loading, error, data } = useAppSelector((state) => state.trials)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently()
        dispatch(fetchTrials(token))
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [dispatch, getAccessTokenSilently])

  return (
    <div>
      {data.map((item) => {
        const date = new Date(item.scheduleDate)
        const formattedDate = date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
        })
        return (
          <div
            className="mb-4 border-2 border-black px-6 pb-6"
            key={item.id}
            style={{ width: '668px', marginBottom: '200px' }}
          >
            <div className="p4 flex flex-col">
              <div className=" mt-auto flex h-min justify-end self-end pt-0">
                <button className="text-2xl font-bold text-subminder-indigo hover:text-subminder-purple">
                  ...
                </button>
              </div>
              <div className="flex flex-row justify-between">
                <a
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-subminder-purple hover:text-accent-yellow"
                >
                  {item.name.toUpperCase()}
                </a>
                <p>{formattedDate}</p>
              </div>
              <h2>{item.category}</h2>
            </div>
          </div>
        )
      })}
    </div>
  )
}
