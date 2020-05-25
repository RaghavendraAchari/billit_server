const express = require("express");

var bills = require("./routes/bills");
const app = express();

const port = 3000;

app.use("/bills/", bills);

app.get("/", (req, res) => {
  res.send("First message from server...");
});

app.listen(port, function() {
  console.log("Listening to port " + port);
});
