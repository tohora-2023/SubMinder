import express from 'express'
import { getUser } from '../db/profile'
import checkJwt, { JwtRequest } from '../auth0'
import { Response } from 'express'

const router = express.Router()

router.get(
  '/profile/:userName',
  checkJwt,
  async (req: JwtRequest, res: Response) => {
    try {
      const users = await getUser(req.params.id)
      res.status(200).json({ users })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'This profile cannot be found' })
    }
  }
)

export default router
