import Subscription from '../../models/subscriptions'
import { Dispatch } from 'redux'
import { ThunkAction } from '../store'

export const SET_SUB_PENDING = 'SET_SUB_PENDING'
export const SET_SUB_SUCCESS = 'SET_SUB_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export type SubscriptionAction =
  | { type: typeof SET_SUB_PENDING; payload: null }
  | { type: typeof SET_SUB_SUCCESS; payload: Subscription[] }
  | { type: typeof SET_ERROR; payload: string }

export function setTaskPending(): SubscriptionAction {
  return {
    type: SET_SUB_PENDING,
    payload: null,
  }
}

export function setTasksSuccess(
  subscriptions: Subscription[]
): SubscriptionAction {
  return {
    type: SET_SUB_SUCCESS,
    payload: subscriptions,
  }
}

export function setError(errorMessage: string): SubscriptionAction {
  return {
    type: SET_ERROR,
    payload: errorMessage,
  }
}
