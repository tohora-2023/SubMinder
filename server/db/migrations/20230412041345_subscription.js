/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('subscriptions', (table) => {
    table.increments('id')
    table.integer('userId')
    table.string('userAuthId')
    table.string('name')
    table.string('image')
    table.string('frequency')
    table.string('startDate')
    table.string('endDate')
    table.string('category')
    table.string('website')
    table.float('price')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('subscriptions')
}
