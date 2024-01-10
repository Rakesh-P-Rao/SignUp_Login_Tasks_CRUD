import React, { useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  let [formData, setFormData] = useState({
    email: "",
    mobile: "",
    password: "",
  });

  let [authentication, setAuthentication] = useState(true);
  const LoginContext = createContext(null);

  const navigate = useNavigate();

  let changeFormData = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  let submitFormData = async (e) => {
    try {
      e.preventDefault();
      let loginUser = await axios.post(
        `http://localhost:4000/mock/login/loginuser`,
        formData
      );
      localStorage.setItem("token", loginUser.data.token);
      let userId = loginUser.data.uid;
      let logEmail = loginUser.data.logEmail;
      // console.log(loginUser);
      setAuthentication(loginUser.status.toString() === "201" ? true : false);
      // console.log("AUTH", authentication);
      if (authentication) {
        navigate("/alltasks", { state: { uid: userId, email: logEmail } });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-5 fw-bold lh-1 text-body-emphasis mb-3">
              Login to your digital presence
            </h1>
            <p className="col-lg-10 fs-4">
              Login to your account and get access to all of your private data
              from your own account and browse, edit, update, delete your info
              and other data easily. If you have not created your account please
              sign up and avail the services provided effortlessly.
            </p>
          </div>
          <LoginContext.Provider value={formData}>
            <div className="col-md-10 mx-auto col-lg-5">
              <form
                className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
                onSubmit={submitFormData}
              >
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    placeholder="name@example.com"
                    name="email"
                    value={formData.email}
                    onChange={changeFormData}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                    id="loginMobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={changeFormData}
                  />
                  <label htmlFor="floatingMobile">Mobile</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="loginPassword"
                    name="password"
                    value={formData.password}
                    onChange={changeFormData}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                {/* <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                </label>
              </div> */}
                <button className="w-100 btn btn-lg btn-warning" type="submit">
                  Sign In
                </button>
                {/* <hr className="my-4" />
              <small className="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small> */}
              </form>
            </div>
          </LoginContext.Provider>
        </div>
      </div>
    </>
  );
}

export default Login;
