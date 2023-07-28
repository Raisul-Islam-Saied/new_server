const User = require("../models/userReg.model");
const RegController = async (req, res) => {
  try {
    const { username, email, password, dob } = req.body;
    const find_email = await User.findOne({ email: email });
    if (find_email) {
      const founded_email = find_email.email;
      if (founded_email === email) {
        res.status(400).send({
          message: "Email must be unique",
        });
      }
    } else {
      const newUser = new User({
        username,
        email,
        password,
        dob,
      });
      const user = await newUser.save();
      res.status(201).send({
        message: "successfully created",
        user,
      });
    }
  } catch (error) {
    res.status(400).send({
      message: "bad request",
      error: error.message,
    });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    user
      ? res.status(200).send(user)
      : res.status(404).send({ message: "user not found" });
  } catch (error) {
    res.status(400).send({
      message: "bad request",
      error: error.message,
    });
  }
};
module.exports = { RegController, getAllUsers };
