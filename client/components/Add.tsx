import { useState } from 'react'
import AddSubs from './AddSubs'
import AddFree from './AddFree'

export default function Add() {
  const [form, setForm] = useState('paid')
  return (
    <>
      <div className="mb-10 flex justify-evenly" style={{ width: '100%' }}>
        <button
          className="rounded-xl border border-accent-yellow px-4 py-2 font-medium text-accent-yellow"
          onClick={() => setForm('paid')}
        >
          Add paid
        </button>
        <button
          className="rounded-xl border border-accent-yellow px-4 py-2 font-medium text-accent-yellow"
          onClick={() => setForm('free')}
        >
          Add free trial
        </button>
      </div>
      <div className="flex justify-center" style={{ width: '100%' }}>
        {form === 'paid' ? <AddSubs /> : <AddFree />}
      </div>
    </>
  )
}
