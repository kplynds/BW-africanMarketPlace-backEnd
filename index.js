const server = require("./api/server")

require('dotenv').config();

const PORT = process.env.PORT || 5005

server.listen(PORT, () => console.log(`Server listening on port 5005`))
