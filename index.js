const port = process.env.PORT || 4000;
const server = require("./server");

server.listen(port, () => console.log(`\n ** Running on port ${port} **\n`));
