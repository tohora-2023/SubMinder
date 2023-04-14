import connection from './connection'
import { Subscription } from '../../models/subscription'

export function getAllSubs(db = connection) {
  return db('subscriptions').select()
}

export function getSubsWithDate(db = connection): Promise<Subscription[]> {
  return db('subscriptions')
    .join('calendarEvents', 'subscriptions.id', 'calendarEvents.subscriptionId')
    .select(
      'subscriptions.name as name',
      'subscriptions.category as category',
      'subscriptions.endDate as endDate',
      'calendarEvents.isLastDate as isLastDate',
      'calendarEvents.scheduleDate as scheduleDate',
      'subscriptions.price as price',
      'subscriptions.website as website',
      'subscriptions.frequency as frequency',
      'subscriptions.userAuthId as userAuthId'
    )
}
