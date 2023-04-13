function Nav() {
  return (
    <>
      <nav className=" flex flex w-full items-center justify-center bg-purple-900 py-2 px-4 sm:flex-row sm:justify-between sm:text-left">
        <div className="mb-2 sm:mb-0 ">
          <a
            href="/"
            className="hover:text-blue-dark text-2xl text-white no-underline"
          >
            <img
              className="h-20 w-20"
              src="/images/subminder-logo.png"
              alt="home"
            ></img>
          </a>
        </div>
        <div>
          <a
            href="/paymenthistory"
            className="hover:text-blue-dark mr-10 ml-10 text-lg  text-white no-underline"
          >
            Payment History
          </a>
          <a
            href="/managesubscriptions"
            className="hover:text-blue-dark mr-10 ml-10 text-lg  text-white no-underline"
          >
            Manage Subscriptions
          </a>
          <a
            href="/addsubscription"
            className="hover:text-blue-dark mr-10 ml-10 text-lg  text-white no-underline"
          >
            Add Subscription
          </a>
          <a
            href="/profile"
            className="hover:text-blue-dark mr-10 ml-10 text-lg text-white no-underline"
          >
            Profile
          </a>
          <a
            href="/profile"
            className="hover:text-blue-dark mr-10 ml-10 text-lg text-white no-underline"
          >
            Sign Out
          </a>
        </div>
      </nav>
    </>
  )
}

export default Nav
