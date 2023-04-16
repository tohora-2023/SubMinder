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
    const reminder = async (data: Events[], reminderThreshold: number) => {
      const currentTime = new Date().getTime()
      for (const dueDate of data) {
        const paymentDate = new Date(dueDate.scheduleDate).getTime()
        const rminderTime = paymentDate - currentTime

        if (rminderTime < reminderThreshold) {
          sendReminderEmail(user?.email)
        }
      }
    }

    fetchData()
    if (data) {
      for (const sub of data) {
        if (sub.reminder) {
          reminder(data, 2)
        }
      }
    }
  }, [dispatch, getAccessTokenSilently, data, user?.email])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  return <div>Enable email reminder</div>
}
