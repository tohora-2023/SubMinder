import { REQUEST_USER, RECEIVE_USER, FAILURE_USER } from '../actions/profiles'
import { UserInfoAction } from '../actions/profiles'
import { User } from '../../models/userProfile'

const initialState: UserState = {
  data: {} as User,
  error: null,
  isLoading: false,
}

type UserState = {
  data: User
  error: string | null
  isLoading: boolean
}

const userProfileReducer = (
  state = initialState,
  action: UserInfoAction
): UserState => {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        error: null,
        data: action.payload,
        isLoading: false,
      }
    case REQUEST_USER:
      return {
        error: null,
        data: {} as User,
        isLoading: true,
      }
    case FAILURE_USER:
      return {
        error: action.payload,
        data: {} as User,
        isLoading: false,
      }
    default:
      return state
  }
}
export default userProfileReducer
