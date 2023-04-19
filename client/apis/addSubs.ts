import request from 'superagent'

interface Prop {
  name: string
  image?: string
  frequency: string
  startDate: Date
  endDate: Date
  category: string
  website?: string
  price: number
  reminder: boolean
}

export async function addNewSub(data: Prop, token: string) {
  const response = await request
    .post('/v1/addsub')
    .send({ ...data, token })
    .set('Authorization', `Bearer ${token}`)

  const subId = response.body.id

  return request
    .get(`/v1/addsub/${subId}`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      const sub = res.body
      return sub
    })
    .catch((err) => {
      console.error(err)
    })
}
