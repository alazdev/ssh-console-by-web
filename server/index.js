const fastify = require('fastify')({ logger: true })
// const app = fastify();
fastify.register(require("fastify-ws"));
const WsController = require("./controller/WebConsole");

fastify.ready(err => {
  if (err) throw err;
  console.log("server started...");
  fastify.ws.on("connection", WsController);
});

fastify.get("/", (req, res) => {
  res.send({ hello: "word" });
});

fastify.listen(4004);
