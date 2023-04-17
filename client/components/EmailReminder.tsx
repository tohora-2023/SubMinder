import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { fetchEmailStatus, fetchEvents } from '../actions/events'
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

          // await UpdateEmail(dueDate.id, true, token)

          // setTimeout(async () => {
          //   if (!dueDate.isEmailSent) {
          //     if (user?.email == undefined) {
          //       return
          //     }
          //     await sendEmailReminder(
          //       user.email,
          //       dueDate.name,
          //       dueDate.scheduleDate,
          //       token
          //     )

          //     await UpdateEmail(dueDate.id, true, token)
          //   }
          // }, 10000)
          console.log('here')

          if (dueDate.isEmailSent) {
            return
          }
          console.log('dueDate', dueDate)

          await sendEmailReminder(
            user.email,
            dueDate.name,
            dueDate.scheduleDate,
            token
          )
          dueDate.isEmailSent = true
          // dispatch(thunkUpdateEmail(dueDate.id, true, token))
          dispatch(fetchEmailStatus(dueDate.id, true, token))
          // await UpdateEmail(dueDate.id, true, token)
        }
      }
    }
    console.log('data', data)
    if (data) {
      if (user?.email == undefined) {
        return
      }
      for (const sub of data) {
        if (sub.reminder && sub.auth0Id === user.sub) {
          // if (sub.isEmailSent) {
          //   console.log('sub.isEmailSent', sub.isEmailSent)
          //   return
          // }
          console.log(sub)
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
