const express = require("express");

const {
  addUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");

let router = express.Router();

router.post("/adduser", addUser);
router.get("/getusers", getUsers);
router.get("/getuser/:id", getSingleUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
