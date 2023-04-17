export interface Events {
  category: string
  created_at?: string
  id: number
  SubId?: number
  auth0Id?:string
  isEmailSent?:boolean
  reminder?: boolean | number
  isLastDate?: boolean | number
  name: string
  price: number
  scheduleDate: string
  subscriptionId: number
  updated_at: string
}
