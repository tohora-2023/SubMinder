import { useEffect } from 'react'
import LogIn from './Login'
import { useAuth0 } from '@auth0/auth0-react'
import Nav from './Nav'
import addLogInInfo from '../apis/login'
import Home from './Home'
import ManageSubscription from './ManageSubscriptions'
import { Routes, Route } from 'react-router-dom'

function App() {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()
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

  return (
    <>
      {isAuthenticated ? (
        //please add stuff here
        <>
          <Nav />
          <div className="mt-8 flex flex-col items-center justify-center">
            <Routes>
              <Route path='/' element={<Home/>} />
              {/* <Route path='/paymenthistory' element={<PaymentHistory/>} /> */}
              <Route
                path="/managesubscriptions"
                element={<ManageSubscription />}
              />
              {/* <Route
                path="/addsubscription"
                element={<AddSubscription />} */}

              {/* <Route
                path="/profile"
                // element={<Profile />}
              /> */}
            </Routes>
          </div>
        </>
      ) : (
        <LogIn />
      )}
    </>
  )
}

export default App
