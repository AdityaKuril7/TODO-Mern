import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  task:{
    type:String,
    required:true
  },
  status:{
    type:Boolean,
    default:false
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  }
},{timestamps:true})

const Task = mongoose.model("Task",taskSchema)
export default Task;