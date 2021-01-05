const router = require("express").Router();
const db = require("../data/dbConfig");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./jwtSecret");

const makeTokenForOwner = (user) => {
  const payload = {
    subject: user.owner_id,
    username: user.owner_username,
  };
  const options = {
    expiresIn: "900s",
  };
  return jwt.sign(payload, jwtSecret, options);
};

const makeTokenForUser = (user) => {
  const payload = {
    subject: user.user_id,
    username: user.user_username,
  };
  const options = {
    expiresIn: "900s",
  };
  return jwt.sign(payload, jwtSecret, options);
};

const passwordCheckOwner = async (req, res, next) => {
    const [user] = await db("owners").where({ owner_username: req.body.username })
    if (user && bcrypt.compareSync(req.body.password, user.owner_password)) {
        next();
    } else {
        res.status(401).json("invalid credentials")
    }
};

const passwordCheckUser = async (req, res, next) => {
    const [user] = await db("users").where({ user_username: req.body.username })
    if (user && bcrypt.compareSync(req.body.password, user.user_password)) {
        next();
    } else {
        res.status(401).json("invalid credentials")
    }
};

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
      res.status(201).json({
        username: newUser.owner_username,
        password: newUser.owner_password,
        id: data,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err.code });
    });
});

router.post("/register/user", (req, res) => {
  const hashedPW = bcrypt.hashSync(req.body.password, 10);

  const newUser = {
    user_username: req.body.username,
    user_password: hashedPW,
  };

  db("users")
    .insert(newUser)
    .then(([data]) => {
      res.status(201).json({
        username: newUser.user_username,
        password: newUser.user_password,
        id: data,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err.code });
    });
});

router.post("/login/owner", passwordCheckOwner, async (req, res) => {
  try {
    const rows = await db("owners")
      .where({ owner_username: req.body.username })
      .orderBy("owner_id");
    const user = rows[0];
    const token = makeTokenForOwner(user);
    res.status(200).json({
      message: `welcome, ${user.owner_username}`,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login/user", passwordCheckUser, async (req, res) => {
  try {
    const rows = await db("users")
      .where({ user_username: req.body.username })
      .orderBy("user_id");
    const user = rows[0];
    const token = makeTokenForUser(user);
    res.status(200).json({
      message: `welcome, ${user.user_username}`,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
