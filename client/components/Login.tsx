import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function LogIn() {
  const { loginWithRedirect } = useAuth0()

  const handleSignIn = async () => {
    loginWithRedirect()
  }
  function handleKeyDownLogin(e: React.KeyboardEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (e.code == 'Enter') {
      handleSignIn()
    }
  }
  return (
    <div className="flex h-screen items-center justify-between">
      <div className="h-100 ml-auto mr-auto">
        <img src="./img/subminder-logo.png" alt="subminder-logo" />
      </div>
      <div
        className="flex h-screen w-1/2 flex-col bg-cover text-center font-mono font-bold text-white "
        style={{
          backgroundImage: 'url(./img/hero2.jpg)',
        }}
      >
        <div className="h-300 ml-auto mr-auto mt-auto mb-auto w-2/3">
          <h3 className="text-3xl font-bold ">
            Get SubMinder, the ultimate subscription wingman!
          </h3>
          <p className="mt-5 mb-5 text-xl">
            Keep tabs on all your subscriptions and free trials, track renewal
            and cancellation dates with the built-in calendar, and set up
            payment and trial end reminders.
          </p>
          <p className="mb-5 text-xl">
            Join now and become the master of your subscription universe!
          </p>
          <button
            type="button"
            onClick={handleSignIn}
            onKeyDown={handleKeyDownLogin}
            tabIndex={0}
            className="rounded-lg border-2 border-accent-yellow bg-accent-yellow pt-2 pb-2 pl-5 pr-5 font-sans text-xl hover:border-2 hover:border-accent-yellow hover:bg-transparent hover:text-accent-yellow"
          >
            log in
          </button>
        </div>
      </div>
    </div>
  )
}
