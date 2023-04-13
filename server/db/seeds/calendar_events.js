/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('calendarEvents').del()
  await knex('calendarEvents').insert([
    {
      id: 1,
      subscriptionId: 4,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      isLastDate: true,
    },
    {
      id: 2,
      subscriptionId: 2,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      id: 3,
      subscriptionId: 3,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      id: 4,
      subscriptionId: 4,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      id: 5,
      subscriptionId: 5,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      id: 6,
      subscriptionId: 6,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      id: 7,
      subscriptionId: 7,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      isLastDate: true,
    },
    {
      id: 8,
      subscriptionId: 8,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      id: 9,
      subscriptionId: 9,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      id: 10,
      subscriptionId: 10,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      id: 11,
      subscriptionId: 11,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
    {
      id: 12,
      subscriptionId: 12,
      scheduleDate: '2023-04-12T08:41:30.872Z',
      isLastDate: false,
    },
  ])
}
