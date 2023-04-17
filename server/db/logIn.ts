import connection from './connection'

interface Props {
  firstName?: string
  lastName?: string
  userName?: string
  image?: string
}

// this function either returns null (if a user exists), or the user object
// we can probably just return the user object in both cases, making it easier to use (if we ever need the user object)
export async function addUserLogIn(
  { firstName, lastName, userName, image }: Props,
  authID: string,
  db = connection
) {
  const oldUser = await db('users').where({ authID }).first()
  if (oldUser) {
    return null
  }

  const newUser = await db('users')
    .insert({ firstName, lastName, userName, authID, image })
    .returning('*')
  return newUser[0]
}
