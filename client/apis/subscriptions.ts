import request from 'superagent'
import { Subscription } from '../../models/subscription'

export function getSubscriptions(token: string): Promise<Subscription[]> {
  return request
    .get('/v1/subscriptions')
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      console.log(res)
      return res.body
    })
}
