import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-br from-subminder-nude  to-subminder-purple p-10 text-subminder-indigo">
        <div className="flex justify-around">
          <div style={{ maxWidth: '300px' }}>
            <div className="align-center flex ">
              <img
                src="./img/subminder-logo.png"
                alt=""
                style={{ height: '50px' }}
              />
              <h1 className="font-bold">Subminder</h1>
            </div>
            <p>
              Keep tabs on all your subscriptions and free trials, track renewal
              and cancellation dates with the built-in calendar, and set up
              payment and trial end reminders.
            </p>
          </div>
          <div>
            <p className="mb-3 font-bold">
              <span className="material-symbols-outlined">info</span>
              About
            </p>
            <div className="mb-3 flex">
              <span className="material-symbols-outlined">location_on</span>
              <p>
                Level 5/12 Morgan Street <br /> Newmarket <br /> Auckland 1023
              </p>
            </div>
            <div className="mb-3 flex">
              <span className="material-symbols-outlined">call</span>
              <p>hello@devacademy.co.nz</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="mb-3 font-bold">
              <span className="material-symbols-outlined ">feed</span>
              Useful Links
            </p>
            <Link to={'/'} className="mb-3">
              home
            </Link>
            <Link to={'/paymenthistory'} className="mb-3">
              payment history
            </Link>
            <Link to={'/managesubscriptions'} className="mb-3">
              manage subscriptions
            </Link>
            <Link to={'/addsubscription'} className="mb-3">
              add subscription
            </Link>
            <Link to={'/profile'} className="mb-3">
              profile
            </Link>
          </div>
          <div>
            <p className="mb-3 font-bold">
              <span className="material-symbols-outlined">
                sports_martial_arts
              </span>
              Our Devs
            </p>
            <p className="mb-3">Roisin</p>
            <p className="mb-3">Keri</p>
            <p className="mb-3">Joe</p>
            <p className="mb-3">Shiraz</p>
            <p className="mb-3">Ahmad</p>
            <p className="mb-3">Jamie</p>
          </div>
        </div>

        <div>
          <p className="text-subminder-nude">subminder ©2023</p>
        </div>
      </footer>
    </div>
  )
}
