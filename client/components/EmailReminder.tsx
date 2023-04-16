import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { fetchEvents } from '../actions/events'
import { Events } from '../../models/events'
import { useAppDispatch, useAppSelector } from '../hooks'
import sendReminderEmail from '../helper/EmailHelper'

export default function Email() {
  const dispatch = useAppDispatch()
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()
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

  const reminder = async (
    data: Events[],
    token: string,
    reminderThreshold: number
  ) => {
    token = await getAccessTokenSilently()
    const currentTime = new Date().getTime()

    for (const dueDate of data) {
      const paymentDate = new Date(dueDate.scheduleDate).getTime()
      const rminderTime = paymentDate - currentTime

      if (rminderTime < reminderThreshold) {
        sendReminderEmail(user?.email)
      }
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  return (
    <>
      <div>SetUp Email Reminder</div>
    </>
  )
}
