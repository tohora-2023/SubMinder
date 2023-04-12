import * as Models from '../../models/subscription'

interface Props {
  subscription: Models.Subscription
}

function SubItem(props: Props) {
  return (
    <div
      className="border  border-2 border-black p-6"
      style={{ fontFamily: 'sans-serif' }}
    >
      <h1>
        <div className="flex justify-between">
          <a
            href={props.subscription.website}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-subminder-purple hover:text-accent-yellow"
          >
            {props.subscription.name.toUpperCase()}
          </a>
          <h2>${props.subscription.price}</h2>
        </div>
      </h1>
      <h2>
        {props.subscription.category.toLowerCase()} -{' '}
        {props.subscription.frequency.toLowerCase()}
      </h2>
      {props.subscription.isLastDate ? (
        <h2>last payment date: {props.subscription.scheduleDate}</h2>
      ) : (
        <h2>next payment date: {props.subscription.scheduleDate}</h2>
      )}
    </div>
  )
}

export default SubItem
