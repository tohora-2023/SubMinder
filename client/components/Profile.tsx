require('dotenv').config()

export default function Profile() {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  return (
    <>
      <div>Profile</div>
    </>
  )
}
