import React from "react";
import { useNavigate } from "react-router-dom";
import Otp from "./Otp";

function Home() {
  const navigate = useNavigate();
  let navigateToLogin = () => {
    navigate("/login");
  };
  let navigateToSignUp = () => {
    navigate("/signup"); 
  };
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          CRUD DEMONSTRATION
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            CRUD operations demonstrations with using reacts js as frontend and
            express js as backend and mongodb for database.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={navigateToLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              onClick={navigateToSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <Otp />
    </>
  );
}

export default Home;
