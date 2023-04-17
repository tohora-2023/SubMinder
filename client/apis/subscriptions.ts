import request from 'superagent'
import { Subscription } from '../../models/subscription'

export async function getSubscriptions(token: string): Promise<Subscription[]> {
  try {
    const response = await request
      .get('/v1/subscriptions/list')
      .set('Authorization', `Bearer ${token}`)

    const subscriptions = response.body.map((subscription: Subscription) => {
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
  } catch (error) {
    console.log(error)
    return error.message
  }
}

export async function deleteSubscription(
  subId: string,
  token: string
): Promise<number> {
  try {
    const response = await request
      .delete('/v1/subscriptions/delete/' + subId)
      .set('Authorization', `Bearer ${token}`)
    return response.statusCode
  } catch (error) {
    console.log(error)
    return error.message
  }
}
