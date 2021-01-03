
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_username: "testuser", user_password: "password"},
        {user_username: "testuser2", user_password: "12345"},
      ]);
    });
};
