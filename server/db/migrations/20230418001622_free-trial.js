/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('freeTrials', (table) => {
    table.increments('id')
    table.string('name')
    table.string('scheduleDate')
    table.string('category')
    table.string('website')
    table.string('auth0Id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('freeTrials')
}
