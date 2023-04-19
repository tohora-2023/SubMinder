import { getSubsList, getSubsWithDate } from '../subscriptions'

const knex = require('knex')
const config = require('../knexfile')
const testConnection = knex(config.test)

const { getAllSubs } = require('../subscriptions')

beforeAll(() => {
  return testConnection.migrate.latest()
})

beforeEach(() => {
  return testConnection.seed.run()
})

describe('getAllSubs', () => {
  it('should return all subscriptions', async () => {
    const subs = await getAllSubs()
    expect(subs).toHaveLength(12)
  })
})

describe('getSubsWithDate', () => {
  it('should return all subscriptions with dates', async () => {
    const subs = await getSubsWithDate()
    expect(subs).toHaveLength(28)
  })
})

describe('getSubsList', () => {
  it('should return a list of subscriptions', async () => {
    const subs = await getSubsList('')
    expect(subs).toHaveLength(0)
  })
})
