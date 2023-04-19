import { Dispatch } from 'redux'
import { ThunkAction } from '../store'
import { addNewTrial, getAllTrials } from '../apis/trials'
import { Trials } from '../../models/trials'

export const SET_TRIALS_PENDING = 'SET_TRIALS_PENDING'
export const SET_TRIALS_SUCESS = 'SET_TRIALS_SUCESS'
export const SET_ERROR = 'SET_ERROR'
export const ADD_TRIALS_SUCESS = 'ADD_TRIALS_SUCCESS'

interface AddTrials {
  name: string
  website: string
  category: string
  scheduleDate: string
}

export type TrialsAction =
  | {
      type: typeof SET_TRIALS_PENDING
      payload: null
    }
  | {
      type: typeof SET_TRIALS_SUCESS
      payload: Trials[]
    }
  | {
      type: typeof SET_ERROR
      payload: string
    }
  | {
      type: typeof ADD_TRIALS_SUCESS
      payload: AddTrials
    }

export function setTrialsPending(): TrialsAction {
  return {
    type: SET_TRIALS_PENDING,
    payload: null,
  }
}

export function setTrialsSuccess(trials: Trials[]): TrialsAction {
  return {
    type: SET_TRIALS_SUCESS,
    payload: trials,
  }
}

export function setError(errorMessage: string): TrialsAction {
  return {
    type: SET_ERROR,
    payload: errorMessage,
  }
}

export function addTrialSucess(trial: AddTrials): TrialsAction {
  return {
    type: ADD_TRIALS_SUCESS,
    payload: trial,
  }
}

export function fetchTrials(token: string): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setTrialsPending())
    return getAllTrials(token)
      .then((trials) => {
        dispatch(setTrialsSuccess(trials))
      })
      .catch((error: Error) => {
        dispatch(setError(error.message))
      })
  }
}

export function addTrial(trial: AddTrials, token: string): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch(setTrialsPending())
    return addNewTrial(trial, token)
      .then((trial) => {
        dispatch(addTrialSucess(trial))
      })
      .catch((error: Error) => {
        dispatch(setError(error.message))
      })
  }
}
