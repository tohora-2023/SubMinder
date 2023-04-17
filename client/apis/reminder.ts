import request from 'superagent'

export async function sendEmailReminder(
  email: string,
  sub: string,
  date: string,
  token: string
) {
  try {
    const response = await request
      .post('/v1/reminder')
      .send({ email, sub, date })
      .set('Authorization', `Bearer ${token}`)
    return response.body
  } catch (error) {
    console.error('Error sending reminder email:', error)
  }
}
