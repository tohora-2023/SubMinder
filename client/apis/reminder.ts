import request from 'superagent'

export async function sendEmailReminder(email: string| undefined, token: string) {
  try {
    const response = await request
      .get('/v1/reminder')
      .set('Authorization', `Bearer ${token}`)
    return response.body
  } catch (error) {
    console.error(error)
  }
}
