
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {owner_id: 1, item_name: "taco", item_price: 5, item_description: "delicious"},
        {owner_id: 2, item_name: "toothbrush", item_price: 3, item_description: "useful"},
      ]);
    });
};
