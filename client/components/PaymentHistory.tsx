import { HomeProps } from './Home'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchEvents } from '../actions/events'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
// typecript complains about this and @react-pdf/renderer
// do they have @types/ packages?
import { Chart } from 'react-google-charts'
import PieChart from './PieChart'
import SubChart from './SubChart'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDF from './PDF'

export interface TableData {}

export default function PaymentHistory({ isAuthComplete }: HomeProps) {
  const [spread, setSpread] = useState('All Time')
  const [start, setStart] = useState(new Date())
  const [end, setEnd] = useState(new Date())
  const [tableData, setTableData] = useState([] as TableData[])

  //--------------------------------Auth0 setup & data fetching------------------------
  // if you feel hook logic is getting complex and you have the urge to segregate it like this (with the ----)
  // perhaps you might like to think about extracting custom hooks
  // this could be useUser() for example or useUserEvents()
  const { getAccessTokenSilently, user } = useAuth0()
  // console.log go brrr
  console.log(user)
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
  const [initialEvents, setInitialEvents] = useState([] as TableData[])

  useEffect(() => {
    if (isAuthComplete && data) {
      let prevDate = ''
      const filteredData = data.filter((d) => {
        const date = new Date(d.scheduleDate)
        return spread === 'All Time' || spread === 'specific'
          ? date <= start
          : date <= start && date >= end
      })
      setTableData(
        filteredData.sort(
          (a, b) =>
            new Date(b.scheduleDate).getTime() -
            new Date(a.scheduleDate).getTime()
        )
      )
      setInitialEvents(
        filteredData.map((d) => {
          const date = new Date(d.scheduleDate)
          const formattedDate = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
          const showDate = d.scheduleDate !== prevDate
          prevDate = d.scheduleDate
          return [
            showDate ? formattedDate : '',
            d.name,
            d.category,
            { v: d.price, f: `$${d.price}` },
            d.isLastDate ? true : false,
          ]
        })
      )
    }
  }, [isAuthComplete, data, start, end, spread])

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
      const date = new Date(item.scheduleDate)
      return spread === 'All Time' || spread === 'specific'
        ? item.category === category && date <= start
        : item.category === category && date <= start && date >= end
    })

    const total = filteredData.reduce((acc, cur) => acc + cur.price, 0)

    categoryTotals[category] = total
  })

  const thisMonths = data.filter((item) => {
    const date = new Date(item.scheduleDate)
    return spread === 'All Time' || spread === 'specific'
      ? date <= start
      : date <= start && date >= end
  })

  const totalPrice = thisMonths.reduce((acc, cur) => acc + cur.price, 0)
  //---------------------------------The return----------------------------------------------

  function handleClick(
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLInputElement>
  ) {
    setSpread(event.currentTarget.value)
    const endDate = new Date(start)
    if (event.currentTarget.value === '6 months') {
      endDate.setMonth(endDate.getMonth() - 6)
      setEnd(endDate)
    } else if (event.currentTarget.value === 'Year') {
      endDate.setMonth(endDate.getMonth() - 12)
      setEnd(endDate)
    } else if (event.currentTarget.value === '3 months') {
      endDate.setMonth(endDate.getMonth() - 3)
      setEnd(endDate)
    } else if (event.currentTarget.value === '1 month') {
      endDate.setMonth(endDate.getMonth() - 1)
      setEnd(endDate)
    } else {
      setEnd(new Date())
      setStart(new Date())
    }
  }

  function handleStart(event: React.ChangeEvent<HTMLInputElement>) {
    const date = new Date(event.target.value)
    setStart(date)
    setSpread('start-end')
  }

  function handleEnd(event: React.ChangeEvent<HTMLInputElement>) {
    const date = new Date(event.target.value)
    setEnd(date)
    setSpread('start-end')
  }

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }
  return (
    <div>
      <PDFDownloadLink
        document={
          <PDF
            start={start}
            end={end}
            initialEvents={tableData}
            user={user?.nickname}
          />
        }
        fileName="subminder-payments.pdf"
      >
        {/* Add a type annotation to this: { loading, error }: { loading: boolean, error: boolean } to make TS happy */}
        {({ loading, error }) =>
          loading
            ? 'Loading document...'
            : error
            ? 'There was an error'
            : 'Download PDF'
        }
      </PDFDownloadLink>

      <h2 className="mb-10 text-center text-5xl text-subminder-purple">
        Payment History
      </h2>
      {Object.keys(initialEvents).length !== 0 ? (
        <div></div>
      ) : (
        <>
          <p className="text-center text-red-600">
            Sorry, you don`t have any payments for these dates
          </p>
          <p className="text-center">Please choose a different date range</p>
        </>
      )}
      {/* Big ternary operators can be difficult to follow, you might like to extract these two pieces of UI into their own components (in this file is fine) for legibility */}
      {isAuthComplete ? (
        <div>
          <div>
            {spread === 'specific' || spread === 'start-end' ? (
              <div>
                <div className="m-10 flex justify-center">
                  <div className="ml-5 rounded-xl border-2 border-subminder-purple px-5 py-3 text-subminder-purple">
                    <label htmlFor="end">From: </label>
                    <input
                      type="date"
                      id="end"
                      className="text-subminder-indigo"
                      onChange={handleEnd}
                    />
                  </div>
                  <div className="ml-5 rounded-xl border-2 border-subminder-purple px-5 py-3 text-subminder-purple">
                    <label htmlFor="start">To: </label>
                    <input
                      type="date"
                      id="start"
                      className="text-subminder-indigo"
                      onChange={handleStart}
                    />
                  </div>
                </div>
                <label htmlFor="general-date">Choose a date spread</label>
                <input
                  type="radio"
                  name="specific-date"
                  id="general-date"
                  value="All Time"
                  onClick={handleClick}
                />
              </div>
            ) : (
              <>
                <div className="m-10 flex justify-center">
                  <button
                    onClick={handleClick}
                    value="All Time"
                    className={
                      spread === 'All Time'
                        ? 'mr-5 rounded-xl border-2 border-subminder-purple bg-subminder-purple px-5 py-3 text-white'
                        : 'mr-5 rounded-xl border-2 border-subminder-purple bg-white px-5 py-3 text-subminder-purple'
                    }
                  >
                    All Time
                  </button>
                  <button
                    onClick={handleClick}
                    value="Year"
                    className={
                      spread === 'Year'
                        ? ' mr-5 rounded-xl border-2 border-subminder-purple bg-subminder-purple px-5 py-3 text-white'
                        : ' mr-5 rounded-xl border-2 border-subminder-purple bg-white px-5 py-3 text-subminder-purple'
                    }
                  >
                    Year
                  </button>
                  <button
                    onClick={handleClick}
                    value="6 months"
                    className={
                      spread === '6 months'
                        ? ' mr-5 rounded-xl border-2 border-subminder-purple bg-subminder-purple px-5 py-3 text-white'
                        : ' mr-5 rounded-xl border-2 border-subminder-purple bg-white px-5 py-3 text-subminder-purple'
                    }
                  >
                    6 months
                  </button>
                  <button
                    onClick={handleClick}
                    value="3 months"
                    className={
                      spread === '3 months'
                        ? ' mr-5 rounded-xl border-2 border-subminder-purple bg-subminder-purple px-5 py-3 text-white'
                        : ' mr-5 rounded-xl border-2 border-subminder-purple bg-white px-5 py-3 text-subminder-purple'
                    }
                  >
                    3 months
                  </button>
                  <button
                    onClick={handleClick}
                    value="1 month"
                    className={
                      spread === '1 month'
                        ? ' mr-5 rounded-xl border-2 border-subminder-purple bg-subminder-purple px-5 py-3 text-white'
                        : ' mr-5 rounded-xl border-2 border-subminder-purple bg-white px-5 py-3 text-subminder-purple'
                    }
                  >
                    1 month
                  </button>
                </div>
                <div>
                  <label htmlFor="specific-date">Choose a specific date</label>
                  <input
                    type="radio"
                    name="specific-date"
                    id="specific-date"
                    onClick={handleClick}
                    value="specific"
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex">
            <Chart
              chartType="Table"
              options={options}
              data={[
                ['Date', 'Name', 'Category', 'Price', 'Last payment?'],
                ...initialEvents,
              ]}
              height="100%"
            />

            <div>
              <PieChart
                food={categoryTotals[`Food & Drink`]}
                entertainment={categoryTotals['Entertainment']}
                necessities={categoryTotals['Necessities']}
                bills={categoryTotals['Bills']}
                productivity={categoryTotals['Productivity']}
                travel={categoryTotals['Travel']}
              />
              <div className="ml-10">
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
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  )
}
