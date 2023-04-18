import { useState } from 'react'

export default function AddFree() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [website, setWebsite] = useState('')

  return (
    <div className="main-page-container">
      <h1 className="left-align  py-2 text-2xl font-bold text-subminder-indigo">
        Add a Subscription
      </h1>
      <form>
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

        <label htmlFor="endDate">End Date </label>
        <input
          type="date"
          id="endDate"
          name="startDate"
          className="focus:ring-primary block w-full border-gray-400 px-4 py-2 leading-5 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-2"
          required
        />
        <br />
        <label htmlFor="category">Category: </label>
        <select
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Food & Drink">Food & Drink</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Necessities">Necessities</option>
          <option value="Bills">Bills</option>
          <option value="Productivity">Productivity</option>
          <option value="Travel">Travel</option>
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
