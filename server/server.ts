import express from 'express'
import { join } from 'node:path'

import subscriptionRoutes from './routes/subscriptions'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/v1/subscriptions', subscriptionRoutes)

export default server
