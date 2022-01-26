const express = require("express");
const path = require('path');

const app = express();

app.use(express.static(__dirname + "/dist/CVonline2021"));

app.get("/*", (req, resp) => {
  resp.sendfile(path.join(__dirname + "/dist/CVonline2021/index.html"));
})

app.listen(process.env.PORT)
