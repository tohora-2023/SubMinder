import connection from './connection'

interface Props {
  firstName?: string
  lastName?: string
  userName?: string
 
  image?: string
}

export function addUserLogIn(
  { firstName, lastName, userName, image }: Props, authID: string,
  db = connection
) {
  return db('users').insert({ firstName, lastName, userName, authID, image })
}
