import request from 'superagent'

interface User {
  firstName?: string
  lastName?: string
  userName?: string
  image?: string
}

export default async function addLogInInfo(user: User, token: string) {
  try {
    const response = await request
      .post('/')
      .send({ ...user, token })
      .set('Authorization', `Bearer ${token}`)
    if (response.body.message === 'User already exists') {
      console.log('User already exists in the database')
      return null
    }
    // purge me plz
    console.log(user)
    console.log(response.body)
    return response.body
  } catch (error) {
    console.error(error)
  }
}
