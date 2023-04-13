import express from 'express'
import { getSubsWithDate } from '../db/subscriptions'
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

//TODO delete a subscription
//Create the Route and DB Query
//Link the route correctly in the API
// The Page is returning the subscription ID to the front end API
//Hopefully after that it should work.
//Comment below of the name of the route I am calling if you change it slightly then update the api route.

//POST /delete/:subId
