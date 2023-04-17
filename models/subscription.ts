export interface Subscription {
  id: number
  userId: number
  userAuthId: string
  name: string
  image: string
  frequency: string
  endDate: string
  isLastDate: boolean
  scheduleDate: string
  category: string
  website: string
  price: number
}

export interface SubscriptionUpdate {
  name: string
  category: string
  website: string
  price: number
}
