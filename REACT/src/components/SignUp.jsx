import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    gender: "",
    skills: [],
  });
  
  let [isError, setIsError] = useState(false);
  let [errMessage, setErrMessage] = useState("");

  let navigates = useNavigate();

  let changeFormData = ({ target: { name, value, checked } }) => {
    const { skills } = formData;
    if (checked && name === "skills") {
      setFormData({
        ...formData,
        [name]: value,
        skills: [...skills, value],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
        skills: skills.filter((e) => e !== value),
      });
    }
  };

  let submitFormData = async (e) => {
    console.log("FORMVALUE: ", formData);
    try {
      e.preventDefault();
      let { data } = await axios.post(
        `http://localhost:4000/mock/user/adduser`,
        formData
      );
      console.log(data);
      navigates("/login");
    } catch (err) {
      console.log(err.response.data);
      setIsError(err.response.data.error);
      setErrMessage(err.response.data.message);
    }
  };

  return (
    <>
      {isError ? <div className="card bg-danger"> {errMessage}</div> : ""}

      <div className="container my-5">
        <form
          className="row g-3 needs-validation"
          noValidate=""
          onSubmit={submitFormData}
        >
          <div className="col-md-4">
            <label htmlFor="validationCustomUsername" className="form-label">
              User Name
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                name="fullname"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required=""
                value={formData.fullname}
                onChange={changeFormData}
              />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustomEmail" className="form-label">
              Email
            </label>
            <div className="input-group has-validation">
              <input
                type="email"
                name="email"
                className="form-control"
                id="validationCustomEmail"
                aria-describedby="inputGroupPrepend"
                required=""
                value={formData.email}
                onChange={changeFormData}
              />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustomMobile" className="form-label">
              Mobile
            </label>
            <div className="input-group has-validation">
              <input
                type="number"
                name="mobile"
                className="form-control"
                id="validationCustomMobile"
                aria-describedby="inputGroupPrepend"
                required=""
                value={formData.mobile}
                onChange={changeFormData}
              />
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="validationCustom01"
              required=""
              name="password"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="validationCustom02"
              required=""
              name="password"
              value={formData.password}
              onChange={changeFormData}
            />
          </div>

          <div className="col-12">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                className="form-check-input"
                id="genderMale"
                value={"male"}
                onChange={changeFormData}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="genderFemale"
                name="gender"
                value={"female"}
                onChange={changeFormData}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="genderOthers"
                name="gender"
                value={"others"}
                onChange={changeFormData}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Others
              </label>
            </div>
          </div>

          <div className="col-12">
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkBoxJavascript"
                name="skills"
                value="Javascript"
                onChange={changeFormData}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Javascript
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkBoxMongodb"
                name="skills"
                value="MongoDB"
                onChange={changeFormData}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Mongodb
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkBoxExpressjs"
                name="skills"
                value="ExpressJS"
                onChange={changeFormData}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                Express JS
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkBoxReact"
                name="skills"
                value="ReactJS"
                onChange={changeFormData}
              />
              <label className="form-check-label" htmlFor="inlineCheckbox4">
                React JS
              </label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
