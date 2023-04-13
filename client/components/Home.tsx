import Calendar from '@toast-ui/react-calendar'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import PieChart from './PieChart'

export default function Home() {
  const data = [
    {
      id: 1,
      userId: 1,
      userAuthId: '1',
      name: 'Name1',
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
      name: 'Name2',
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
      name: 'Name3',
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
      name: 'Name4',
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
      name: 'Name5',
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
      name: 'Name6',
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
      useCreationPopup: false,
      useDetailPopup: {
        showTimezoneCollapseButton: false,
      },
    },
  ]

  const monthOptions = {
    scheduleView: false,
  }
  const currentDate = new Date()
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
    time(event) {
      return `<div> <span style="color: black;">${event.title}</span></div>`
    },
  }

  const [initialEvents, setInitialEvents] = useState(
    data.map((data) => {
      return {
        id: data.id,
        calendarId: 1,
        title: data.website,
        start: '2023-04-13',
        end: '2023-04-13',
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
      }
    })
  )

  const thisMonths = data.filter((item) => {
    const endDate = new Date(item.endDate)
    console.log(endDate.getMonth())
    return endDate.getMonth() === currentMonth
  })
  const pieData = [
    ['Food & Drink', 'Hours per Day'],
    ['Food & Drink', 10],
    ['Entertainment', 11],
    ['Necessities', 2],
    ['Bills', 2],
    ['Productivity', 2],
    ['Travel', 7],
  ]

  const totalPrice = thisMonths.reduce((acc, cum) => acc + cum.price, 0)
  return (
    <>
      <h2 className="mb-10 text-center text-5xl text-subminder-purple">{`${months[currentMonth]} ${currentYear}`}</h2>
      <div
        className="ml-auto mr-auto flex justify-center"
        style={{ width: '80%' }}
      >
        <div className="ml-auto mr-auto w-1/2">
          <div className="p-100px rounded-lg border-2 border-subminder-nude">
            <Calendar
              height="800px"
              view="month"
              events={initialEvents}
              calendars={calendars}
              template={template}
            />
          </div>
        </div>
        <div>
          <PieChart data={pieData} />
          <div>
            <h3>Totals for the month:</h3>
            <p>$ {totalPrice}</p>
          </div>
        </div>
      </div>
    </>
  )
}
