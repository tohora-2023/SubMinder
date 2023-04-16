import { useAuth0 } from '@auth0/auth0-react'

require('dotenv').config()
import { MailService } from '@sendgrid/mail'

export default function Email() {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()

  const msg = {
    to: user?.email,
    from: 'subminder0@gmail.com',
    subject: 'Reminder: You have a payment due today',
    text: 'You have a payment due today. pleae make sure you to check Your subscription, and make sure you want to commit to the payment.',
    html: '<p>You have a payment due today. pleae make sure you to check Your subscription, and make sure you want to commit to the payment.</p>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error: MailService) => {
      console.error(error)
    })

  return (
    <>
      <div>SetUp Email Reminder</div>
    </>
  )
}
