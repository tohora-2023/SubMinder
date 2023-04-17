import { Subscription, SubscriptionUpdate } from '../../models/subscription'
import { Dispatch } from 'redux'
import { ThunkAction } from '../store'
import {
  getSubscriptions,
  deleteSubscription,
  editSubscription,
} from '../apis/subscriptions'

export const SET_SUB_PENDING = 'SET_SUB_PENDING'
export const SET_SUB_SUCCESS = 'SET_SUB_SUCCESS'
export const SET_ERROR = 'SET_ERROR'
export const SET_SUB_REMOVE = 'SET_SUB_REMOVE'
export const SET_SUB_EDIT = 'SET_SUB_EDIT'

export type SubscriptionAction =
  | { type: typeof SET_SUB_PENDING; payload: null }
  | { type: typeof SET_SUB_SUCCESS; payload: Subscription[] }
  | { type: typeof SET_ERROR; payload: string }
  | { type: typeof SET_SUB_REMOVE; payload: string }
  | { type: typeof SET_SUB_EDIT; payload: Subscription }

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

export function setSubEdit(updateSub: Subscription): SubscriptionAction {
  return {
    type: SET_SUB_EDIT,
    payload: updateSub,
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

export function editSub(
  id: number,
  update: SubscriptionUpdate,
  token: string
): ThunkAction {
  return (dispatch: Dispatch) => {
    return editSubscription(id, update, token)
      .then(() => {
        dispatch(
          setSubEdit({
            id: update.id,
            name: update.name,
            category: update.category,
            price: update.price,
            userAuthId: '',
            frequency: '',
            endDate: '',
            isLastDate: false,
            scheduleDate: '',
            website: '',
          })
        )
      })
      .catch((err) => dispatch(setError(err.message)))
  }
}
