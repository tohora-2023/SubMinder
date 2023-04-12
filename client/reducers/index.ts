import { combineReducers } from 'redux'

import fruits from './fruits'
import subscriptionsReducer from './subscriptionsReducer'

export default combineReducers({
  fruits,
  subscriptions: subscriptionsReducer,
})
