const taskCollection = require("../model/task.model");
const userCollection = require("../model/user.model");
const bcrypt = require("bcrypt");
const { createToken } = require("../helpers/jwtTokenHelper");

let loginUser = async (req, res) => {
  try {
    let { mobile, email, password } = req.body;
    // console.log(mobile, email, password);
    let loginMobile = await userCollection.find({ mobile: mobile });
    let loginEmail = await userCollection.find({ email: email });
    // let loginPassword = await userCollection.find({ password: password });
    // let gettasks = await taskCollection.find({});
    let uid = loginEmail[0]._id;
    let logEmail = loginEmail[0].email;
    let logMobile = loginMobile[0].mobile;
    // console.log(logEmail, logMobile, uid);

    let comparePassword = await bcrypt.compare(
      password,
      loginEmail[0].password
    );
    // console.log(comparePassword);

    if (logMobile != mobile) {
      res.status(404).json({ error: true, message: "Mobile Not Found" });
    } else if (logEmail !== email) {
      res.status(404).json({ error: true, message: "Email Not Found" });
    } else if (comparePassword) {
      let token = createToken({ email: loginEmail.email });
      // console.log(token);
      return res.status(200).json({
        error: false,
        message: "Login successfull",
        token,
        uid,
        logEmail,
      });
    } else {
      return res.status(404).json({ error: true, message: "Wrong Password" });
    }
  } catch (err) {
    res.status(404).json({ error: true, message: err.message });
  }
};

module.exports = { loginUser };
