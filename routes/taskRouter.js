const express = require("express");
const router = express.Router();
const {
  getTask,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/TaskController");


router.route("/").get(getAllTasks).post(createTask);
router.route("/:taskId").patch(updateTask).delete(deleteTask).get(getTask);

module.exports = router;