exports.up = function(knex, Promise) {
  return knex.schema.createTable('pokemon', function(table){
    table.increments();
    table.string('name');
    table.string('type');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pokemon');
};
