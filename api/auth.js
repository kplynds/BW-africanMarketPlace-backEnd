const router = require("express").Router();
const db = require("../data/dbConfig");
const bcrypt = require("bcryptjs");

router.post("/register/owner", (req, res) => {
  const hashedPW = bcrypt.hashSync(req.body.password, 10);

  const newUser = {
    owner_username: req.body.username,
    store_name: req.body.store_name,
    owner_password: hashedPW,
    store_category: req.body.store_category,
  };

  db("owners")
    .insert(newUser)
    .then(([data]) => {
      res
        .status(201)
        .json({
          username: newUser.owner_username,
          password: newUser.owner_password,
          id: data,
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err.code });
    });
});

module.exports = router;
