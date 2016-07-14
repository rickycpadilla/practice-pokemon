var knex = require('../db/knex');

module.exports = {
  create: function(poke){
    return knex.raw(`INSERT into pokemon values(DEFAULT,
      '${poke.name}',
      '${poke.type}')`)
  },
  readAll: function(){
    return knex.raw('SELECT * from pokemon;')
  },
  readOne: function(id){
    return knex.raw(`SELECT * from pokemon WHERE id=${id}`)
  },
  update: function(id, poke){
    return knex.raw(`UPDATE pokemon set (name, type) =
      ('${poke.name}', '${poke.type}') WHERE id=${id}`)
  },
  delete: function(id){
    return knex.raw(`DELETE from pokemon WHERE id=${id}`)
  }
}
