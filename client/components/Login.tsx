import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { redirect } from 'react-router-dom'

export default function LogIn() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignIn = () => {
    loginWithRedirect()
  }
  function handleKeyDownLogin(e: React.KeyboardEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (e.code == 'Enter') {
      loginWithRedirect()
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
