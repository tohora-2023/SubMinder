import { useAppSelector } from '../hooks'
import SubItem from './SubItem'

function ManageSubscription() {
  const { loading, error, data } = useAppSelector(
    (state) => state.subscriptions
  )

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  return (
    <>
      <ul>
        {data.map((sub) => {
          return (
            <li key={sub.id}>
              <SubItem subscription={sub} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ManageSubscription
