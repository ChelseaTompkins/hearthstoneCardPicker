const knex = require("../db/knex.js");

module.exports = {
  home: (req, res)=>{
    if(!req.session.deck){
      req.session.deck = [];
    }
    knex.select('*').from('card')
    .then((result)=>{
      res.render('index', {cards: result, deck:req.session.deck});
    })
  },

  newCard: (req, res)=>{
    knex('card').insert({
      mana: req.body.mana,
      attack: req.body.attack,
      health: req.body.health,
      description: req.body.description
    })
    .then(()=>{
      res.redirect('/');
    })
  },

  add: (req,res)=>{
    knex('card').where('id', req.params.id)
    .then((result)=>{
      req.session.deck.push(result[0])
      req.session.save(()=>res.redirect('/'));
    })
  },

  del: (req, res)=>{
    let deck = req.session.deck;
    for(var i=0; i < deck.length; i++){
      if(deck[i].id == req.params.id){
        deck.splice(i, 1);
        req.session.save(()=>res.redirect('/'));
        return;
      }
    }
    res.redirect('/');
  }
}
