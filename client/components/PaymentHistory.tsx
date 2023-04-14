import { Chart } from 'react-google-charts'
import { HomeProps } from './Home'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchEvents } from '../actions/events'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { CalendarData } from '@toast-ui/calendar/types/types/events'
import PieChart from './PieChart'

export default function paymentHistory({ isAuthComplete }: HomeProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  //--------------------------------Auth0 setup & data fetching------------------------
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useAppDispatch()
  const { loading, error, data } = useAppSelector((state) => state.events)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently()
        dispatch(fetchEvents(token))
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [dispatch, getAccessTokenSilently])

  //----------------------------------defining data-------------------------------------
  const [initialEvents, setInitialEvents] = useState([] as CalendarData[])
  useEffect(() => {
    if (isAuthComplete) {
      let prevDate = ''
      setInitialEvents(
        data.map((data) => {
          const date = new Date(data.scheduleDate)
          const formattedDate = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
          const showDate = data.scheduleDate !== prevDate
          prevDate = data.scheduleDate
          return [
            showDate ? formattedDate : '',
            data.name,
            data.category,
            { v: data.price, f: `$${data.price}` },
            data.isLastDate ? true : false,
          ]
        })
      )
    }
  }, [isAuthComplete, data])

  //---------------------------------Defining table options---------------------------------
  const options = {
    title: 'Your payment history',
    width: 800,
  }

  //---------------------------------Calculating the totals----------------------------------
  const categories = [
    'Food & Drink',
    'Entertainment',
    'Necessities',
    'Bills',
    'Productivity',
    'Travel',
  ]

  const categoryTotals: Record<string, number> = {
    'Food & Drink': 0,
    Entertainment: 0,
    Necessities: 0,
    Bills: 0,
    Productivity: 0,
    Travel: 0,
  }

  categories.forEach((category) => {
    const filteredData = data.filter((item) => {
      const endDate = new Date(item.scheduleDate)
      return item.category === category && endDate.getMonth() === currentMonth
    })

    const total = filteredData.reduce((acc, cur) => acc + cur.price, 0)

    categoryTotals[category] = total
  })

  const totalPrice = thisMonths.reduce((acc, cur) => acc + cur.price, 0)
  //---------------------------------The return----------------------------------------------
  return (
    <div>
      {isAuthComplete ? (
        <div>
          <Chart
            chartType="Table"
            options={options}
            data={[
              ['Date', 'Name', 'Category', 'Price', 'Last payment?'],
              ...initialEvents,
            ]}
            height="100%"
          />
          <PieChart />
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  )
}
