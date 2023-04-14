import { combineReducers } from 'redux'

import subscriptionsReducer from './subscriptionsReducer'
import EventsReducer from './eventsReducer'

export default combineReducers({
  subscriptions: subscriptionsReducer,
  events: EventsReducer,
})
