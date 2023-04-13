import express from 'express'
import checkJwt, { JwtRequest } from '../auth0'
import { Response } from 'express'
import { getEvents } from '../db/events'

const router = express.Router()

export default router

router.get('/events', checkJwt, async (req: JwtRequest, res: Response) => {
  const auth0Id = req.auth?.sub
  if (auth0Id) {
    const events = await getEvents()
    res.json(events)
  }
})
