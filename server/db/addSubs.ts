import connection from './connection'

interface Prop {
  name?: string
  image?: string
  frequency?: string
  startDate?: Date
  endDate?: Date
  category?: string
  website?: string
  price?: number
}

// these functions can probably live in subscriptions.ts
export async function addSubs(
  {
    name,
    image,
    frequency,
    startDate,
    endDate,
    category,
    website,
    price,
  }: Prop,
  userAuthId: string,
  db = connection
) {
  const [newSub] = await db('subscriptions')
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
  return newSub.id
}

interface Subscription {
  id: number
  frequency: string
  startDate: Date
  endDate: Date
}

export async function getSubById(
  id: number,
  db = connection
): Promise<Subscription> {
  const [subById] = await db('subscriptions')
    .where('id', id)
    .select('id', 'frequency', 'startDate', 'endDate')

  return subById
}
