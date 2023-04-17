import { combineReducers } from 'redux'

import subscriptionsReducer from './subscriptionsReducer'
import EventsReducer from './eventsReducer'
import userProfileReducer from './profileReducer'

export default combineReducers({
  subscriptions: subscriptionsReducer,
  events: EventsReducer,
  user: userProfileReducer,
})
