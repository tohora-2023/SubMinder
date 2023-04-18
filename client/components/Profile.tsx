import { fetchUserInfo } from '../actions/profiles'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Profile() {
  const { data: user, error, isLoading } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(fetchUserInfo(token))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [dispatch, getAccessTokenSilently])

  if (isLoading) return <>Loading...</>
  if (error) return <>An error occurred</>
  if (!user) return <> User not found</>

  return (
    <>
      <div className="flex-col justify-center text-center">
        <img className="" src="" alt="profile image"/>
        <p className="mb-5">Username: {user.userName}</p>
        <p className="mb-5">First Name: {user.firstName}</p>
        <p className="mb-5">Last Name: {user.lastName}</p>
      </div>
    </>
  )
}
