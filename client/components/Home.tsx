import Calendar from '@toast-ui/react-calendar'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import PieChart from './PieChart'
import '../../node_modules/tui-date-picker/dist/tui-date-picker'
import '../../node_modules/tui-time-picker/dist/tui-time-picker'
import SubChart from './SubChart'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchEvents } from '../actions/events'

export interface HomeProps {
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

  //-----------Getting the totals-------------
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

  //-----------------------Changing the view----------------------------
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
              food={categoryTotals[`Food & Drink`]}
              entertainment={categoryTotals['Entertainment']}
              necessities={categoryTotals['Necessities']}
              bills={categoryTotals['Bills']}
              productivity={categoryTotals['Productivity']}
              travel={categoryTotals['Travel']}
            />
          ) : (
            <p>loading</p>
          )}

          <div>
            <SubChart
              total={totalPrice | 0}
              food={categoryTotals[`Food & Drink`] | 0}
              entertainment={categoryTotals['Entertainment'] | 0}
              necessities={categoryTotals['Necessities'] | 0}
              bills={categoryTotals['Bills'] | 0}
              productivity={categoryTotals['Productivity'] | 0}
              travel={categoryTotals['Travel'] | 0}
            />
          </div>
        </div>
      </div>
    </>
  )
}
