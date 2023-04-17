import { Subscription } from 'react-redux'
import connection from './connection'

export function getEvents(db = connection): Promise<Subscription[]> {
  return db('calendarEvents')
    .join('subscriptions', 'calendarEvents.subscriptionId', 'subscriptions.id')
    .select(
      'subscriptions.name as name',
      'subscriptions.category as category',
      'subscriptions.price as price',
      'calendarEvents.*'
    )
}

// Prop isn't very descriptive
// we use Props in react because that's the convention given to the input for a component
// here, we should provide more context with a descriptive name
interface Prop {
  scheduleDate?: string
  isLastDate?: boolean
}

export async function addEvent(
  subscriptionId: number,
  { scheduleDate, isLastDate }: Prop,
  auth0Id: string,
  db = connection
) {
  return db('calendarEvents')
    .insert({ subscriptionId, scheduleDate, isLastDate, auth0Id })
    .returning('*')
}
