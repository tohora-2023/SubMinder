import { useState } from 'react'
import { useAppSelector } from '../hooks'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate, useParams } from 'react-router-dom'
import { Subscription } from '../../models/subscription'
import { editSub } from '../actions/subscriptions'

export default function EditSubs() {
  const { data, loading, error } = useAppSelector(
    (state) => state.subscriptions
  )

  const { subId } = useParams()

  const subscription = data.find((sub) => sub.id === Number(subId))

  const [name, setName] = useState(subscription ? subscription.name : '')
  const [category, setCategory] = useState(
    subscription ? subscription.category : ''
  )
  const [website, setWebsite] = useState(
    subscription ? subscription.website : ''
  )
  const [price, setPrice] = useState(subscription ? subscription.price : 0)

  const { getAccessTokenSilently } = useAuth0()

  const navigate = useNavigate()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (price === 0) {
      return alert('Price must be greater than 0')
    }

    const editedSub: Subscription = {
      id: Number(subId),
      name: name,
      category: category,
      price: price,
      userAuthId: subscription?.userAuthId || '',
      frequency: subscription?.frequency || '',
      scheduleDate: subscription?.scheduleDate || '',
      endDate: subscription?.endDate || '',
      isLastDate: subscription?.isLastDate || false,
      website: subscription?.website || '',
    }
    const token = await getAccessTokenSilently()

    editSub(Number(subId), editedSub, token)

    navigate('/managesubscription')
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  return (
    <div className="main-page-container">
      <h1 className="left-align  py-2 text-2xl font-bold text-subminder-indigo">
        Edit a Subscription
      </h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Service Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="focus:ring-primary block w-full border-gray-400 px-4 py-2 leading-5 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2"
          required
        />
        <br />
        <label htmlFor="category">Category: </label>
        <select
          id="category"
          name="category"
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          <option
            value="food & drink"
            selected={category.toLowerCase() === 'food & drink'}
          >
            Food & Drink
          </option>
          <option
            value="entertainment"
            selected={category.toLowerCase() === 'entertainment'}
          >
            Entertainment
          </option>
          <option
            value="necessities"
            selected={category.toLowerCase() === 'necessities'}
          >
            Necessities
          </option>
          <option value="bills" selected={category.toLowerCase() === 'bills'}>
            Bills
          </option>
          <option
            value="productivity"
            selected={category.toLowerCase() === 'productivity'}
          >
            Productivity
          </option>
          <option value="travel" selected={category.toLowerCase() === 'travel'}>
            Travel
          </option>
        </select>
        <br />
        <label htmlFor="website">Website: </label>
        <input
          type="text"
          id="website"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="focus:ring-primary block w-full border-gray-400 px-4 py-2 leading-5 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2"
        />
        <br />
        <label htmlFor="price">Price </label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="focus:ring-primary block w-full border-gray-400 px-4 py-2 leading-5 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2"
          required
        />
        <br />
        <button
          type="submit"
          className="hover:accent-yellow focus:ring-primary ml-auto border border-subminder-purple px-4 py-2 font-medium text-subminder-purple"
        >
          Submit subscription
        </button>
      </form>
    </div>
  )
}
