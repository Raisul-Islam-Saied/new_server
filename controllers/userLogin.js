const User = require("../models/userReg.model");
const userLogin = async (req, res) => {
  try {
    const { email, password, time } = req.body;
    if (email && password && time) {
      const time_now = new Date().getMinutes();

      if (Number(time) === time_now) {
        const user = await User.findOne({
          $and: [{ email: email, password: password }],
        });
        user
          ? res.status(200).send({
              user,
            })
          : res.status(404).send({ message: "user not found" });
      } else {
        res.status(400).send({ message: "enter a valid minute" });
      }
    } else {
      res.status(400).send({
        message: "email or password or time is missing",
      });
    }
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};
module.exports = userLogin;
