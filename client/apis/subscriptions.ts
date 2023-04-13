import request from 'superagent'
import { Subscription } from '../../models/subscription'

export function getSubscriptions() {
  return request.get('/v1/subscriptions').then((res) => {
    return res.body.subscriptions
  })
}
