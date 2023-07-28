const express = require("express");
const userReg = require("../controllers/userReg.controller");
const { runValidation } = require("../validation");
const { schemas } = require("../validation/schemas");

const router = express.Router();
router.post("/", runValidation(schemas.userReg), userReg);

module.exports = router;
