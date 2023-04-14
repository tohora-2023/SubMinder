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

export async function addNewSub(data: Prop, token: string) {
  try {
    const response = await request
      .post('/v1/addsub')
      .send({ ...data, token })
      .set('Authorization', `Bearer ${token}`)

    // console.log(response.body)

    const subId = response.body.id
    // console.log(subId)

    return request
      .get(`/v1/addsub/${subId}`)
      .set('Authorization', `Bearer ${token}`)
      .then((res) => {
        const sub = res.body
        // console.log(sub)
        return sub
      })
      .catch((err) => {
        console.error(err)
      })
  } catch (error) {
    console.error(error)
  }
}
