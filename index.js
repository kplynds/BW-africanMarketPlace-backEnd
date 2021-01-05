const server = require("./api/server")

require('dotenv').config();

const port = 5005

server.listen(port, () => console.log(`Server listening on port 5005`))
