import request from 'superagent'

import { User } from '../../models/userProfile'

export function getUserInfo(userName: string): Promise<User> {
  return request.get(`/api/v1/users/${userName}`).then((res) => {
    return res.body
  })
}