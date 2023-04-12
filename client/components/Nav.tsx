function Nav() {
  const user = {
    username: 'ida',
  }

  return (
    <>
      <nav className="flex w-full flex-col bg-white py-4 px-6 text-center shadow sm:flex-row sm:items-baseline sm:justify-between sm:text-left">
        <div className="mb-2 sm:mb-0">
          <a
            href="/"
            className="text-grey-darkest hover:text-blue-dark text-2xl no-underline"
          >
            Home
          </a>
        </div>
        <div>
          <a
            href="/paymenthistory"
            className="text-grey-darkest hover:text-blue-dark ml-2 text-lg no-underline"
          >
            Payment History
          </a>
          <a
            href="/managesubscriptions"
            className="text-grey-darkest hover:text-blue-dark ml-2 text-lg no-underline"
          >
            Manage Subscriptions
          </a>
          <a
            href="/addsubscription"
            className="text-grey-darkest hover:text-blue-dark ml-2 text-lg no-underline"
          >
            Add Subscription
          </a>
          <a
            href="/profile"
            className="text-grey-darkest hover:text-blue-dark ml-2 text-lg no-underline"
          >
            Profile
          </a>
        </div>
      </nav>
    </>
  )
}

export default Nav
