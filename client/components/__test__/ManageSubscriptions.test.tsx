import { screen, render, waitFor } from '@testing-library/react'
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
        { textContent: 'You have no paid subscriptions, please add one' },
      ])
      expect(scope.isDone()).toBeTruthy()
    })
  })

  it('should return the subscriptions', async () => {
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
      .reply(200, [
        {
          id: 1,
          userAuthId: 'google|123',
          name: 'Metlink',
          image: 'image.jpb',
          frequency: 'weekly',
          endDate: '2023-04-12T08:41:30.872Z',
          isLastDate: false,
          scheduleDate: '2023-04-12T08:41:30.872Z',
          category: 'Travel',
          website: 'www.metlink.org.nz',
          price: 5.0,
        },
        {
          id: 2,
          userAuthId: 'google|123',
          name: 'Netflix',
          image: 'image.jpb',
          frequency: 'Monthly',
          endDate: '2023-04-14T08:41:30.872Z',
          isLastDate: false,
          scheduleDate: '2023-04-14T08:41:30.872Z',
          category: 'Entertainment',
          website: 'www.netflix.co.nz',
          price: 15.0,
        },
      ])

    jest.mocked(useAuth0 as jest.Mock).mockReturnValue(mockAuth)

    render(
      <MemoryRouter initialEntries={['/managesubscriptions']}>
        <Provider store={initaliseStore()}>
          <ManageSubscription />
        </Provider>
      </MemoryRouter>
    )

    await waitFor(() => {
      const name = screen.getByText('METLINK')
      expect(name.textContent).toBe('METLINK')

      const cycle = screen.getByText('travel - weekly')
      expect(cycle.textContent).toBe('travel - weekly')

      const amount = screen.getByText('$5.00')
      expect(amount.textContent).toBe('$5.00')

      const date = screen.getByText('12 April')
      expect(date.textContent).toBe('12 April')

      const name2 = screen.getByText('NETFLIX')
      expect(name2.textContent).toBe('NETFLIX')

      const cycle2 = screen.getByText('entertainment - monthly')
      expect(cycle2.textContent).toBe('entertainment - monthly')

      const date2 = screen.getByText('14 April')
      expect(date2.textContent).toBe('14 April')

      const amount2 = screen.getByText('$15.00')
      expect(amount2.textContent).toBe('$15.00')

      expect(scope.isDone()).toBeTruthy()
    })
  })
})
