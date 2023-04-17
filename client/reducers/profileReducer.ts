import {REQUEST_USER, RECEIVE_USER, FAILURE_USER} from '../actions/profiles'
import {UserInfoaction} from '../actions/profiles'
import * as Models from '../../models/userProfile'
import {User} from '../../models/userProfile'

const initialState: UserState = {
data: null,
error: null,
isLoading: false
}

type UserState = {
  data: User | null
  error: string | null
  isLoading: boolean
}

const userProfileReducer = (
  state = initialState,
  action: UserInfoaction
): UserState => {
  switch (action.type){
    case RECEIVE_USER:
      return{
        error: null
        data: action.payload,
        isLoading: false
      }
      case REQUEST_USER:
        return{
          error: null
          data: null
          isLoading: true
          }
      case FAILURE_USER:
        return {
          error: action.payload,
          data: null,
          isLoading: false
        }
        default:
          return state

  }
}
export default userProfileReducer