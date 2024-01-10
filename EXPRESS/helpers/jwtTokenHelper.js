const jwt = require("jsonwebtoken");
require("dotenv").config();

let createToken = (payload) => {
  let token = jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: "1d",
  });
  return token;
};

module.exports = { createToken };
