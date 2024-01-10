const userCollection = require("../model/user.model");
const bcrypt = require("bcrypt");

let addUser = async (req, res) => {
  try {
    let { fullname, email, mobile, password, gender, skills } = req.body;
    // console.log(skills);
    let enteredMobile = await userCollection.find({ mobile: mobile });
    let enteredEmail = await userCollection.find({ email: email });

    // console.log(
    //   enteredEmail[0]?.email,
    //   enteredMobile[0]?.mobile,
    //   email,
    //   mobile
    // );

    if (enteredEmail[0]?.email === email) {
      res.status(404).json({ error: true, message: "Email Already Found" });
    } else if (enteredMobile[0]?.mobile == mobile) {
      res.status(404).json({ error: true, message: "Mobile Already Found" });
    } else {
      let salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
      let adduser = await userCollection.create({
        fullname,
        email,
        mobile,
        password,
        gender,
        skills,
      });

      res.status(201).json({
        error: false,
        message: "Signup successfull",
        data: adduser,
      });
    }
  } catch (err) {
    res.status(401).json({ error: true, message: err.message });
  }
};

let getUsers = async (req, res) => {
  try {
    let getusers = await userCollection.find({});
    res.status(201).json({
      error: false,
      message: "Users Fetched successfully",
      data: getusers,
    });
  } catch (err) {
    res.status(404).json({ error: true, message: err.message });
  }
};

let getSingleUser = async (req, res) => {
  try {
    let { id } = req.params;
    let getsingleuser = await userCollection.findById({ _id: id });
    res.status(201).json({
      error: false,
      message: "User Fetched successfully",
      data: getsingleuser,
    });
  } catch (err) {
    res.status(404).json({ error: true, message: err.message });
  }
};

let updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let { fullname, email, mobile, password, gender, skills } = req.body;
    let updateuser = await userCollection.findByIdAndUpdate(
      { _id: id },
      { fullname, email, mobile, password, gender, skills },
      { new: true }
    );
    res.status(201).json({
      error: false,
      message: "User Updated Successfully",
      data: updateuser,
    });
  } catch (err) {
    res.status(404).json({ error: true, message: err.message });
  }
};

let deleteUser = async (req, res) => {
  try {
    let { id } = req.params;
    let deleteuser = await userCollection.findByIdAndDelete({ _id: id });
    res.status(201).json({
      error: false,
      message: "User Deleted Successfully",
      data: deleteuser,
    });
  } catch (err) {
    res.status(404).json({ error: true, message: err.message });
  }
};

module.exports = { addUser, getUsers, getSingleUser, updateUser, deleteUser };
