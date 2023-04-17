import express from 'express'
import checkJwt, { JwtRequest } from '../auth0'
import { Response } from 'express'
import { addEvent, getEvents } from '../db/events'

const router = express.Router()

// a minor thing, but notice how one route returns [{}, {}, {}] (an array of objects) and the other returns { events: [{}, {}, {}] }
// pick one you like and roll with it everywhere
// I prefer { events: [] } for explicitness, but it's up to you!
router.post(
  '/:subscriptionId',
  checkJwt,
  async (req: JwtRequest, res: Response) => {
    const auth0Id = req.auth?.sub
    if (auth0Id) {
      const subscriptionId = Number(req.params.subscriptionId)
      const { scheduleDate, isLastDate } = req.body
      const newEvents = await addEvent(
        subscriptionId,
        { scheduleDate, isLastDate },
        auth0Id
      )
      res.json(newEvents)
    }
  }
)
router.get('/', checkJwt, async (req: JwtRequest, res: Response) => {
  const auth0Id = req.auth?.sub
  if (auth0Id) {
    const events = await getEvents()
    res.json({ events })
  }
})

export default router
