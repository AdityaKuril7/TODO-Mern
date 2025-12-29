import React, { useEffectEvent } from "react";
import Navbar from "../components/Navbar.jsx";
import { Description } from "../components/Description.jsx";
import { Task } from "../components/Task.jsx";
import { AddCard } from "../components/AddCard.jsx";
import { AppContext } from "../context/AppContext.js";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {DeleteAleartCard} from "../components/DeleteAleartCard.jsx";
function Home() {
  const location = useLocation();
  const state = location.state;
  const [tasks, setTasks] = useState([]);
  const [showAddCard, setShowAddCard] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [aleartDelete, setAleartDelete] = useState(false);
  const fetchUserTasks = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/task/getUserTask/${state?.userId}`
      );
      console.log(res.data);
      setTasks(res.data.tasks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserTasks();
    return () => {
      return;
    };
  }, []);

  return (
    <AppContext
      value={{aleartDelete, setAleartDelete,tasks,fetchUserTasks, setTasks, showAddCard, setShowAddCard, state, newTask, setNewTask }}
    >
      <div className={"h-screen w-screen flex flex-col"}>
        <Navbar />
        <main className={"flex-1 w-full flex flex-col items-center"}>
          <Description />
          {aleartDelete && <DeleteAleartCard />}
          <AnimatePresence>
          {tasks.map((tsk)=>(
            <Task key={tsk._id} Task={tsk.task} Status={tsk.status} Id={tsk._id} CreatedAt={tsk.createdAt} />
          ))}
          </AnimatePresence>
        </main>
        <AnimatePresence mode="wait">{showAddCard && <AddCard />}</AnimatePresence>
      </div>
    </AppContext>
  );
}

export default Home;
