const express = require("express");

const { runValidation } = require("../validation");
const { schemas } = require("../validation/schemas");
const {
  RegController,
  getAllUsers,
} = require("../controllers/userReg.controller");

const router = express.Router();
router.post("/", runValidation(schemas.userReg), RegController);
router.get("/", getAllUsers);

module.exports = router;
