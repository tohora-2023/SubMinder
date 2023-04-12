import React from 'react'
import request from 'superagent'

interface User {
  firstName?: string
  lastName?: string
  userName?: string
  image?: string
}
export default async function addLogInInfo(user: User, token: string) {
  try {
    const response = await request
      .post('/api/log-in')
      .send({ user, token })
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)

    return response.body
  } catch (error) {
    console.error(error)
  }
}
