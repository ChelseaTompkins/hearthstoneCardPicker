
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('card').del()
    .then(function () {
      // Inserts seed entries
      return knex('card').insert([
        {mana: 5, attack: 6, health: 2, description: 'Leeroy Jenkins is a neutral minion card'},
        {mana: 9, attack: 8, health: 8, description: 'Alexstrasza is a neutral minion card'},
        {mana: 9, attack: 5, health: 5, description: 'Aviana is a druid minion card'}
      ]);
    });
};
