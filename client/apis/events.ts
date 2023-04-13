import request from 'superagent'

interface Prop {
  scheduleDate?: string
  isLastDate?: boolean
}

export default async function addNewSub(
  subId: number,
  data: Prop,
  token: string
) {
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
