import request from 'superagent'
import { Subscription } from '../../models/subscription'

export function getSubscriptions(token: string): Promise<Subscription[]> {
  return request
    .get('/v1/subscriptions')
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      const response = res.body
      if (!response) return []

      const subscriptions = response.map((subscription: Subscription) => {
        // Format fields for display
        subscription.name = subscription.name?.toUpperCase() ?? ''
        subscription.category = subscription.category?.toLowerCase() ?? ''
        subscription.frequency = subscription.frequency?.toLowerCase() ?? ''

        // Format the date to 1 May
        const date = new Date(subscription.scheduleDate)
        subscription.scheduleDate = date.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
        })

        return subscription
      })

      return subscriptions
    })
    .catch(() => 'There was an error getting subscriptions')
}
