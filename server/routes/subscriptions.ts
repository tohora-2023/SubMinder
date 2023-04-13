import express from 'express'
import { getAllSubs, getSubsWithDate } from '../db/subscriptions'
import server from '../server'
import { Subscription } from '../../models/subscription'

const router = express.Router()

export default router

//localhost:3000/v1/subscriptions

router.get('/', async (req, res) => {
  const subscriptions = await getSubsWithDate()
  res.json(subscriptions)
})
