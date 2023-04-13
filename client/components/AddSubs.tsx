import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'

export default function AddSubs() {
  const [serviceName, setServiceName] = useState('')
  const [frequency, setFrequency] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [category, setCategory] = useState('')
  const [website, setWebsite] = useState('')
  const [price, setPrice] = useState(0)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div>
      ____________________________________________
      <h1>Add a Subscription</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="serviceName">Service Name:</label>
        <input
          type="text"
          id="serviceName"
          name="serviceName"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />
        <br />
        <label htmlFor="frequency">Frequency </label>
        <input
          type="text"
          id="frequency"
          name="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        />
        <br />
        <label htmlFor="startDate">Start Date </label>
        <input
          type="text"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <br />
        <label htmlFor="endDate">End Date </label>
        <input
          type="text"
          id="endDate"
          name="startDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <br />
        <label htmlFor="category">Category: </label>
        <input
          type="text"
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <br />
        <label htmlFor="website">Website: </label>
        <input
          type="text"
          id="website"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <br />
        <label htmlFor="price">Price </label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <button type="submit">Submit subscription</button>

        {/* <input type="submit" /> */}
      </form>
    </div>
  )
}
