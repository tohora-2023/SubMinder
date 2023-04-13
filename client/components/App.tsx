import { useEffect } from 'react'
import LogIn from './Login'
import { useAuth0 } from '@auth0/auth0-react'
import addLogInInfo from '../apis/login'
import Home from './Home'
import ManageSubscription from './ManageSubscriptions'

function App() {
  const { isAuthenticated, logout, user, getAccessTokenSilently } = useAuth0()
  interface UserLogInProp {
    firstName?: string
    lastName?: string
    userName?: string
    image?: string
  }

  const handleAddLogInInfo = async (token: string) => {
    const userInfo: UserLogInProp = {
      firstName: user?.given_name,
      lastName: user?.family_name,
      userName: user?.nickname,
      image: user?.picture,
    }
    console.log(userInfo)
    console.log(user)
    await addLogInInfo(userInfo, token)
  }
  useEffect(() => {
    const handleLogIn = async () => {
      try {
        const token = await getAccessTokenSilently()
        await handleAddLogInInfo(token)
      } catch (error) {
        console.error(error)
      }
    }
    if (isAuthenticated) {
      handleLogIn()
    }
  }, [getAccessTokenSilently, isAuthenticated])

  const handleSignOut = () => {
    logout()
  }

  return (
    <>
      {isAuthenticated ? (
        //please add stuff here
        <div className="mt-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Fullstack Boilerplate</h1>
          <button type="button" onClick={handleSignOut}>
            sign out
          </button>
          <Home />
        </div>
      ) : (
        <LogIn />
      )}
    </>
  )
}

export default App
