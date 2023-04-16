import { Subscription } from '../../models/subscription'
import { Dispatch } from 'redux'
import { ThunkAction } from '../store'
import { getSubscriptions, deleteSubscription } from '../apis/subscriptions'
import { User } from '@auth0/auth0-react'
export const SET_SUB_PENDING = 'SET_SUB_PENDING'
export const SET_SUB_SUCCESS = 'SET_SUB_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export type SubscriptionAction =
  | { type: typeof SET_SUB_PENDING; payload: null }
  | { type: typeof SET_SUB_SUCCESS; payload: Subscription[] }
  | { type: typeof SET_ERROR; payload: string }

export function setSubPending(): SubscriptionAction {
  return {
    type: SET_SUB_PENDING,
    payload: null,
  }
}

export function setSubsSuccess(
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

export function fetchSubscriptions(token: string): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setSubPending())
    return getSubscriptions(token)
      .then((subscriptions) => {
        dispatch(setSubsSuccess(subscriptions))
      })
      .catch((error: Error) => {
        dispatch(setError(error.message))
      })
  }
}

