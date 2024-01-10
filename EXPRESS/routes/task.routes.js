const express = require("express");
const {
  addTask,
  getTasks,
  getTasksById,
  updateTask,
  deleteTask,
} = require("../controller/task.controller");

const { auth } = require("../helpers/auth");

let router = express.Router();

router.post("/addtask", addTask);
router.get("/gettasks", auth, getTasks);
router.get("/gettask/:id", auth, getTasksById);
router.put("/updatetask/:id", updateTask);
router.delete("/deletetask/:id", deleteTask);

module.exports = router;
