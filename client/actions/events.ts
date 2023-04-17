import { Dispatch } from 'redux'
import { Events } from '../../models/events'
import { ThunkAction } from '../store'
import { getEvents } from '../apis/events'

export const SET_EVENTS_PENDING = 'SET_EVENTS_PENDING'
export const SET_EVENTS_SUCESS = 'SET_EVENTS_SUCESS'
export const SET_ERROR = 'SET_ERROR'

export type EventsAction =
  | {
      type: typeof SET_EVENTS_PENDING
      payload: null
    }
  | {
      type: typeof SET_EVENTS_SUCESS
      payload: Events[]
    }
  | {
      type: typeof SET_ERROR
      payload: string
    }

export function setEventsPending(): EventsAction {
  return {
    type: SET_EVENTS_PENDING,
    payload: null,
  }
}

export function setEventsSuccess(events: Events[]): EventsAction {
  return {
    type: SET_EVENTS_SUCESS,
    payload: events,
  }
}

export function setError(errorMessage: string): EventsAction {
  return {
    type: SET_ERROR,
    payload: errorMessage,
  }
}

export function fetchEvents(token: string): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setEventsPending())
    return getEvents(token)
      .then((events) => {
        dispatch(setEventsSuccess(events))
        console.log(events)
      })
      .catch((error: Error) => {
        dispatch(setError(error.message))
      })
    // based on my comments in apis/events
    // this code will never run because the api function will "catch" the error, log it, and return undefined
    // instead of throwing
  }
}
