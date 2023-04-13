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
      userId: 7,
      userAuthId: 'google-oauth2|115715665912062151987',
      name: 'Metlink',
      image: '',
      frequency: 'week',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Travel',
      website: 'https://www.metlink.co.nz',
      price: 5.0,
    },
    {
      id: 2,
      userId: 7,
      userAuthId: 'google-oauth2|115715665912062151987',
      name: 'Netflix',
      image: '',
      frequency: 'fortnight',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Entertainment',
      website: 'https://www.netflix.co.nz',
      price: 50.55,
    },
    {
      id: 3,
      userId: 7,
      userAuthId: 'google-oauth2|115715665912062151987',
      name: 'Office Max',
      image: '',
      frequency: 'week',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Productivity',
      website: 'https://www.officemax.co.nz',
      price: 10.0,
    },
    {
      id: 4,
      userId: 7,
      userAuthId: 'google-oauth2|115715665912062151987',
      name: 'My Food Bag',
      image: '',
      frequency: 'month',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Food & Drink',
      website: 'https://www.myfoodbag.co.nz',
      price: 150.0,
    },
    {
      id: 5,
      userId: 7,
      userAuthId: 'google-oauth2|115715665912062151987',
      name: 'Countdown',
      image: '',
      frequency: 'week',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Necessities',
      website: 'https://www.countdown.co.nz',
      price: 150.0,
    },
    {
      id: 6,
      userId: 7,
      userAuthId: 'google-oauth2|115715665912062151987',
      name: 'Contact Energy',
      image: '',
      frequency: 'fortnight',
      endDate: '2023-04-12T08:41:30.872Z',
      category: 'Bills',
      website: 'https://www.contact.co.nz',
      price: 300.0,
    },
  ])
}
