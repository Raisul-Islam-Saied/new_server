const express = require("express");

const app = express();
const userRegRoute = require("./routes/userReg.route");
const userLoginRoute = require("./routes/userLogin.router");
require("./config/db");
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send({ message: "home page" });
});
app.use("/register", userRegRoute);
app.use("/login", userLoginRoute);
app.use((req, res, next) => {
  res.status(404).send({
    message: "page not found",
  });
});
app.use((err, req, res, next) => {
  res.status(600).send({
    message: "server error",
  });
});
app.listen(PORT, () => {
  console.log(`your server is running at http://localhost:${PORT}`);
});
