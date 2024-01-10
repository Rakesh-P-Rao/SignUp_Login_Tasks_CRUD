const express = require("express");
const { loginUser } = require("../controller/login.controller");

let router = express.Router();

router.post("/loginuser", loginUser);

module.exports = router;
