// import { screen, render, within, waitFor } from '@testing-library/react'
// import '@testing-library/jest-dom'
// import nock from 'nock'

// import { MemoryRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'

// import { initaliseStore } from '../../store'
// import ManageSubscription from '../ManageSubscriptions'

// describe('<ManageSubscription/>', () => {
//   it('should show a list of subscriptions', async () => {
//     const scope = nock('http://localhost')
//       .get('/api/v1/task/list')
//       .reply(200, [
//         {
//           id: 1,
//           userAuthId: 'google|123',
//           name: 'Metlink',
//           image: 'image.jpb',
//           frequency: 'weekly',
//           endDate: '2023-04-12T08:41:30.872Z',
//           isLastDate: false,
//           scheduleDate: '2023-04-12T08:41:30.872Z',
//           category: 'Travel',
//           website: 'www.metlink.org.nz',
//           price: 5.0,
//         },
//         {
//           id: 2,
//           userAuthId: 'google|123',
//           name: 'Netflix',
//           image: 'image.jpb',
//           frequency: 'Monthly',
//           endDate: '2023-04-14T08:41:30.872Z',
//           isLastDate: false,
//           scheduleDate: '2023-04-14T08:41:30.872Z',
//           category: 'Entertainment',
//           website: 'www.netflix.co.nz',
//           price: 15.0,
//         },
//       ])

//     render(
//       <MemoryRouter initialEntries={['/list']}>
//         <Provider store={initaliseStore()}>
//           <ManageSubscription />
//         </Provider>
//       </MemoryRouter>
//     )

//     await waitFor(() => {
//       const list = screen.getAllByRole('list')
//       console.log(screen)
//       const items = within(list[0]).getAllByRole('text')
//       console.log(items)
//       //expect(items).toHaveLength(2)
//       //expect(items[0]).toHaveTextContent('Head to the gym')
//       //expect(items[1]).toHaveTextContent('Watch a bad movie')
//       expect(scope.isDone()).toBeTruthy()
//     })
//   })
// })
