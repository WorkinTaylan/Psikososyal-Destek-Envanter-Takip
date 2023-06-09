require("dotenv").config();
const server = require("./api/server");

const PORT = process.env.SERVER_PORT || 9000;

server.listen(PORT, () => {
  console.log(`***Server running on ${PORT}`);
});
