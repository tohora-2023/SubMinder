import { useAppSelector } from '../hooks'

import Subscription from './Subscription'

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

  return data.map((subscription, index) => {
    ;<ul>
      <li>
        <Subscription subscription={subscription} />
      </li>
    </ul>
  })
}
export default ManageSubscription
