const Joi = require("joi");

exports.runValidation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      errors: {
        wrap: {
          label: "",
        },
      },
    });

    if (error) {
      const message = error.details.map((err) => err.message);
      res.status(400).send({
        message: "something is wrong",
        errors: message,
      });
    } else {
      next();
    }
  };
};
