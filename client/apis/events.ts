import request from 'superagent'

interface Prop {
  scheduleDate?: Date
  isLastDate?: boolean
}

export async function addNewSub(subId: number, data: Prop, token: string) {
  try {
    const response = await request
      .post(`/v1/events/:${subId}`)
      .send({ subId, ...data })
      .set('Authorization', `Bearer ${token}`)

    return response.body
  } catch (error) {
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
