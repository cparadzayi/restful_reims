
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('users', table => {
          table.string('username').primary()
          table.string('password').notNullable()
          table.string('department').notNullable()
          table.timestamp('created_at').defaultTo(knex.fn.now())
          table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
  ])
   
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
