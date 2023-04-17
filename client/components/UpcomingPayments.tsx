interface MonthsPaymentsArray {
  data: {
    name: string
    price: number
    isLastDate?: number | boolean | undefined
    scheduleDate: string
    category?: string
  }
}

export default function UpcomingPayments({ data }: MonthsPaymentsArray) {
  return (
    <div
      className=" rounded-xl bg-gradient-to-br from-sky-100 via-white to-sky-100 p-6"
      style={{ width: '400px' }}
    >
      <div
        className="mb-3 flex justify-between text-xs"
        style={{ height: '20px' }}
      >
        {data.category === 'Food & Drink' ? (
          <span className="material-symbols-outlined text-food">
            restaurant
          </span>
        ) : data.category === 'Entertainment' ? (
          <span className="material-symbols-outlined text-entertainment">
            live_tv
          </span>
        ) : data.category === 'Necessities' ? (
          <span className="material-symbols-outlined text-necessities">
            vaccines
          </span>
        ) : data.category === 'Bills' ? (
          <span className="material-symbols-outlined text-bills">
            credit_card
          </span>
        ) : data.category === 'Productivity' ? (
          <span className="material-symbols-outlined text-productivity">
            work
          </span>
        ) : data.category === 'Travel' ? (
          <span className="material-symbols-outlined text-travel">
            directions_bus
          </span>
        ) : (
          ''
        )}
        {data.isLastDate ? (
          <div className="flex items-center justify-center rounded-xl bg-orange-600 px-2 py-1">
            <p className="text-pink-100">Last payment</p>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="p4 flex justify-between">
        <h3 className="font-bold text-subminder-indigo">{data.name}</h3>
        <p className="text-slate-600">${data.price}</p>
      </div>
    </div>
  )
}
