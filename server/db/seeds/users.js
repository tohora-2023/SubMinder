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
      authId: '1',
      image: '',
    },
    {
      firstName: 'Keri',
      lastName: 'SubMinder',
      userName: 'keri',
      authId: '2',
      image: '',
    },
    {
      firstName: 'Shiraz',
      lastName: 'SubMinder',
      userName: 'shiraz',
      authId: '4',
      image: '',
    },
    {
      firstName: 'Roisin',
      lastName: 'SubMinder',
      userName: 'roisin',
      authId: "54",
      image: '',
    },
    {
      firstName: 'Jamie',
      lastName: 'SubMinder',
      userName: 'jamie',
      authId: '21',
      image: '',
    },
    {
      firstName: 'Ahmad',
      lastName: 'SubMinder',
      userName: 'ahmad',
      authId: '44',
      image: '',
    },
  ]);
};
