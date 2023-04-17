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
  try {
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
  } catch (error) {
    console.error(error)
  }
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
