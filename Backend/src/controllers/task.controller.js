import Task from "../models/task.model.js";
import mongoose from "mongoose";

export const createTask = async (req, res) => {
  const { userId } = req.params;
  const { task } = req.body;
  try {
    const tsk = await Task.create({
      userId: new mongoose.Types.ObjectId(userId),
      task,
    });
    if (!tsk) return res.send({ success: false, message: "Task not created" });
    return res.send({ success: true, message: "Task created successfully" });
  } catch (error) {
    return res.send({
      success: false,
      message: "Error",
      error: error.message,
    });
  }
};

export const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const data = req.body;

  try {
    const task = await Task.findByIdAndUpdate(taskId, data, { new: true });
    if (!task) return res.send({ success: false, message: "Task not found" });
    return res.send({ success: true, message: "Task updated successfully" });
  } catch (error) {
    return res.send({
      success: false,
      message: "Error",
      error: error.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) return res.send({ success: false, message: "Task not found" });
    return res.send({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    return res.send({
      success: false,
      message: "Error",
      error: error.message,
    });
  }
};

export const getUserTask = async (req, res) => {
  const { userId } = req.params;
  try {
    // const tasks = await Task.find({
      // userId: new mongoose.Types.ObjectId(userId),
    // });

    const tasks = await Task.aggregate([
      {$match: {userId: new mongoose.Types.ObjectId(userId)}},
      {$sort:{createdAt:-1}}
    ])
    if (!tasks) return res.send({ success: false, message: "No tasks found" });
    return res.send({
      success: true,
      message: "Tasks fetched successfully",
      tasks,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: "Error",
      error: error.message,
    });
  }
};
