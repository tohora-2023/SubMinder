import { useEffect, useState } from 'react'
import LogIn from './Login'
import { useAuth0 } from '@auth0/auth0-react'
import Nav from './Nav'
import addLogInInfo from '../apis/login'
import Home from './Home'
import ManageSubscription from './ManageSubscriptions'
import { Routes, Route } from 'react-router-dom'
import PaymentHistory from './PaymentHistory'
import Footer from './Footer'
import Add from './Add'
import EditSubs from './EditSubs'

function App() {
  const [isAuthComplete, setIsAuthComplete] = useState(false)

  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()
  interface UserLogInProp {
    firstName?: string
    lastName?: string
    userName?: string
    image?: string
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleAddLogInInfo = async (token: string) => {
    const userInfo: UserLogInProp = {
      firstName: user?.given_name,
      lastName: user?.family_name,
      userName: user?.nickname,
      image: user?.picture,
    }
    await addLogInInfo(userInfo, token)
    setIsAuthComplete(true)
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
  }, [getAccessTokenSilently, handleAddLogInInfo, isAuthenticated])

  return (
    <>
      {isAuthenticated ? (
        <>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Home isAuthComplete={isAuthComplete} />}
            />
          </Routes>
          <div className="mt-8 flex flex-col items-center justify-center">
            <Routes>
              <Route path="/paymenthistory" element={<PaymentHistory />} />
              <Route
                path="/managesubscriptions"
                element={<ManageSubscription />}
              />
              <Route path="/addsubscription" element={<Add />} />
              <Route path="/editsubscription/:subId" element={<EditSubs />} />
              {/* <Route
                path="/profile"
                // element={<Profile />}
              /> */}
            </Routes>
          </div>
          <Footer />
        </>
      ) : (
        <LogIn />
      )}
    </>
  )
}
export default App
