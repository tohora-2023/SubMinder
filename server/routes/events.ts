import express from 'express'
import checkJwt, { JwtRequest } from '../auth0'
import { Response } from 'express'
import {
  addEvent,
  getEmailStatusById,
  getEvents,
  updateEmailStatus,
} from '../db/events'

const router = express.Router()

router.post('/update/:id', checkJwt, async (req: JwtRequest, res: Response) => {
  const auth0Id = req.auth?.sub
  if (auth0Id) {
    const id = Number(req.params.id)
    const isEmailSent = req.body.isEmailSent
    const updatedEvent = await updateEmailStatus(id, isEmailSent)
    res.json(updatedEvent)
  }
})

router.get('/update/:id', checkJwt, async (req: JwtRequest, res: Response) => {
  const auth0Id = req.auth?.sub
  if (auth0Id) {
    const id = Number(req.params.id)
    const updatedEvent = await getEmailStatusById(id)
    res.json(updatedEvent)
  }
})

router.post(
  '/:subscriptionId',
  checkJwt,
  async (req: JwtRequest, res: Response) => {
    const auth0Id = req.auth?.sub
    if (auth0Id) {
      const subscriptionId = Number(req.params.subscriptionId)
      const { scheduleDate, isLastDate, isEmailSent } = req.body
      const newEvents = await addEvent(
        subscriptionId,
        { scheduleDate, isLastDate, isEmailSent },
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
