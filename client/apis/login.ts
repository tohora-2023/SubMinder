import request from 'superagent'

interface User {
  firstName?: string
  lastName?: string
  userName?: string
  image?: string
}

export default async function addLogInInfo(user: User, token: string) {
  const response = await request
    .post('/')
    .send({ ...user, token })
    .set('Authorization', `Bearer ${token}`)
  if (response.body.message === 'User already exists') {
    return null
  }
  return response.body
}
