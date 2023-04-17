import express from 'express'
import { getSubsList, getSubsWithDate, deleteSub } from '../db/subscriptions'
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
      console.log(auth0Id)
      console.log(subscriptions)
      const userSubscriptions = subscriptions.filter((subscription) => {
        return subscription.userAuthId == auth0Id
      })
      console.log(userSubscriptions)
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
      console.log(subscriptions)
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
        await deleteSub(req.params.id)
        res.send('Subscription deleted')
      }
    } catch (error) {
      console.log(error)
    }
  }
)
