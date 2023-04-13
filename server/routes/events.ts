import express from 'express'
import checkJwt, { JwtRequest } from '../auth0'
import { Response } from 'express'
import { addEvent, getEvents } from '../db/events'

const router = express.Router()



router.get('/', checkJwt, async (req: JwtRequest, res: Response) => {
  const auth0Id = req.auth?.sub
  if (auth0Id) {
    const events = await getEvents()
    res.json(events)
  }
})

router.post(
  '/:subId',
  checkJwt,
  async (req: JwtRequest, res: Response) => {
    const auth0Id = req.auth?.sub
    if (auth0Id) {
      const subId = Number(req.params.subId)
      const { scheduleDate, isLastDate } = req.body
      const newEvents = await addEvent(subId, scheduleDate, isLastDate)
      res.json(newEvents)
    }
  }
)

export default router
