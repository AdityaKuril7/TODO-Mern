import React, { useContext } from "react";
import { FaCheck, FaCheckSquare } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
function Navbar() {
  const { state } = useContext(AppContext);
  return (
    <div
      className={
        "h-20 w-full bg-white shadow-xl flex justify-between items-center"
      }
    >
      <div className={"flex items-center gap-x-3 pl-5"}>
        <FaCheckSquare className={"text-4xl text-orange-500"} />
        <h1 className={`text-4xl text-orange-500 font-bold `}>TODO</h1>
      </div>
      <div className={"mr-5 p-3 rounded-full"}>
        <h1 className={"text-4xl font-bold text-orange-500"}>
          {state?.username}
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
