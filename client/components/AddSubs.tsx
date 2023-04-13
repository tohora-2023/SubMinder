import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchAddSubs } from '../actions/subscriptions'
import { useAuth0 } from '@auth0/auth0-react'

export default function AddSubs() {
  const [name, setName] = useState('')
  const [frequency, setFrequency] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [category, setCategory] = useState('')
  const [website, setWebsite] = useState('')
  const [price, setPrice] = useState(0)
  const dispatch = useAppDispatch()
  const { getAccessTokenSilently } = useAuth0()
  const { loading, error } = useAppSelector((state) => state.subscriptions)

  function clearForm() {
    setName('')
    setFrequency('')
    setStartDate('')
    setEndDate('')
    setCategory('')
    setWebsite('')
    setPrice(0)
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newSub = {
      name,
      frequency,
      startDate,
      endDate,
      category,
      website,
      price,
    }
    const token = await getAccessTokenSilently()
    dispatch(fetchAddSubs(newSub, token))
    clearForm()
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  return (
    <div>
      ____________________________________________
      <h1>Add a Subscription</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Service Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <br />

        <button type="submit">Submit subscription</button>

        {/* <input type="submit" /> */}
      </form>
    </div>
  )
}
