import Calendar from '@toast-ui/react-calendar'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import PieChart from './PieChart'
import '../../node_modules/tui-date-picker/dist/tui-date-picker'
import '../../node_modules/tui-time-picker/dist/tui-time-picker'
import SubChart from './SubChart'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchEvents } from '../actions/events'

interface HomeProps {
  isAuthComplete: boolean
}

interface CalendarData {
  id: number
  calendarId: number
  title: string
  body: string
  start: string
  end: string
  category: string
  backgroundColor: string
  isAllDay: boolean
}

export default function Home({ isAuthComplete }: HomeProps) {
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

  const [currentView, setView] = useState('month')
  const [currentDate, setCurrentDate] = useState(new Date())

  //CALENDER SET UP
  const calendars = [
    {
      id: 'cal1',
      name: 'Month',
      useCreationPopup: false,
      useDetailPopup: {
        showTimezoneCollapseButton: false,
      },
    },
  ]
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const template = {
    allday(event: any) {
      const { title, body } = event
      return `<div> <span style="color: white;">${title}: <span style="font-weight: 400">$${body}</span></span></div>`
    },
  }

  const [initialEvents, setInitialEvents] = useState([] as CalendarData[])
  useEffect(() => {
    if (isAuthComplete) {
      setInitialEvents(
        data.map((data) => {
          return {
            id: data.id,
            calendarId: 1,
            title: data.name,
            body: `${data.price}`,
            start: data.scheduleDate,
            end: data.scheduleDate,
            category: 'allday',
            color: 'white',
            backgroundColor:
              data.category === 'Travel'
                ? '#5DC6FF'
                : data.category === 'Productivity'
                ? '#C269D6'
                : data.category === 'Bills'
                ? '#FF0000'
                : data.category === 'Necessities'
                ? '#FFC400'
                : data.category === 'Entertainment'
                ? '#06B300'
                : '#0011FF',
            isAllDay: true,
          }
        })
      )
    }
  }, [isAuthComplete, data])

  const thisMonths = data.filter((item) => {
    const endDate = new Date(item.scheduleDate)
    return endDate.getMonth() === currentMonth
  })

  //getting food total
  const food = data.filter((item) => {
    const endDate = new Date(item.scheduleDate)
    return (
      item.category === 'Food & Drink' && endDate.getMonth() === currentMonth
    )
  })
  const foodTotal = food.reduce((acc, cur) => acc + cur.price, 0)

  //entertainment
  const entertainment = data.filter((item) => {
    const endDate = new Date(item.scheduleDate)
    return (
      item.category === 'Entertainment' && endDate.getMonth() === currentMonth
    )
  })
  const entertainmentTotal = entertainment.reduce(
    (acc, cur) => acc + cur.price,
    0
  )

  //necessities
  const necessities = data.filter((item) => {
    const endDate = new Date(item.scheduleDate)
    return (
      item.category === 'Necessities' && endDate.getMonth() === currentMonth
    )
  })
  const necessitiesTotal = necessities.reduce((acc, cur) => acc + cur.price, 0)

  //bills
  const bills = data.filter((item) => {
    const endDate = new Date(item.scheduleDate)
    return item.category === 'Bills' && endDate.getMonth() === currentMonth
  })
  const billsTotal = bills.reduce((acc, cur) => acc + cur.price, 0)

  //productivity
  const productivity = data.filter((item) => {
    const endDate = new Date(item.scheduleDate)
    return (
      item.category === 'Productivity' && endDate.getMonth() === currentMonth
    )
  })
  const productivityTotal = productivity.reduce(
    (acc, cur) => acc + cur.price,
    0
  )

  //travel
  const travel = data.filter((item) => {
    const endDate = new Date(item.scheduleDate)
    return item.category === 'Travel' && endDate.getMonth() === currentMonth
  })
  const travelTotal = travel.reduce((acc, cur) => acc + cur.price, 0)

  //total
  const totalPrice = thisMonths.reduce((acc, cur) => acc + cur.price, 0)

  function handleClick(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value
    setView(value)
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  console.log(travelTotal)
  return (
    <>
      <h2 className="mb-10 text-center text-5xl text-subminder-purple">{`${months[currentMonth]} ${currentYear}`}</h2>
      <div
        className="ml-auto mr-auto flex justify-center"
        style={{ width: '80%' }}
      >
        <div className="ml-auto mr-auto w-1/2">
          <div>
            <select
              className="appearance-none rounded border border-accent-yellow bg-white px-4 py-2 pr-8 text-center leading-tight focus:outline-none"
              onChange={handleClick}
            >
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="day">Day</option>
            </select>
          </div>
          <div className="p-100px">
            {isAuthComplete ? (
              <Calendar
                height="800px"
                view={currentView}
                events={initialEvents}
                calendars={calendars}
                template={template}
              />
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
        <div>
          {isAuthComplete ? (
            <PieChart
              food={300}
              entertainment={50}
              necessities={100}
              bills={300}
              productivity={10}
              travel={10}
            />
          ) : (
            <p>loading</p>
          )}

          <div>
            <SubChart
              total={totalPrice | 0}
              food={foodTotal | 0}
              entertainment={entertainmentTotal | 0}
              necessities={necessitiesTotal | 0}
              bills={billsTotal | 0}
              productivity={productivityTotal | 0}
              travel={travelTotal | 0}
            />
          </div>
        </div>
      </div>
    </>
  )
}
