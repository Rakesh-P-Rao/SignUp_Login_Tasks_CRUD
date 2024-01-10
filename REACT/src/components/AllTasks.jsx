// import React, { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate, useLocation } from "react-router-dom";

// function AllTasks() {
//   let [tasks, setTasks] = useState([]);
//   let [formData, setFormData] = useState({
//     task: "",
//   });

//   const navigate = useNavigate();
//   const location = useLocation();
//   // console.log(location);
//   let userId = location?.state?.uid;
//   // console.log(userId);
//   let email = location?.state?.email;
//   // console.log(email);
//   let dataLog = { userId, email };

//   let changeFormData = ({ target: { name, value } }) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   let getTasks = async () => {
//     try {
//       let { data } = await axios.get(
//         `http://localhost:4000/mock/task/gettasks`,
//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token").toString(), //the token is a variable which holds the token
//           },
//         }
//       );
//       setTasks(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   let getTasksByUid = async (id) => {
//     try {
//       let { data } = await axios.get(
//         `http://localhost:4000/mock/task/gettask/${id}`,
//         {
//           headers: {
//             Authorization:
//               "Bearer " + localStorage?.getItem("token")?.toString(), //the token is a variable which holds the token
//           },
//         }
//       );
//       setTasks(data);
//       console.log(data);
//       // navigate("/alltasks");
//     } catch (err) {
//       console.log(err);
//       navigate("/login");
//     }
//   };

//   let updateTask = async (id) => {
//     try {
//       let { data } = await axios.put(
//         `http://localhost:4000/mock/task/updatetask/${id}`,
//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token").toString(), //the token is a variable which holds the token
//           },
//         }
//       );
//       setTasks(data);
//       // navigate("/alltasks");
//       // setShowModal(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   let deleteTask = async (id) => {
//     try {
//       let { data } = await axios.delete(
//         `http://localhost:4000/mock/task/deletetask/${id}`
//       );
//       setTasks(data);
//       navigate("/alltasks");
//       getTasks();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     // console.log(location?.state?.uid);
//     // console.log(location?.state);
//     // console.log(location);
//     getTasksByUid(location?.state?.uid);
//   }, [location]);

//   return (
//     <>
//       <div className="container">
//         <Link to="/addtask" state={dataLog}>
//           <button className="btn btn-info my-2 px-5">Add Tasks</button>
//         </Link>
//         {tasks.data?.map(({ task, _id }) => {
//           return (
//             <>
//               <div key={_id}>
//                 <div className="fs-3 mx-3 my-2 border p-2 d-flex">
//                   <div className="col-8">{task}</div>
//                   <div className="col-2">
//                     <button
//                       type="button"
//                       className="btn btn-success"
//                       data-bs-toggle="modal"
//                       data-bs-target="#exampleModal"
//                       data-bs-whatever="@getbootstrap"
//                     >
//                       Update
//                     </button>
//                     <div
//                       className="modal fade"
//                       id="exampleModal"
//                       tabIndex={-1}
//                       aria-labelledby="exampleModalLabel"
//                       aria-hidden="true"
//                     >
//                       <div className="modal-dialog">
//                         <div className="modal-content">
//                           <div className="modal-header">
//                             <h1
//                               className="modal-title fs-5"
//                               id="exampleModalLabel"
//                             >
//                               Edit & Update Task
//                             </h1>
//                             <button
//                               type="button"
//                               className="btn-close"
//                               data-bs-dismiss="modal"
//                               aria-label="Close"
//                             />
//                           </div>
//                           <div className="modal-body">
//                             <form>
//                               <div className="mb-3">
//                                 <label
//                                   htmlFor="task"
//                                   className="col-form-label"
//                                 >
//                                   Task:
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   id="task"
//                                   // defaultValue={task}
//                                   onChange={changeFormData}
//                                 />
//                               </div>
//                             </form>
//                           </div>
//                           <div className="modal-footer">
//                             <button
//                               type="button"
//                               className="btn btn-secondary"
//                               data-bs-dismiss="modal"
//                             >
//                               Close
//                             </button>
//                             <button
//                               type="button"
//                               className="btn btn-success"
//                               onClick={() => {
//                                 updateTask(_id);
//                               }}
//                             >
//                               Update Task
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-2">
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => {
//                         deleteTask(_id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default AllTasks;

import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

function AllTasks() {
  let [tasks, setTasks] = useState([]);
  let [formData, setFormData] = useState({
    task: "",
  });
  // const loginData = useContext(LoginContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  let userId = location?.state?.uid;
  // console.log(userId);
  let email = location?.state?.email;
  // console.log(email);
  let dataLog = { userId, email };

  let changeFormData = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let getTasks = async () => {
    try {
      let { data } = await axios.get(
        `http://localhost:4000/mock/task/gettasks`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token").toString(), //the token is a variable which holds the token
          },
        }
      );
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  let getTasksByUid = async (id) => {
    try {
      let { data } = await axios.get(
        `http://localhost:4000/mock/task/gettask/${id}`,
        {
          headers: {
            Authorization:
              "Bearer " + localStorage?.getItem("token")?.toString(), //the token is a variable which holds the token
          },
        }
      );
      setTasks(data);
      console.log(data);
      // navigate("/alltasks");
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  let updateTask = async (id) => {
    try {
      let { data } = await axios.put(
        `http://localhost:4000/mock/task/updatetask/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token").toString(), //the token is a variable which holds the token
          },
        }
      );
      setTasks(data);
      // navigate("/alltasks");
      // setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  let deleteTask = async (id) => {
    try {
      let { data } = await axios.delete(
        `http://localhost:4000/mock/task/deletetask/${id}`
      );
      setTasks(data);
      navigate("/alltasks");
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // console.log(location?.state?.uid);
    // console.log(location?.state);
    // console.log(location);
    getTasksByUid(location?.state?.uid);
  }, [location]);

  return (
    <>
      <div className="container">
        <Link to="/addtask" state={dataLog}>
          <button className="btn btn-info my-2 px-5">Add Tasks</button>
        </Link>
        {tasks.data?.map(({ task, _id }) => {
          return (
            <>
              <div key={_id}>
                <div className="fs-3 mx-3 my-2 border p-2 d-flex">
                  <div className="col-8">{task}</div>
                  <div className="col-2">
                    <button
                      type="button"
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@getbootstrap"
                    >
                      Update
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Edit & Update Task
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="task"
                                  className="col-form-label"
                                >
                                  Task:
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="task"
                                  // defaultValue={task}
                                  onChange={changeFormData}
                                />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => {
                                updateTask(_id);
                              }}
                            >
                              Update Task
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteTask(_id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AllTasks;
