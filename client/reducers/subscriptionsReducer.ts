import {
  SET_SUB_PENDING,
  SET_SUB_SUCCESS,
  SET_ERROR,
} from '../actions/subscriptions'
import { SubscriptionAction } from '../actions/subscriptions'
import * as Models from '../../models/subscription'

export interface SubscriptionState {
  loading: boolean
  error: string | undefined
  data: Models.Subscription[]
}

const initialState: SubscriptionState = {
  loading: false,
  error: undefined,
  data: [
    {
      id: 1,
      userAuthId: '1',
      userId: 1,
      name: 'netflix',
      category: 'Entertainment',
      scheduleDate: '10 May',
      isLastDate: true,
      price: 14.0,
      frequency: 'weekly',
      image: '',
      website: 'https://www.netflix.com',
      endDate: '',
    },
    {
      id: 2,
      userAuthId: '1',
      userId: 1,
      name: 'vodafone',
      category: 'bills',
      scheduleDate: '25 May',
      isLastDate: false,
      price: 150.0,
      frequency: 'fortnightly',
      image: '',
      website: 'https://www.vodafone.co.nz',
      endDate: '',
    },
    {
      id: 3,
      userAuthId: '1',
      userId: 1,
      name: 'my food bag',
      category: 'food & drink',
      scheduleDate: '1 July',
      isLastDate: false,
      price: 120.0,
      frequency: 'weekly',
      image: '',
      website: 'https://www.myfoodbag.co.nz',
      endDate: '',
    },
    {
      id: 4,
      userAuthId: '1',
      userId: 1,
      name: 'metlink',
      category: 'travel',
      scheduleDate: '30 May',
      isLastDate: false,
      price: 160.0,
      frequency: 'monthly',
      image: '',
      website: 'https://www.metlink.org.nz',
      endDate: '',
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
