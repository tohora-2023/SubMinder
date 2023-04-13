import connection from './connection'

interface Props {
  firstName?: string
  lastName?: string
  userName?: string
  image?: string
}

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
