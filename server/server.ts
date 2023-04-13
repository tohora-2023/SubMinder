import express from 'express'
import { join } from 'node:path'
import logIn from './routes/logIn'
import addSubs from './routes/addSubs'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/', addSubs)
server.use('/', logIn)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
