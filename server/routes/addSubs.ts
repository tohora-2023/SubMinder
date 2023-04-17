import checkJwt, { JwtRequest } from '../auth0'
import { addSubs, getSubById } from '../db/addSubs'

import { Response } from 'express'

const express = require('express')
const router = express.Router()

// these routes can probably live in subscriptions.ts
// with the route prefix of /v1/subscriptions
router.post('/', checkJwt, async (req: JwtRequest, res: Response) => {
  try {
    const auth0Id = req.auth?.sub

    if (auth0Id) {
      const {
        name,
        image,
        frequency,
        startDate,
        endDate,
        category,
        website,
        price,
      } = req.body
      const newSub = await addSubs(
        {
          name,
          image,
          frequency,
          startDate,
          endDate,
          category,
          website,
          price,
        },
        auth0Id
      )
      const subById = await getSubById(newSub)

      return res.json(subById)
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

      const subById = await getSubById(id)

      return res.json(subById)
    }
  } catch (err) {
    console.log(err)
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error' })
  }
})

export default router
