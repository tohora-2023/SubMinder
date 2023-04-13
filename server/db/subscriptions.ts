import connection from './connection'

export function getAllSubs(db = connection) {
  return db('subscriptions').select()
}

export function getSubsWithDate(db = connection) {
  return db('subscriptions')
    .join('calendarEvents', 'subscriptions.id', 'calendarEvents.subscriptionId')
    .select(
      'subscriptions.name as name',
      'subscriptions.category as category',
      'subscriptions.endDate as endDate',
      'calendarEvent.isLastPayment as isLastPayment',
      'calendarEvent.scheduleDate as scheduleDate',
      'subscriptions.price as price',
      'subscriptions.website as website'
    )
}
