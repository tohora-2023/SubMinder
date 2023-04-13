import express from 'express'
import { join } from 'node:path'
import logIn from './routes/logIn'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/', logIn)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
