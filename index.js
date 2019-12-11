const port = process.env.PORT || 4000;
const server = require("./server");

server.get("/", (req, res) => {
  res.send("<h1>Wellcome</h1>");
});
server.listen(port, () => console.log(`\n ** Running on port ${port} **\n`));
