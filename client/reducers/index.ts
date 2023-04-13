import { combineReducers } from 'redux'

import subscriptionsReducer from './subscriptionsReducer'

export default combineReducers({
  subscriptions: subscriptionsReducer,
})
