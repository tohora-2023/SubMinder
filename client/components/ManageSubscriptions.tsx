import { fetchSubscriptions } from '../actions/subscriptions'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useAuth0 } from '@auth0/auth0-react'
import SubItem from './SubItem'

function ManageSubscription() {
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useAppDispatch()
  const { loading, error, data } = useAppSelector(
    (state) => state.subscriptions
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently()
        dispatch(fetchSubscriptions(token))
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [dispatch, getAccessTokenSilently])

  console.log(data)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  return (
    <>
      <div
        style={{ fontFamily: 'sans-serif', width: '60%' }}
        className="right flex py-2"
      >
        <button className="ml-auto border border-accent-yellow px-4 py-2 font-medium text-accent-yellow">
          Add a new subscription
        </button>
      </div>
      <div style={{ width: '30%' }}>
        <h1
          style={{ textAlign: 'left' }}
          className="py-2 text-2xl font-bold text-subminder-indigo"
        >
          Manage Subscriptions
        </h1>
        <ul>
          {data?.map((sub) => {
            return (
              <li className="py-2" key={sub.id}>
                <SubItem subscription={sub} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
export default ManageSubscription
