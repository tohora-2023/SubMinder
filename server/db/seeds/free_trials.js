/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('freeTrials').del()
  await knex('freeTrials').insert([
    {
      id: 1,
      name: 'CodeCademy',
      scheduleDate: '2023-04-23',
      category: 'Productivity',
      website: 'www.codecademy.com',
      auth0Id: 'auth0|6423665f0d8ce12aec2257fe',
    },
  ])
}
