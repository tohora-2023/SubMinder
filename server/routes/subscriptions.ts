import express from 'express'
import { getAllSubs, getSubsWithDate } from '../db/subscriptions'
import server from '../server'
import { Subscription } from '../../models/subscription'
import checkJwt, { JwtRequest } from '../auth0'
import { Response } from 'express'

const router = express.Router()

export default router

//localhost:3000/v1/subscriptions

router.get('/',checkJwt, async (req: JwtRequest, res: Response) => {
  const auth0Id = req.auth?.sub
  if (auth0Id) {
    const subscriptions = await getSubsWithDate()
    res.json(subscriptions)
  }
})
