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
      <div className="flex-col justify-center rounded-md border-8 border-gray-300 bg-purple-900 p-8 text-center">
        <img
          className="mx-auto mb-5 block h-36 w-36"
          src="./images/profile-image.png"
          alt="profileImage"
        />
        <p className="mb-5 text-white ">Username: {user.userName}</p>
        <p className="mb-5 text-white">First Name: {user.firstName}</p>
        <p className="mb-5 text-white">Last Name: {user.lastName}</p>
      </div>
    </>
  )
}
