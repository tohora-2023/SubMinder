/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      firstName: 'Joe',
      lastName: 'SubMinder',
      userName: 'joe',
      authId: null,
      image: '',
    },
    {
      firstName: 'Keri',
      lastName: 'SubMinder',
      userName: 'keri',
      authId: null,
      image: '',
    },
    {
      firstName: 'Shiraz',
      lastName: 'SubMinder',
      userName: 'shiraz',
      authId: null,
      image: '',
    },
    {
      firstName: 'Roisin',
      lastName: 'SubMinder',
      userName: 'roisin',
      authId: null,
      image: '',
    },
    {
      firstName: 'Jamie',
      lastName: 'SubMinder',
      userName: 'jamie',
      authId: null,
      image: '',
    },
    {
      firstName: 'Ahmad',
      lastName: 'SubMinder',
      userName: 'ahmad',
      authId: null,
      image: '',
    },
  ]);
};
