const mongoose = require("mongoose");

let connectToDB = (url) => {
  return mongoose.connect(url);
};
module.exports = connectToDB;
