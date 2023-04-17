import request from 'superagent'

export async function sendEmailReminder(email: string, sub:string, token: string) {
  try {
    const response = await request
      .post('/v1/reminder')
      .send({ email, sub })
      .set('Authorization', `Bearer ${token}`)
    return response.body
  } catch (error) {
    console.error('Error sending reminder email:', error)
  }
}
