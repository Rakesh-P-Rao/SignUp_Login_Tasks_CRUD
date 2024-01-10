const jwt = require("jsonwebtoken");
require("dotenv").config();

let auth = async (req, res, next) => {
  try {
    let authToken = req.headers.authorization;
    // console.log("AUTH TOKEN: ", authToken);
    if (!authToken || !authToken.startsWith("Bearer")) {
      return res.status(401).json({ error: true, message: "Token Required" });
    }
    let token = authToken.split(" ")[1];
    // console.log("TOKEN: ",token);
    // console.log(process.env.JWT_KEY);
    let decodedData = jwt.verify(token, `${process.env.JWT_KEY}`);
    // console.log(decodedData);
    req.fullname == decodedData.fullname;

    //! important
    // // .user is user or developper given key name and assign it to the data we want
    req.user = { fullname: decodedData.fullname, email: decodedData.email };
    // console.log(req.user);
    next();
  } catch (err) {
    next(err);
  }
};
module.exports = { auth };

// const jsonwebtoken = require("jsonwebtoken");
// const customApiErrors = require("../helpers/customErrors");
// let auth = async (req, res, next) => {
//   try {
//     let token = req.headers.authorization.split(" ")[1];
//     if (!token) {
//       return customApiErrors("token is required", 403);
//     }
//     let decodedData = jsonwebtoken.verify(token, "sk123");
//     console.log(decodedData);
//     req.userToken = decodedData.email;

//     console.log(req.userToken);
//     next();
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports = auth;
