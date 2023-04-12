import { useAppSelector } from '../hooks'
import * as Models from '../../models/subscriptions'

interface Props {
  subscription: Models.Subscription
}

function Subscription(props: Props) {
  return (
    <div>
      <h2>Name: {props.subscription.name}</h2>
      <h2>Category: {props.subscription.name}</h2>
      {props.subscription.isLastPayment ? (
        <h2>Last Payment Date: {props.subscription.name}</h2>
      ) : (
        <h2>Next Payment Date: {props.subscription.name}</h2>
      )}
    </div>
  )
}
export default Subscription
