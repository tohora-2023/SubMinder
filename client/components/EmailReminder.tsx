import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { fetchEvents } from '../actions/events'
import { Events } from '../../models/events'
import { useAppDispatch, useAppSelector } from '../hooks'
import { sendEmailReminder } from '../apis/reminder'

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

  useEffect(() => {
    const reminder = async (data: Events[], reminderThreshold: number) => {
      if (user?.email == undefined) {
        return
      }

      const currentTime = new Date().getTime()
      for (const dueDate of data) {
        const paymentDate = new Date(dueDate.scheduleDate).getTime()
        if (dueDate.reminder && dueDate.auth0Id === user.sub) {
          console.log(`i got called when i checked for ${dueDate.name}`)
          const rminderTime = paymentDate - currentTime

          if (rminderTime < reminderThreshold) {
            const token = await getAccessTokenSilently()
            await sendEmailReminder(user.email, dueDate.name, token)
          }
        }
      }
    }

    if (data) {
      if (user?.email == undefined) {
        return
      }
      for (const sub of data) {
        if (sub.reminder && sub.auth0Id === user.sub) {
          reminder(data, 1)
        }
      }
    }
  }, [getAccessTokenSilently, user?.email])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  return <div>Enable email reminder</div>
}
