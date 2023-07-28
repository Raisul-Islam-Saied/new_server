const mongoose = require("mongoose");
const config = require("./config");

mongoose
  .connect(config.db.url)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("not connected");
    process.exit(1);
  });
