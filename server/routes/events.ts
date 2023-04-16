import express from 'express'
import checkJwt, { JwtRequest } from '../auth0'
import { Response } from 'express'
import { addEvent, getEvents } from '../db/events'

const router = express.Router()

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
  try {
    const auth0Id = req.auth?.sub
    if (auth0Id) {
      const events = await getEvents(auth0Id)
      res.json({ events })
    }
  } catch (err) {
    console.log(err)
    res
      .sendStatus(500)
      .json({ errorMessage: 'there was an error fetching your data' })
  }
})

export default router
