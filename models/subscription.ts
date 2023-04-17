// is there a difference between this and that in subscriptions.ts?
// if possible, either give them different names that represent their purpose, or converge on one type
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
