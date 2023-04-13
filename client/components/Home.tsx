import Calendar from '@toast-ui/react-calendar'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import PieChart from './PieChart'
import '../../node_modules/tui-date-picker/dist/tui-date-picker'
import '../../node_modules/tui-time-picker/dist/tui-time-picker'
import SubChart from './SubChart'

export default function Home() {
  const [currentView, setView] = useState('month')
  const [currentDate, setCurrentDate] = useState(new Date())

  const data = [
    {
      id: 1,
      userId: 1,
      userAuthId: '1',
      name: 'metLink',
      image: '',
      frequency: 'week',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Travel',
      website: 'www.metlink.co.nz',
      price: 5.0,
    },
    {
      id: 2,
      userId: 1,
      userAuthId: '1',
      name: 'Events',
      image: '',
      frequency: 'fortnight',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Entertainment',
      website: 'www.events.co.nz',
      price: 50.55,
    },
    {
      id: 3,
      userId: 2,
      userAuthId: '2',
      name: 'OfficeMax',
      image: '',
      frequency: 'week',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Productivity',
      website: 'www.officemax.co.nz',
      price: 10.0,
    },
    {
      id: 4,
      userId: 2,
      userAuthId: '2',
      name: 'myFoodBag',
      image: '',
      frequency: 'month',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Food & Drink',
      website: 'www.myfoodbag.co.nz',
      price: 150.0,
    },
    {
      id: 5,
      userId: 3,
      userAuthId: '4',
      name: 'Countdown',
      image: '',
      frequency: 'week',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Necessities',
      website: 'www.countdown.co.nz',
      price: 150.0,
    },
    {
      id: 6,
      userId: 3,
      userAuthId: '4',
      name: 'Contact',
      image: '',
      frequency: 'fortnight',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Bills',
      website: 'www.contact.co.nz',
      price: 300.0,
    },
  ]

  const calendars = [
    {
      id: 'cal1',
      name: 'Month',
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
    time(event: any) {
      const { title, body } = event
      return `<div> <span style="color: black;">${title}: <span style="font-weight: 400">$${body}</span></span></div>`
    },
  }

  const [initialEvents, setInitialEvents] = useState(
    data.map((data) => {
      return {
        id: data.id,
        calendarId: 1,
        title: data.name,
        body: `${data.price}`,
        start: data.endDate,
        end: data.endDate,
        category: 'time',
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

  const thisMonths = data.filter((item) => {
    const endDate = new Date(item.endDate)
    return endDate.getMonth() === currentMonth
  })

  //getting food total
  const food = data.filter((item) => {
    return item.category === 'Food & Drink'
  })
  const foodTotal = food.reduce((acc, cur) => acc + cur.price, 0)

  //entertainment
  const entertainment = data.filter((item) => {
    return item.category === 'Entertainment'
  })
  const entertainmentTotal = entertainment.reduce(
    (acc, cur) => acc + cur.price,
    0
  )

  //necessities
  const necessities = data.filter((item) => {
    return item.category === 'Necessities'
  })
  const necessitiesTotal = necessities.reduce((acc, cur) => acc + cur.price, 0)

  //bills
  const bills = data.filter((item) => {
    return item.category === 'Bills'
  })
  const billsTotal = bills.reduce((acc, cur) => acc + cur.price, 0)

  //productivity
  const productivity = data.filter((item) => {
    return item.category === 'Productivity'
  })
  const productivityTotal = productivity.reduce(
    (acc, cur) => acc + cur.price,
    0
  )

  //travel
  const travel = data.filter((item) => {
    return item.category === 'Travel'
  })
  const travelTotal = travel.reduce((acc, cur) => acc + cur.price, 0)

  //total
  const totalPrice = thisMonths.reduce((acc, cur) => acc + cur.price, 0)

  function handleClick(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value
    setView(value)
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
            <Calendar
              height="800px"
              view={currentView}
              events={initialEvents}
              calendars={calendars}
              template={template}
            />
          </div>
        </div>
        <div>
          <PieChart
            food={foodTotal}
            entertainment={entertainmentTotal}
            necessities={necessitiesTotal}
            bills={billsTotal}
            productivity={productivityTotal}
            travel={travelTotal}
          />
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
