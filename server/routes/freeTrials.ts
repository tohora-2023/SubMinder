import checkJwt, { JwtRequest } from '../auth0'

import { Response } from 'express'
import { addTrial, getAllTrials, getTrialById } from '../db/trials'

const express = require('express')
const router = express.Router()

router.get('/', checkJwt, async (req: JwtRequest, res: Response) => {
  const auth0Id = req.auth?.sub
  if (auth0Id) {
    const trials = await getAllTrials()
    console.log(trials)
    res.json({ trials })
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res: Response) => {
  try {
    const auth0Id = req.auth?.sub

    if (auth0Id) {
      const { name, scheduleDate, category, website } = req.body
      const newTrial = await addTrial(
        {
          name,
          scheduleDate,
          category,
          website,
        },
        auth0Id
      )
      const trialById = await getTrialById(newTrial)

      return res.json(trialById)
    }
  } catch (err) {
    console.log(err)
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error' })
  }
})

router.get('/:id', checkJwt, async (req: JwtRequest, res: Response) => {
  try {
    const auth0Id = req.auth?.sub

    if (auth0Id) {
      const id = Number(req.params.id)

      const trialById = await getTrialById(id)

      return res.json(trialById)
    }
  } catch (err) {
    console.log(err)
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error' })
  }
})

export default router
