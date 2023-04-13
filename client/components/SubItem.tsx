import * as Models from '../../models/subscription'
import SubItemMenu from './SubItemMenu'

interface Props {
  subscription: Models.Subscription
}

function SubItem(props: Props) {
  return (
    <div
      className="border border-2 border-black p-6"
      style={{ fontFamily: 'sans-serif' }}
    >
      <SubItemMenu />
      <h1 className="pt-3">
        <div className="p4 flex justify-between">
          <a
            href={props.subscription.website}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-subminder-purple hover:text-accent-yellow"
          >
            {props.subscription.name}
          </a>
          <h2>${props.subscription.price.toFixed(2)}</h2>
        </div>
      </h1>

      {props.subscription.isLastDate ? (
        <div className="flex justify-between">
          <h2>last payment date:</h2>
          <h2>{props.subscription.scheduleDate}</h2>
        </div>
      ) : (
        <div className="flex justify-between">
          <h2>next payment date:</h2>
          <h2>{props.subscription.scheduleDate}</h2>
        </div>
      )}

      <h2>
        {props.subscription.category} - {props.subscription.frequency}
      </h2>
    </div>
  )
}

export default SubItem
