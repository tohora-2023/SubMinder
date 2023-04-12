/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('calendarEvents', (table) => {
    table.increments('id')
    table.integer('subscriptionId')
    table.string('scheduleDate')
    table.timestamps(true, true)
    table.boolean('isLastDate')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('calendarEvents')
}
