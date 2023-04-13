import request from 'superagent'

interface Prop {
  name?: string
  image?: string
  frequency?: string
  startDate?: string
  endDate?: string
  category?: string
  website?: string
  price?: number
}

export default async function addNewSub(data: Prop, token: string) {
  try {
    const response = await request
      .post('/v1/addsub')
      .send({ ...data, token })
      .set('Authorization', `Bearer ${token}`)

    console.log(data)
    console.log(response.body)
    return response.body
  } catch (error) {
    console.error(error)
  }
}
