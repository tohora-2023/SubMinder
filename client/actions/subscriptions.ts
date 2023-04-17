import { Subscription } from '../../models/subscription'
import { Dispatch } from 'redux'
import { ThunkAction } from '../store'
import { getSubscriptions, deleteSubscription } from '../apis/subscriptions'
import { addNewSub } from '../apis/addSubs'

export const SET_SUB_PENDING = 'SET_SUB_PENDING'
export const SET_SUB_SUCCESS = 'SET_SUB_SUCCESS'
export const SET_ERROR = 'SET_ERROR'
export const SET_SUB_REMOVE = 'SET_SUB_REMOVE'

export type SubscriptionAction =
  | { type: typeof SET_SUB_PENDING; payload: null }
  | { type: typeof SET_SUB_SUCCESS; payload: Subscription[] }
  | { type: typeof SET_ERROR; payload: string }
  | { type: typeof SET_SUB_REMOVE; payload: string }

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

export function setSubsRemove(subId: string): SubscriptionAction {
  return {
    type: SET_SUB_REMOVE,
    payload: subId,
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

interface Prop {
  name?: string
  image?: string
  frequency?: string
  startDate?: Date
  endDate?: Date
  category?: string
  website?: string
  price?: number
}

export function fetchAddSubs(newSub: Prop, token: string): ThunkAction {
  return (dispatch: Dispatch) => {
    return deleteSubscription(subId, token)
      .then((subScriptions) => {
        console.log('Testing')
        console.log(subId)
        console.log(subscription)
        dispatch(setSubsRemove(subId))
      })
      .catch((error: Error) => {
        dispatch(setError(error.message))
      })
  }
}

export function removeSub(subId: string, token: string): ThunkAction {
  return (dispatch: Dispatch) => {
    return deleteSubscription(subId, token)
      .then(() => {
        dispatch(setSubsRemove(subId))
      })
      .catch((err) => {
        console.log(err)
        dispatch(setError(err.message))
      })
  }
}
