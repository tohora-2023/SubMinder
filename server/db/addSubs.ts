import connection from './connection'

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

export async function addSubs(
  { name,image, frequency, startDate, endDate, category, website, price }: Prop,
  userAuthId: string,
  db = connection
) {
  await db('subscriptions')
    .insert({
      name,
      image,
      frequency,
      startDate,
      endDate,
      category,
      website,
      price,
      userAuthId,
    })
    .returning('*')
}
