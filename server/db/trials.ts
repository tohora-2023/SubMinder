import connection from './connection'

interface Prop {
  name?: string
  scheduleDate?: Date
  category?: string
  website?: string
}

interface Trials {
  id: number
  name: string
  scheduleDate: Date
  category: string
  website?: string
}

export async function addTrial(
  { name, scheduleDate, category, website }: Prop,
  auth0Id: string,
  db = connection
) {
  const [newTrial] = await db('freeTrials')
    .insert({
      name,
      scheduleDate,
      category,
      website,
      auth0Id,
    })
    .returning('*')
  return newTrial.id
}

export async function getTrialById(
  id: number,
  db = connection
): Promise<Trials> {
  const [trialById] = await db('freeTrials').where('id', id).select()

  return trialById
}

export function getAllTrials(db = connection) {
  return db('freeTrials').select()
}
