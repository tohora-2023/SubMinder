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
    <div
      className=" rounded-xl bg-gradient-to-br from-slate-200 via-white to-sky-100 p-6"
      style={{ width: '400px' }}
    >
      <div
        className="mb-3 flex justify-between text-xs"
        style={{ height: '20px' }}
      >
        <p className="text-slate-600">{structuredDate}</p>
        {data.isLastDate ? (
          <div className="flex justify-center rounded-xl bg-pink-600 p-1">
            <p className="text-pink-100">Last payment</p>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="p4 flex justify-between">
        <a
          href={data?.website}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-subminder-indigo"
        >
          {data.name}
        </a>
        <h2 className="text-slate-600">${data.price}</h2>
      </div>
    </div>
  )
}
