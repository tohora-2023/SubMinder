export interface Subscription {
  id: number
  userId: number
  userAuthId: string
  name: string
  image: string
  auth0Id?: string
  isEmailSent?: boolean
  reminder?: boolean
  frequency: string
  endDate: string
  isLastDate: boolean
  scheduleDate: string
  category: string
  website: string
  price: number
}
