/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('subscriptions').del()
  await knex('subscriptions').insert([
    {
      id: 1,
      userId: 1,
      userAuthId: '1',
      image: '',
      frequency: 'week',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Travel',
      website: 'www.metlink.co.nz',
      price: 5.0,
    },
    {
      id: 2,
      userId: 1,
      userAuthId: '1',
      image: '',
      frequency: 'fortnight',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Entertainment',
      website: 'www.events.co.nz',
      price: 50.55,
    },
    {
      id: 3,
      userId: 2,
      userAuthId: '2',
      image: '',
      frequency: 'week',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Productivity',
      website: 'www.officemax.co.nz',
      price: 10.0,
    },
    {
      id: 4,
      userId: 2,
      userAuthId: '2',
      image: '',
      frequency: 'month',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Food & Drink',
      website: 'www.myfoodbag.co.nz',
      price: 150.0,
    },
    {
      id: 5,
      userId: 3,
      userAuthId: '4',
      image: '',
      frequency: 'week',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Necessities',
      website: 'www.countdown.co.nz',
      price: 150.0,
    },
    {
      id: 6,
      userId: 3,
      userAuthId: '4',
      image: '',
      frequency: 'fortnight',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Bills',
      website: 'www.contact.co.nz',
      price: 300.0,
    },
  ])
}
