import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function AddTask() {
  let [formData, setFormData] = useState({
    task: "",
    createdBy: "",
    userId: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const dataLogData = location?.state;
  console.log(dataLogData?.userId);
  console.log(dataLogData?.email);

  let tokenCheck = () => {
    if (!dataLogData) {
      navigate("/login");
    }
  };

  let changeFormData = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
      createdBy: dataLogData.email,
      userId: dataLogData.userId,
    });
  };

  let submitFormData = async (e) => {
    try {
      e.preventDefault();
      let addtask = await axios.post(
        `http://localhost:4000/mock/task/addtask`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token").toString(), //the token is a variable which holds the token
          },
        },
        formData
      );
      navigate("/alltasks", {
        state: { uid: dataLogData.userId, email: dataLogData.email },
      });
      console.log(addtask);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [dataLogData]);

  return (
    <>
      <div className="container">
        <form onSubmit={submitFormData}>
          <input
            type="text"
            className="form-control my-3"
            aria-label="Amount (to the nearest dollar)"
            placeholder="Enter task "
            name="task"
            value={formData.task}
            onChange={changeFormData}
          />
          <div className="input-div">
            <button type="submit" className="btn btn-info px-5">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTask;
