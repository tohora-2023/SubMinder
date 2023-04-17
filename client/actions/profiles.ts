import type { ThunkAction } from '../store'
import { getUserInfo } from '../apis/profile'
import { User } from '../../models/userProfile'

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const FAILURE_USER = 'FAILURE_USER'

export type UserInfoAction = 
| { type: typeof REQUEST_USER}
| {type: typeof RECEIVE_USER; payload: User}
| {type: typeof FAILURE_USER; payload: string}

export function requestUser(): UserInfoAction{
  return {
    type: REQUEST_USER
  }
}

export function receiveUser(user: User): UserInfoAction {
  return {
    type: RECEIVE_USER,
    payload: user
  }
}

export function failureUser(errorMessage: string): UserInfoAction{
  return {
    type: FAILURE_USER,
    payload: errorMessage
  }
}