import request from 'superagent'

import { User } from '../../models/userProfile'

export function getUserInfo(token: string): Promise<User> {
  return request
    .get(`/v1/profile`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      return res.body[0]
    })
}
