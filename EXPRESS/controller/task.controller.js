const taskCollection = require("../model/task.model");

let addTask = async (req, res) => {
  try {
    let { task, createdBy, userId } = req.body;
    let addtask = await taskCollection.create({ task, createdBy, userId });
    console.log(task, createdBy, userId);
    res.status(201).json({
      error: false,
      message: "Task Added successfully",
      data: addtask,
    });
  } catch (err) {
    res.status(401).json({ error: true, message: err.message });
  }
};

let getTasks = async (req, res) => {
  try {
    let gettasks = await taskCollection.find({});
    res.status(201).json({
      error: false,
      message: "Tasks Fetched successfully",
      data: gettasks,
    });
  } catch (err) {
    res.status(404).json({ error: true, message: err.message });
  }
};

let getTasksById = async (req, res) => {
  try {
    let { id } = req.params;
    // let userIdB = req.user.fullname;
    // console.log(userIdB);
    let gettasksbyid = await taskCollection.find({ userId: id });
    // console.log(gettasksbyid)
    res.status(201).json({
      error: false,
      message: "Task Fetched successfully",
      data: gettasksbyid,
    });
  } catch (err) {
    res.status(404).json({ error: true, message: err.message });
  }
};

let updateTask = async (req, res) => {
  try {
    let { id } = req.params;
    let { task } = req.body;

    let updatetask = await taskCollection.findByIdAndUpdate(
      { _id: id },
      { task: task },
      { new: true }
    );
    res.status(201).json({
      error: false,
      message: "Task Updated successfully",
      data: updatetask,
    });
  } catch (err) {
    res.status(404).json({ error: true, message: err.message });
  }
};

let deleteTask = async (req, res) => {
  try {
    let { id } = req.params;
    let deletetask = await taskCollection.findByIdAndDelete({ _id: id });
    res.status(201).json({
      error: false,
      message: "Task Deleted successfully",
      data: deletetask,
    });
  } catch (err) {
    res.status(404).json({ error: true, message: err.message });
  }
};

module.exports = { addTask, getTasks, getTasksById, updateTask, deleteTask };
