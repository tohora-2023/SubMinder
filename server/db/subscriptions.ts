import connection from './connection'

export function getAllSubs(db = connection) {
  return db('subscriptions').select()
}
