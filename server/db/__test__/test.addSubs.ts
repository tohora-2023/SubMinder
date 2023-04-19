import connection from '../connection'
import { addSubs, getSubById } from '../addSubs'

const mockSubscription = {
  name: 'Test Subscription',
  image: 'image.png',
  frequency: 'monthly',
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-12-31'),
  category: 'Test Category',
  website: 'https://test.com',
  price: 12,
  reminder: true,
}

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

afterAll(() => {
  return connection.destroy()
})
const mockUserAuthId = 'user123'

describe('add subscription', () => {
  it('test for addSubs and checks if  it adds a new subscription to the database. it also check getSubById, if it gets the right subscription', async () => {
    expect.assertions(11)
    const db = connection

    const newSubId = await addSubs(mockSubscription, mockUserAuthId, db)

    const fetchedSub = await getSubById(newSubId, db)

    // Assert
    expect(fetchedSub.id).toEqual(newSubId)
    expect(fetchedSub.name).toEqual(mockSubscription.name)
    expect(fetchedSub.image).toEqual(mockSubscription.image)
    expect(fetchedSub.frequency).toEqual(mockSubscription.frequency)
    expect(fetchedSub.startDate).toEqual(mockSubscription.startDate)
    expect(fetchedSub.endDate).toEqual(mockSubscription.endDate)
    expect(fetchedSub.category).toEqual(mockSubscription.category)
    expect(fetchedSub.website).toEqual(mockSubscription.website)
    expect(fetchedSub.price).toEqual(mockSubscription.price)
    expect(fetchedSub.userAuthId).toEqual(mockUserAuthId)
    expect(fetchedSub.reminder).toEqual(mockSubscription.reminder)
  })
})
