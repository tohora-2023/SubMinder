import { Events } from '../../models/events'
import {
  SET_EVENTS_PENDING,
  SET_ERROR,
  SET_EVENTS_SUCESS,
  EventsAction,
} from '../actions/events'

export interface EventsState {
  loading: boolean
  error: string | undefined
  data: Events[]
}

const initialState: EventsState = {
  loading: false,
  error: undefined,
  data: [],
}

const EventsReducer = (
  state = initialState,
  action: EventsAction
): EventsState => {
  switch (action.type) {
    case SET_EVENTS_PENDING:
      return {
        loading: true,
        error: undefined,
        data: [],
      }
    case SET_EVENTS_SUCESS:
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
export default EventsReducer
