import { combineReducers } from 'redux'

import subscriptionsReducer from './subscriptionsReducer'
import EventsReducer from './eventsReducer'
import TrialsReducer from './trialsReducer'

export default combineReducers({
  subscriptions: subscriptionsReducer,
  events: EventsReducer,
  trials: TrialsReducer,
})
