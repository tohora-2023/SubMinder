import { screen, render, within, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import nock from 'nock'

import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { initaliseStore } from '../../store'
import ManageSubscription from '../ManageSubscriptions'

describe('<ManageSubscription/>', () => {
  it('should show a message when there are no subscriptions', async () => {
    nock.cleanAll()

    const authToken = 'my-auth-token' // Replace with your actual auth token
    const scope = nock('http://localhost:3000', {
      reqheaders: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .get('/v1/subscriptions/list')
      .reply(200, [])

    render(
      <MemoryRouter initialEntries={['/managesubscriptions']}>
        <Provider store={initaliseStore()}>
          <ManageSubscription />
        </Provider>
      </MemoryRouter>
    )

    await waitFor(() => {
      const text = screen.getAllByRole('text')
      expect(text).toMatchObject([
        { textContent: 'You have no subscriptions, please add one' },
      ])
    })
  })
})
