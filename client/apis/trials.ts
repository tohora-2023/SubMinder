import request from 'superagent'

interface Prop {
  name: string
  website: string
  category: string
  scheduleDate: string
}

export async function addNewTrial(data: Prop, token: string) {
  try {
    const response = await request
      .post(`/v1/trials`)
      .send({ ...data, auth0Id: token })
      .set('Authorization', `Bearer ${token}`)

    return response.body
  } catch (error) {
    console.log('cant send the request')
    console.error(error)
  }
}

export async function getAllTrials(token: string) {
  try {
    const response = await request
      .get(`/v1/trials`)
      .set('Authorization', `Bearer ${token}`)
    return response.body.trials
  } catch (error) {
    console.error(error)
  }
}
