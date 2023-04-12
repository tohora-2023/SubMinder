/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('calendarEvents').del()
  await knex('calendarEvents').insert([
    {
      subscriptionId: 1,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      createDate: '2023-04-12T08:41:30.872Z',
      isLastDate: true,
    },
    {
      subscriptionId: 2,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      createDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      subscriptionId: 3,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      createDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      subscriptionId: 4,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      createDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      subscriptionId: 5,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      createDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      subscriptionId: 6,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      createDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
  ])
}
