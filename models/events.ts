// I have a feeling this type should be singular instead of plural, forgive me if I'm wrong!

export interface Events {
  category: string
  created_at?: string
  id: number
  isLastDate?: boolean | number
  name: string
  price: number
  scheduleDate: string
  subscriptionId: number
  updated_at: string
}
