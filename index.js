require('dotenv').config();

const server = require("./api/server")

const PORT = process.env.PORT || 5005

server.listen(PORT, () => console.log(`Server listening on port 5005`))
