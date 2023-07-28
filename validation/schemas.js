const Joi = require("joi");

exports.schemas = {
  userReg: Joi.object({
    username: Joi.string().required().min(3).max(30),
    email: Joi.string().email().required(),
    password: Joi.string()
      .required()

      .min(6),

    repeat_password: Joi.ref("password"),
    dob: Joi.date().greater(new Date("2020-01-02")).required(),
  }),
};
