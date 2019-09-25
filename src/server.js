const express = require("express");
const cors = require("cors");

const routes = require("./routes");
require("./db");

const port = process.env.PORT;

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);
server.disable("x-powered-by");

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
