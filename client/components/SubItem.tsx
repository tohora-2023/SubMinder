import * as Models from '../../models/subscription'
interface Props {
  subscription: Models.Subscription
}

function SubItem(props: Props) {
  return (
    <div>
      <h2>
        <a href={props.subscription.website} target="_blank" rel="noreferrer">
          Name: {props.subscription.name}
        </a>
      </h2>
      <h2>Category: {props.subscription.category}</h2>
      {props.subscription.isLastDate ? (
        <h2>Last Payment Date: {props.subscription.scheduleDate}</h2>
      ) : (
        <h2>Next Payment Date: {props.subscription.scheduleDate}</h2>
      )}
      <h2>Price: {props.subscription.price}</h2>
    </div>
  )
}
export default SubItem
