const express = require("express");
const { keepAlive } = require("./jobs");
const app = express();

const port = process.env.PORT || 17500;

app.get("/", (_, res) => {
  return res.send("OK");
});

app.listen(port, () => {
  keepAlive();
  console.info(`Server started on port ${port}`);
});
