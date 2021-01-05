module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/projects.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    useNullAsDefault: true,
  },
  production: {
    client: "sqlite3",
    connection: {
      filename: "./data/projects.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: "./data/seeds",
    },
    useNullAsDefault: true,
  },
};
