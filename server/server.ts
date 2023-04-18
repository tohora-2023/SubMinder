import express from 'express'
import { join } from 'node:path'

import subscriptionRoutes from './routes/subscriptions'
import eventRoutes from './routes/events'
import logIn from './routes/logIn'
import addSubsRouter from './routes/addSubs'
import trialsRouter from './routes/freeTrials'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/v1/subscriptions', subscriptionRoutes)
server.use('/v1/events', eventRoutes)
server.use('/v1/addsub', addSubsRouter)
server.use('/v1/trials', trialsRouter)
server.use('/', logIn)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
