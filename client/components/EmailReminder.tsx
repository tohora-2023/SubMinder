import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { fetchEvents } from '../actions/events'
import { Events } from '../../models/events'
import { useAppDispatch, useAppSelector } from '../hooks'
import { sendEmailReminder } from '../apis/reminder'
import { UpdateEmail } from '../apis/events'

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
    const reminder = async (dueDate: Events, reminderThreshold: number) => {
      if (user?.email == undefined) {
        return
      }

      const currentTime = new Date().getTime()

      const paymentDate = new Date(dueDate.scheduleDate).getTime()

      if (dueDate.reminder && dueDate.auth0Id === user.sub) {
        // console.log(`i got called when i checked for ${dueDate.name}`)
        // console.log(`i got called when i checked for ${dueDate.scheduleDate}`)
        const rminderTime = paymentDate - currentTime

        if (rminderTime < reminderThreshold) {
          const token = await getAccessTokenSilently()

          await UpdateEmail(dueDate.id, true, token)

          setTimeout(async () => {
            if (!dueDate.isEmailSent) {
              if (user?.email == undefined) {
                return
              }
              await sendEmailReminder(
                user.email,
                dueDate.name,
                dueDate.scheduleDate,
                token
              )

              await UpdateEmail(dueDate.id, true, token)
            }
          }, 50000)
          // if (dueDate.isEmailSent) {
          //   return
          // }
          // await sendEmailReminder(
          //   user.email,
          //   dueDate.name,
          //   dueDate.scheduleDate,
          //   token
          // )
          // dueDate.isEmailSent = true
          // await UpdateEmail(dueDate.id, true, token)
        }
      }
    }

    if (data) {
      if (user?.email == undefined) {
        return
      }
      for (const sub of data) {
        if (sub.reminder && sub.auth0Id === user.sub) {
          // if (sub.isEmailSent) {
          //   return
          // }

          // console.log(sub)
          reminder(sub, 1)
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
