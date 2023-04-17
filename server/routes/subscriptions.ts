import express from 'express'
import { getSubsList, getSubsWithDate } from '../db/subscriptions'
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
      // you may want to filter this at the database level
      // imagine there are 1,000,000,000 subscriptions in the database and you only want to return 15
      // something like getUserSubscriptions(auth0Id)
      const userSubscriptions = subscriptions.filter((subscription) => {
        return subscription.userAuthId == auth0Id
      })
      console.log(userSubscriptions)
      res.json(userSubscriptions)
    }
  } catch (error) {
    // this won't send anything back to the client, resulting in a timeout
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
    // timeout here too
    console.log(error)
  }
})
