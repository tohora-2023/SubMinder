import express from 'express'
import checkJwt, { JwtRequest } from '../auth0'
import { Response } from 'express'
import sendReminderEmail from '../lib'

const router = express.Router()

router.post('/', checkJwt, async (req: JwtRequest, res: Response) => {
  const auth0Id = req.auth?.sub
  console.log('here')
  if (auth0Id) {
    const { email, sub, date } = req.body
    sendReminderEmail(email, sub, date)
    res.sendStatus(200)
  }
})

export default router
