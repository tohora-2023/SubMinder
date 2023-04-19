import request from 'superagent'

interface Prop {
  scheduleDate?: string
  isLastDate?: boolean
  isEmailSent?: boolean
}

export async function UpdateEmail(
  id: number,
  isEmailSent: boolean,
  token: string
) {
  await request
    .post(`/v1/events/update/${id}`)
    .send({ id, isEmailSent })
    .set('Authorization', `Bearer ${token}`)

  return request
    .get(`/v1/events/update/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      const sub = res.body
      return sub
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function addNewCalanderDay(
  subscriptionId: number,
  data: Prop,
  token: string
) {
  const response = await request
    .post(`/v1/events/${subscriptionId}`)
    .send({ ...data, subscriptionId, auth0Id: token})
    .set('Authorization', `Bearer ${token}`)

  return response.body
}

export async function getEvents(token: string) {
  const response = await request
    .get(`/v1/events`)
    .set('Authorization', `Bearer ${token}`)
  return response.body.events
}
