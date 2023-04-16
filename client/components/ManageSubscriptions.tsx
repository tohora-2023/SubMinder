import { fetchSubscriptions } from '../actions/subscriptions'
import { Link } from 'react-router-dom'
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

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  return (
    <>
      <div className="right main-page-container flex py-2">
        <button className="ml-auto border border-accent-yellow px-4 py-2 font-medium text-accent-yellow">
          <Link to="/addsubscription">Add a new subscription</Link>
        </button>
      </div>
      <div className="main-page-container">
        <h1 className="align-left py-2 text-2xl font-bold text-subminder-indigo">
          Manage Subscriptions
        </h1>
        <ul>
          {data && data.length > 0 ? (
            data.map((sub) => {
              return (
                <li className="py-2" key={sub.id}>
                  <SubItem subscription={sub} />
                </li>
              )
            })
          ) : (
            <p>You have no subscriptions, please add one</p>
          )}
        </ul>
      </div>
    </>
  )
}
export default ManageSubscription
