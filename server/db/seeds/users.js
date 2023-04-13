/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      firstName: 'Joe',
      lastName: 'SubMinder',
      userName: 'joe',
      authId: '1',
      image: '',
    },
    {
      id: 2,
      firstName: 'Grant Keri',
      lastName: 'The Vans',
      userName: 'thevans4',
      authId: 'google-oauth2|115715665912062151987',
      image: '',
    },
    {
      id: 3,
      firstName: 'Shiraz',
      lastName: 'SubMinder',
      userName: 'shiraz',
      authId: '4',
      image: '',
    },
    {
      id: 4,
      firstName: 'Roisin',
      lastName: 'SubMinder',
      userName: 'roisin',
      authId: '54',
      image: '',
    },
    {
      id: 5,
      firstName: 'Jamie',
      lastName: 'SubMinder',
      userName: 'jamie',
      authId: '21',
      image: '',
    },
    {
      id: 6,
      firstName: 'Ahmad',
      lastName: 'SubMinder',
      userName: 'ahmad',
      authId: '44',
      image: '',
    },
  ])
}
