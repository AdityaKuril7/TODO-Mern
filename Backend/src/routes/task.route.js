import express from "express";
import {createTask, deleteTask, getUserTask, updateTask} from "../controllers/task.controller.js";

const taskRouter = express.Router();

// CURD operations
taskRouter.route("/getUserTask/:userId").get(getUserTask);
taskRouter.route("/createTask/:userId").post(createTask);
taskRouter.route("/updateTask/:taskId").put(updateTask);
taskRouter.route("/deleteTask/:taskId").delete(deleteTask);

export default taskRouter;