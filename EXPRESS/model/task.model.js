const { Schema, model } = require("mongoose");
let taskSchema = new Schema({
  task: {
    type: String,
    required: [true, "Task is mandatory"],
    min: [2, "Task must have atleast 2 characters"],
  },
  createdBy: {
    type: String,
    required: [true, "User info is mandatory please login"],
  },
  userId: {
    type: String,
    required: [true, "User info is mandatory please login"],
  },
});

module.exports = model("task", taskSchema);
