import checkJwt, { JwtRequest } from '../auth0'
import { addUserLogIn } from '../db/logIn'
import { Response } from 'express'

const express = require('express')
const router = express.Router()

router.post('/', checkJwt, async (req: JwtRequest, res: Response) => {
  try {
    const auth0Id = req.auth?.sub
    if (auth0Id) {
      const { firstName, lastName, userName, image } = req.body
      const newUser = await addUserLogIn({
        firstName,
        lastName,
        userName,
        image,
      }, auth0Id)
      return res.json(newUser)
    }
  } catch (err) {
    console.log(err)
  }
})
module.exports = router
