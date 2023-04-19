interface MonthsPaymentsArray {
  data: {
    name: string
    price?: number
    isLastDate?: number | boolean | undefined
    scheduleDate: string
    category?: string
  }
}

export default function PastPayments({ data }: MonthsPaymentsArray) {
  return (
    <div className=" rounded-xl bg-slate-200 p-6" style={{ width: '400px' }}>
      <div
        className="mb-3 flex justify-between text-xs"
        style={{ height: '20px' }}
      >
        {data.category === 'Food & Drink' ? (
          <span className="material-symbols-outlined text-slate-400">
            restaurant
          </span>
        ) : data.category === 'Entertainment' ? (
          <span className="material-symbols-outlined text-slate-400">
            live_tv
          </span>
        ) : data.category === 'Necessities' ? (
          <span className="material-symbols-outlined text-slate-400">
            vaccines
          </span>
        ) : data.category === 'Bills' ? (
          <span className="material-symbols-outlined text-slate-400">
            credit_card
          </span>
        ) : data.category === 'Productivity' ? (
          <span className="material-symbols-outlined text-slate-400">work</span>
        ) : data.category === 'Travel' ? (
          <span className="material-symbols-outlined text-slate-400">
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
        <h3 className="font-bold text-slate-400">{data.name}</h3>
        {data.price ? (
          <p className="text-slate-400">${data.price}</p>
        ) : (
          <div className="flex items-center justify-center rounded-xl bg-slate-400 px-2">
            <p className="text-xs text-slate-100">Free trial</p>
          </div>
        )}
      </div>
    </div>
  )
}
