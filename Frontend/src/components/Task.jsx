import { FaCircleCheck } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import {motion} from "framer-motion"

export function Task({ Task, Status, Id,CreatedAt }) {
  const { fetchUserTasks } = useContext(AppContext);
  const handleTaskStatus = async () => {
    if (Status) {
      const response = await axios.put(`http://localhost:8000/api/v1/task/updateTask/${Id}`, {
        status: false 
      })
      console.log(response.data);
      fetchUserTasks();
    }else{
      const response = await axios.put(`http://localhost:8000/api/v1/task/updateTask/${Id}`, {
        status: true
      })
      console.log(response.data);
      fetchUserTasks();
    }
  }

  const handleDeleteTask = async () =>{
    const response = await axios.delete(`http://localhost:8000/api/v1/task/deleteTask/${Id}`)
    if(response.data.success){
      fetchUserTasks();
    }
  }

  return <motion.div
    initial={{scale:0}}
    animate={{scale:1}}
    exit={{scale:0}}
    transition={{duration:0.2}}
    className={"w-200 h-30 shadow-lg shadow-black/80 mt-10 rounded-2xl flex items-center"}>
    <div className={"flex-1 flex items-center gap-x-5"}>
      <FaCircleCheck onClick={handleTaskStatus} className={`${Status ? "text-green-500" : "text-red-500"} font-bold ml-5 cursor-pointer text-4xl`} />
      <p className={`${Status ? "line-through text-gray-500" : ""} font-semibold font-sans text-2xl`}>{Task}</p>
    </div>
    <div className={"mr-5 flex flex-col justify-center items-center gap-y-3"}>
      <p className={'text-purple-500 font-bold text-lg'}>{new Date(CreatedAt).toLocaleTimeString()}</p>
      <button className={"text-red-500 text-3xl cursor-pointer"} onClick={handleDeleteTask}><FaTrash /></button>
    </div>
  </motion.div>;
}