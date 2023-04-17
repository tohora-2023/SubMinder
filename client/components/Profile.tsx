import { fetchUserInfo } from '../actions/profiles'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Profile() {
  const { data: user, error, isLoading } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const { userName } = useParams()

  useEffect(() => {
    if (userName) {
      dispatch(fetchUserInfo(userName))
    }
  }, [dispatch, userName])

  if (isLoading) return <>Loading...</>
  if (error) return <>An error occurred</>
  if (!user) return <> User not found</>

  return (
    <>
      <div className="flex-col justify-center text-center">
        <button className="mb-5 mr-2 mt-5 rounded bg-blue-500 px-4 py-2 hover:bg-red-700">
          View All Posts by User
        </button>
        <p className="mb-5">{user.userName}</p>
        <p className="mb-5">{user.firstName}</p>
        <p className="mb-5">{user.lastName}</p>
        <button className="mb-5 self-center rounded bg-blue-500 px-4 py-2 hover:bg-red-700">
          Edit Profile
        </button>
      </div>
    </>
  )
}
