import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import {
  fetchEmailStatus,
  fetchEvents,
  fetchSendRequest,
} from '../actions/events'
import { Events } from '../../models/events'
import { useAppDispatch, useAppSelector } from '../hooks'
import { sendEmailReminder } from '../apis/reminder'
import { UpdateEmail } from '../apis/events'

export default function Email() {
  const dispatch = useAppDispatch()
  const { user, getAccessTokenSilently } = useAuth0()
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
    const reminder = async (dueDate: Events, reminderThreshold: number) => {
      if (user?.email == undefined) {
        return
      }

      const currentTime = new Date().getTime()

      const paymentDate = new Date(dueDate.scheduleDate).getTime()

      if (dueDate.reminder && dueDate.auth0Id === user.sub) {
        const rminderTime = paymentDate - currentTime

        if (rminderTime < reminderThreshold) {
          const token = await getAccessTokenSilently()
          if (dueDate.isEmailSent) {
            return
          }
          dispatch(
            fetchSendRequest(
              user.email,
              dueDate.name,
              dueDate.scheduleDate,
              token
            )
          )
          dispatch(fetchEmailStatus(dueDate.id, true, token))
        }
      }
    }
    if (data) {
      if (user?.email == undefined) {
        return
      }
      for (const sub of data) {
        if (sub.reminder && sub.auth0Id === user.sub) {
          reminder(sub, 1)
        }
      }
    }
  }, [getAccessTokenSilently, user?.email, user?.sub])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>There was an error</p>
  }

  return <div>Enable email reminder</div>
}
