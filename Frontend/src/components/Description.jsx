import { FaPlus } from "react-icons/fa";
import React, {useEffect, useState} from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function Description() {
  const [totalTask, setTotalTask] = useState(0);
  const [pendingTask, setPendingTask] = useState(0);
  const [completed, setCompleted] = useState(0);
  const {tasks, showAddCard, setShowAddCard } = useContext(AppContext);

  useEffect(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === true).length;
    const pending = total - completed;

    setTotalTask(total);
    setCompleted(completed);
    setPendingTask(pending);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);


  return <div className={"h-60 w-full flex flex-col justify-center items-center"}>
    <div
      className={"card w-250 h-30 mt-10 shadow-lg shadow-black/60 rounded-4xl flex justify-evenly items-center gap-x-5"}>
      <div>
        <h1 className={"text-center font-bold text-purple-500 text-4xl"}>{totalTask}</h1>
        <p>Total Task</p>
      </div>
      <div>
        <h1 className={"text-center font-bold text-green-500 text-4xl"}>{completed}</h1>
        <p>Completed</p>
      </div>
      <div>
        <h1 className={"text-red-500 font-bold text-center text-4xl"}>{pendingTask}</h1>
        <p>Pending</p>
      </div>
    </div>
    <div className={"flex justify-end mt-5 items-center gap-x-5"}>
      <button onClick={() => setShowAddCard(true)} className={"cursor-pointer flex justify-center items-center bg-orange-500 p-2 rounded-2xl font-bold text-white text-lg"}>
        <FaPlus className={"inline "} /> Add New Task
      </button>
    </div>
  </div>;
}