import express from 'express'
import checkJwt, { JwtRequest } from '../auth0'
import { Response } from 'express'
import sendReminderEmail from '../lib'

const router = express.Router()

router.get('/', checkJwt, async (req: JwtRequest, res: Response) => {
  const auth0Id = req.auth?.sub
  if (auth0Id) {
    const email = req.body.email
    sendReminderEmail(email)
    res.json()
  }
})

export default router
