import { Subscription } from 'react-redux'
import connection from './connection'

export function getEvents(db = connection): Promise<Subscription[]> {
  return db('calendarEvents')
    .join('subscriptions', 'calendarEvents.subscriptionId', 'subscriptions.id')
    .select(
      'subscriptions.name as name',
      'subscriptions.category as category',
      'subscriptions.endDate as endDate',
      'subscriptions.price as price',
      'subscriptions.website as website',
      'subscriptions.frequency as frequency'
    )
}
interface Prop {
  scheduleDate?: string
  isLastDate?: boolean
}

export async function addEvent(
  subsId: number,
  { scheduleDate, isLastDate }: Prop,
  db = connection
) {
  return db('calendarEvents')
    .insert({ subsId, scheduleDate, isLastDate })
    .returning('*')
}
