import {
  SET_TRIALS_PENDING,
  SET_TRIALS_SUCESS,
  SET_ERROR,
  TrialsAction,
  ADD_TRIALS_SUCESS,
} from '../actions/trials'

import { Trials } from '../../models/trials'

export interface TrialState {
  loading: boolean
  error: string | undefined
  data: Trials[]
}

const initialState: TrialState = {
  loading: false,
  error: undefined,
  data: [],
}

const TrialsReducer = (
  state = initialState,
  action: TrialsAction
): TrialState => {
  switch (action.type) {
    case SET_TRIALS_PENDING:
      return {
        loading: true,
        error: undefined,
        data: [],
      }
    case SET_TRIALS_SUCESS:
      return {
        loading: false,
        error: undefined,
        data: action.payload,
      }
    case SET_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      }
    default:
      return state
  }
}
export default TrialsReducer
