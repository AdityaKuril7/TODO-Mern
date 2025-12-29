import {useRef} from "react";
import { BsX } from "react-icons/bs";
import React, { useContext, useEffect} from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion"
import axios from "axios"
export function AddCard() {


  const {fetchUserTasks, state, newTask, setNewTask, setShowAddCard } = useContext(AppContext);
  const textAreaRef = useRef(null);
  const handleAddTask = async () => {
    try {
      if (newTask === "") return alert("Empty Task Not Stored ! ");
      const response = await axios.post(`http://localhost:8000/api/v1/task/createTask/${state?.userId}`, {
        task: newTask
      })
      fetchUserTasks() 
      setShowAddCard(false);
      setNewTask("");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(textAreaRef.current)
      textAreaRef.current.focus()
  }, []);
  return (<div className={"h-screen w-screen fixed flex justify-center items-center bg-gray-800/50"}>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1.5 }}
      exit={{ scale: 0 }}
      className={"AddCard h-100 w-100 rounded-3xl bg-white shadow-xl shadow-black/40 flex flex-col"}>
      <header className={"h-20 w-full rounded-t-3xl flex justify-between items-center"}>
        <p className={"ml-6 text-cyan-500 font-bold text-2xl"}>Add New Task</p>
        <BsX className={"mr-5 text-3xl cursor-pointer"} onClick={() => setShowAddCard(false)} />
      </header>
      <main className={"text-center"}>
        <p className={"text-left ml-6 mb-2 font-bold font-sans text-lg"}>Task Description</p>
        <div>
          <textarea
            onKeyUp={e=> (e.key === "Enter") && handleAddTask()}
            placeholder={"e.g School Home Work"}
            value={newTask}
            ref={textAreaRef}
            onChange={e => setNewTask(e.target.value)}
            className={"w-90 h-40 rounded-2xl p-3 border-2 border-gray-300 font-serif text-lg resize-none focus:outline-none"} />
        </div>
      </main>
      <footer className={'h-20 w-full flex justify-center items-center gap-x-5'}>
        <button className={'addCardbtns bg-red-500'} onClick={() => setShowAddCard(false)}>Cancel</button>
        <button className={'addCardbtns bg-cyan-500'} onClick={handleAddTask}>Add Task</button>
      </footer>
    </motion.div>
  </div>)
}