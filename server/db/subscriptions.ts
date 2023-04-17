import connection from './connection'
import { Subscription } from '../../models/subscription'

// in modern coding environments, there's seldom need to abbreviate variable names (autocomplete is your friend here)
// it's better to use descriptive names, even if they're longer
// like addSubscription, getSubscriptionById
// gets my mind off subway and onto subscriptions
// also, this should be singular, we're only adding one subscription
export function getAllSubs(db = connection) {
  return db('subscriptions').select()
}

export function getSubsWithDate(db = connection): Promise<Subscription[]> {
  return db('subscriptions')
    .join('calendarEvents', 'subscriptions.id', 'calendarEvents.subscriptionId')
    .select(
      'subscriptions.id as id',
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

export function getSubsList(
  user: string,
  db = connection
): Promise<Subscription[]> {
  return db('subscriptions')
    .where('subscriptions.userAuthId', '=', user)
    .select(
      'subscriptions.id as id',
      'subscriptions.name as name',
      'subscriptions.category as category',
      'subscriptions.endDate as endDate',
      'subscriptions.price as price',
      'subscriptions.website as website',
      'subscriptions.frequency as frequency',
      'subscriptions.userAuthId as userAuthId'
    )
}
