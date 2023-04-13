import checkJwt, { JwtRequest } from '../auth0'
import { addSubs } from '../db/addSubs'

import { Response } from 'express'

const express = require('express')
const router = express.Router()

router.post('/addsub', checkJwt, async (req: JwtRequest, res: Response) => {
  try {
    const auth0Id = req.auth?.sub
    if (auth0Id) {
      const {
        serviceName,
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
          serviceName,
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

      return res.json(newSub)
    }
  } catch (err) {
    console.log(err)
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error' })
  }
})
export default router
