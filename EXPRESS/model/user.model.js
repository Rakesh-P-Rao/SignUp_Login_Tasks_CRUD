const { Schema, model } = require("mongoose");

let userSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Full name is mandatory"],
    min: [2, "Full name must have atleast 2 characters"],
  },
  email: {
    type: String,
    required: [true, "Email name is mandatory"],
  },
  mobile: {
    type: Number,
    required: [true, "Mobile name is mandatory"],
  },
  password: {
    type: String,
    required: [true, "Password name is mandatory"]
  },
  gender: {
    type: String,
  },
  skills: {
    type: Array,
  },
});

module.exports = model("user", userSchema);
