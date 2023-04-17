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
        <p className="mb-5">{user.userName}</p>
        <p className="mb-5">{user.firstName}</p>
        <p className="mb-5">{user.lastName}</p>
      </div>
    </>
  )
}
