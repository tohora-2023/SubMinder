import { Dispatch } from 'redux'
import { Events } from '../../models/events'
import { ThunkAction } from '../store'
import { UpdateEmail, getEvents } from '../apis/events'

export const SET_EVENTS_PENDING = 'SET_EVENTS_PENDING'
export const SET_EVENTS_SUCESS = 'SET_EVENTS_SUCESS'
export const SET_EVENTS_UPDATE = 'SET_EVENTS_UPDATE'
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
    |{
      type: typeof SET_EVENTS_UPDATE 
      payload:Events[]
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

export function setEventUpdate(events: Events[]):EventsAction{
  return{
    type: SET_EVENTS_UPDATE,
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
      })
      .catch((error: Error) => {
        dispatch(setError(error.message))
      })
  }
}

// function thunkUpdateEmail (dueDate.id, true, token)
// calls api function UpdateEmail(dueDate.id, true, token)
// dispatches simple action to change state.events.data[?].emailSend == true

export function fetchEmailStatus(
  id: number,
  isEmailSent: boolean,
  token: string
): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setEventsPending())
    return UpdateEmail(id, isEmailSent, token)
      .then((events) => {
        dispatch(setEventsSuccess(events))
      })
      .catch((error: Error) => {
        dispatch(setError(error.message))
      })
  }
}
