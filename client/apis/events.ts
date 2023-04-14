import request from 'superagent'

interface Prop {
  scheduleDate?: string
  isLastDate?: boolean
}

export async function addNewCalanderDay(
  subscriptionId: number,
  data: Prop,
  token: string
) {
  try {
    const response = await request
      .post(`/v1/events/${subscriptionId}`)
      .send({ ...data, subscriptionId, auth0Id: token})
      .set('Authorization', `Bearer ${token}`)

    return response.body
  } catch (error) {
    console.log('cant send the request')
    console.error(error)
  }
}

export async function getEvents(token: string) {
  try {
    const response = await request
      .get(`/v1/events`)
      .set('Authorization', `Bearer ${token}`)
    return response.body.events
  } catch (error) {
    console.error(error)
  }
}
