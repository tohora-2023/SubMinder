import {
  SET_SUB_PENDING,
  SET_SUB_SUCCESS,
  SET_ERROR,
} from '../actions/subscriptions'
import { SubscriptionAction } from '../actions/subscriptions'
import Subscription from '../../models/subscriptions'

export interface SubscriptionState {
  loading: boolean
  error: string | undefined
  data: Subscription[]
}

const initialState: SubscriptionState = {
  loading: false,
  error: undefined,
  data: [
    {
      name: 'netflix',
      category: 'Entertainment',
      scheduleDate: '10 May',
      isLastDate: false,
      price: 14.00,
    },
    {
      name: 'vodafone',
      category: 'Bills',
      scheduleDate: '10 May',
      isLastDate: false,
      price: 100.00,
    },
    {
      name: 'my food bag',
      category: 'food & drink',
      scheduleDate: '10 May',
      isLastDate: false,
      price: 120.00,
    },
    {
      name: 'metlink',
      category: 'travel',
      scheduleDate: '10 May',
      isLastDate: false,
      price: 14.00,
    },
  ],
}

const subscriptionReducer = (
  state = initialState,
  action: SubscriptionAction
): SubscriptionState => {
  switch (action.type) {
    case SET_SUB_PENDING:
      return {
        loading: true,
        error: undefined,
        data: [],
      }
    case SET_SUB_SUCCESS:
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
export default subscriptionReducer
