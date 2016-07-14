var express = require('express');
var router = express.Router();
var Pokes = require('../lib/queries');

/* GET pokemon listing. */
router.get('/', function(req, res, next) {
  Pokes.readAll().then(function(pokemons){
    res.render('pokemon/index',{ pokemons: pokemons.rows});
  })
});

router.get('/new', function(req, res, next){
  res.render('pokemon/new');
});

router.post('/new', function(req, res, next){
  Pokes.create(req.body).then(function(){
    res.redirect('/pokemon')
  })
});

router.get('/:id/edit', function(req, res, next){
  Pokes.readOne(req.params.id).then(function(pokemons){
    res.render('pokemon/edit', {pokemons: pokemons.rows[0]})
  })
});

router.post('/:id/edit', function(req, res, next){
  Pokes.update(req.params.id, req.body).then(function(){
    res.redirect('/pokemon')
  })
});

router.get('/:id/delete', function(req, res, next){
  Pokes.delete(req.params.id).then(function(){
    res.redirect('/pokemon')
  })
});

router.get('/:id', function(req, res, next){
  Pokes.readOne(req.params.id).then(function(pokemons){
    console.log("*******");
    console.log(pokemons.rows);
    res.render('pokemon/show', {pokemons: pokemons.rows[0]});
  })
})

module.exports = router;
