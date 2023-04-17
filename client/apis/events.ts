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
      .send({ ...data, subscriptionId, auth0Id: token })
      .set('Authorization', `Bearer ${token}`)

    return response.body
  } catch (error) {
    // try and avoid catching and logging the error here without re-throwing the error
    // code that calls this will think the request was successful when it wasn't
    // because this code will run and "handle the error"
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
