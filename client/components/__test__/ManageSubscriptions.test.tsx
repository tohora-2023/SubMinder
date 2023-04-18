import { screen, render, within, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import nock from 'nock'

import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { initaliseStore } from '../../store'
import ManageSubscription from '../ManageSubscriptions'
import { useAuth0 } from '@auth0/auth0-react'

jest.mock('@auth0/auth0-react')

beforeEach(() => {
  jest.resetAllMocks()
})

afterAll(() => {
  jest.restoreAllMocks()
})

describe('<ManageSubscription/>', () => {
  it('should show a message when there are no subscriptions', async () => {
    nock.cleanAll()

    const authToken = 'my-auth-token'
    const mockAuth = {
      getAccessTokenSilently: jest.fn(async () => authToken),
      isAuthenticated: true,
    }

    const scope = nock('http://localhost', {
      reqheaders: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .get('/v1/subscriptions/list')
      .reply(200, [])

    jest.mocked(useAuth0 as jest.Mock).mockReturnValue(mockAuth)

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
      expect(scope.isDone()).toBeTruthy()
    })
  })
})
