import request from 'superagent'

interface Prop {
  image?: string
  frequency?: string
  startDate?: string
  endDate?: string
  category?: string
  website?: string
  price?: number
}

export default async function addLogInInfo(data: Prop, token: string) {
  try {
    const response = await request
      .post('/addsub')
      .send({ ...data, token })
      .set('Authorization', `Bearer ${token}`)

    console.log(data)
    console.log(response.body)
    return response.body
  } catch (error) {
    console.error(error)
  }
}
