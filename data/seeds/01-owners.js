
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('owners').del()
    .then(function () {
      // Inserts seed entries
      return knex('owners').insert([
        {owner_username: "testowner", store_name: "Cool Shop", owner_password: "password", store_category: "food" },
        {owner_username: "testowner2", store_name: "Cooler Shop", owner_password: "password", store_category: "general" },
      ]);
    });
};
