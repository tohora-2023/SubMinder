import express from 'express'
import {
  getSubsList,
  getSubsWithDate,
  deleteSubsAndCalendarEvents,
} from '../db/subscriptions'
import checkJwt, { JwtRequest } from '../auth0'
import { Response } from 'express'

const router = express.Router()

export default router

//localhost:3000/v1/subscriptions
router.get('/', checkJwt, async (req: JwtRequest, res: Response) => {
  try {
    const auth0Id = req.auth?.sub
    if (auth0Id) {
      const subscriptions = await getSubsWithDate()
      const userSubscriptions = subscriptions.filter((subscription) => {
        return subscription.userAuthId == auth0Id
      })
      res.json(userSubscriptions)
    }
  } catch (error) {
    console.log(error)
  }
})

router.get('/list', checkJwt, async (req: JwtRequest, res: Response) => {
  try {
    const auth0Id = req.auth?.sub
    if (auth0Id) {
      const subscriptions = await getSubsList(auth0Id)
      res.json(subscriptions)
    }
  } catch (error) {
    console.log(error)
  }
})

router.delete(
  '/delete/:id',
  checkJwt,
  async (req: JwtRequest, res: Response) => {
    try {
      const auth0Id = req.auth?.sub
      console.log(auth0Id)
      if (auth0Id) {
        await deleteSubsAndCalendarEvents(Number(req.params.id))
        res.send('Subscription deleted')
      }
    } catch (error) {
      console.log(error)
    }
  }
)
