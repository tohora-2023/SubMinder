import { useEffect, useState } from 'react'
import { useAppSelector } from '../hooks'
import { useAuth0 } from '@auth0/auth0-react'
import { addNewSub } from '../apis/addSubs'
import manageCalendarEvents from '../helper/CallenderEvents'
import { addNewCalanderDay } from '../apis/events'
import { useNavigate } from 'react-router-dom'

export default function AddSubs() {
  const [name, setName] = useState('')
  const [frequency, setFrequency] = useState('')
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [category, setCategory] = useState('')
  const [website, setWebsite] = useState('')
  const [price, setPrice] = useState(0)
  const [reminder, setReminder] = useState(false)
  const { getAccessTokenSilently } = useAuth0()
  const { loading, error } = useAppSelector((state) => state.subscriptions)
  const navigate = useNavigate()

  useEffect(() => {}, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (price === 0) {
      return alert('Price must be greater than 0')
    }

    const newSub = {
      name,
      frequency,
      startDate,
      endDate,
      category,
      website,
      price,
      reminder,
    }
    const token = await getAccessTokenSilently()
    const { id } = await addNewSub(newSub, token)
    const paymentDates = manageCalendarEvents(startDate, frequency, endDate)
    interface DayProp {
      scheduleDate?: string
      isLastDate?: boolean
      isEmailSent?: boolean
    }

    for (const day of paymentDates) {
      const scheduleDate = day.date
      const isLastDate = day === paymentDates[paymentDates.length - 1]
      const subscriptionId = id
      const dayForCallender: DayProp = {
        scheduleDate,
        isLastDate: false,
        isEmailSent: false,
      }
      if (isLastDate) {
        dayForCallender.isLastDate = true
      }

      await addNewCalanderDay(subscriptionId, dayForCallender, token)
    }

    navigate('/managesubscriptions')
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  return (
    <div className="main-page-container">
      <h1 className="left-align  py-2 text-2xl font-bold text-subminder-indigo">
        Add a Subscription
      </h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Service Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="focus:ring-primary block w-full border-gray-400 px-4 py-2 leading-5 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2"
          required
        />
        <br />
        <label htmlFor="frequency">Frequency </label>

        <select
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          required
        >
          <option value="">Select Frequency</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="fortnightly">Fortnightly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="semiannually">Semiannually</option>
          <option value="yearly">Yearly</option>
        </select>

        <br />
        <label htmlFor="startDate">Start Date </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={startDate.toISOString().slice(0, 10)}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="focus:ring-primary block w-full border-gray-400 px-4 py-2 leading-5 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2"
          required
        />

        <br />

        <label htmlFor="endDate">End Date </label>
        <input
          type="date"
          id="endDate"
          name="startDate"
          value={endDate.toISOString().slice(0, 10)}
          onChange={(e) => setEndDate(new Date(e.target.value))}
          className="focus:ring-primary block w-full border-gray-400 px-4 py-2 leading-5 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2"
          required
        />
        <br />
        <label htmlFor="category">Category: </label>
        <select
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Food & Drink">Food & Drink</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Necessities">Necessities</option>
          <option value="Bills">Bills</option>
          <option value="Productivity">Productivity</option>
          <option value="Travel">Travel</option>
        </select>

        <br />
        <label htmlFor="website">Website: </label>
        <input
          type="text"
          id="website"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="focus:ring-primary block w-full border-gray-400 px-4 py-2 leading-5 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2"
        />
        <br />
        <label htmlFor="price">Price </label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="focus:ring-primary block w-full border-gray-400 px-4 py-2 leading-5 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2"
          required
        />
        <br />

        <label htmlFor="reminder">
          <span className="ml-2 text-gray-700">Reminder </span>
          <input
            type="checkbox"
            checked={reminder}
            onChange={(e) => setReminder(e.target.checked)}
            className="form-checkbox text-primary h-5 w-5 transition duration-150 ease-in-out"
          />
        </label>
        <br />
        <br />

        <button
          type="submit"
          className="hover:accent-yellow focus:ring-primary ml-auto border border-subminder-purple px-4 py-2 font-medium text-subminder-purple"
        >
          Submit subscription
        </button>
      </form>
    </div>
  )
}
