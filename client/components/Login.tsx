import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import addLogInInfo from '../apis/login'

interface UserLogInProp {
  firstName?: string
  lastName?: string
  userName?: string
  image?: string
}

export default function LogIn() {
  const { loginWithRedirect, getAccessTokenSilently } = useAuth0()

  const handleSignIn = async () => {
    const token = await getAccessTokenSilently()
    const userInfo: UserLogInProp = {}
    await addLogInInfo(userInfo, token)
    loginWithRedirect()
  }
  function handleKeyDownLogin(e: React.KeyboardEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (e.code == 'Enter') {
      handleSignIn()
    }
  }
  return (
    <div>
      {' '}
      <button
        type="button"
        onClick={handleSignIn}
        onKeyDown={handleKeyDownLogin}
        tabIndex={0}
      >
        log in
      </button>
    </div>
  )
}
