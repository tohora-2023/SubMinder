import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const { logout } = useAuth0()
  const handleSignOut = () => {
    logout()
  }
  return (
    <>
      <nav className=" sm:flex-column flex w-full items-center justify-center bg-purple-900 px-4 py-2 sm:justify-between sm:text-left ">
        <div className="mb-2 sm:mb-0 ">
          <Link
            to={'/'}
            className="hover:text-blue-dark text-2xl text-white no-underline"
          >
            <img
              className="h-20 w-20"
              src="/images/subminder-logo.png"
              alt="home"
            ></img>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row">
          <Link
            to="/paymenthistory"
            className="hover:text-blue-dark ml-10 mr-10 text-lg  text-white no-underline"
          >
            Payment History
          </Link>
          <Link
            to="/managesubscriptions"
            className="hover:text-blue-dark ml-10 mr-10 text-lg  text-white no-underline"
          >
            Manage Subscriptions
          </Link>
          <Link
            to="/addsubscription"
            className="hover:text-blue-dark ml-10 mr-10 text-lg  text-white no-underline"
          >
            Add Subscription
          </Link>
          <Link
            to="/profile"
            className="hover:text-blue-dark ml-10 mr-10 text-lg text-white no-underline"
          >
            Profile
          </Link>
          <button
            className="hover:text-blue-dark ml-5 mr-10 text-lg text-white no-underline"
            type="button"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </nav>
    </>
  )
}

export default Nav
