interface MonthsPaymentsArray {
  data: {
    name: string
    price: number
    website: string
    isLastDate: boolean
    scheduleDate: number
  }
}

export default function UpcomingPayments({ data }: MonthsPaymentsArray) {
  const date = new Date(data.scheduleDate)
  const structuredDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="border-2 border-black p-6" style={{ width: '400px' }}>
      <div className="flex justify-between" style={{ height: '20px' }}>
        <p>{structuredDate}</p>
        {data.isLastDate ? <h2>Last date</h2> : ''}
      </div>
      <div className="p4 flex justify-between">
        <a
          href={data?.website}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-subminder-purple hover:text-accent-yellow"
        >
          {data.name}
        </a>
        <h2>${data.price}</h2>
      </div>
    </div>
  )
}
