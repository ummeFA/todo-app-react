import React from "react";
import notepad from "../assets/images/notepad.png";
const Todo = () => {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* Title */}
      <div className="flex items-center mt-7 gap-2 ">
        <img className="w-10" src={notepad} alt=""></img>
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* Input Box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          type="text"
          placeholder="Add Your Task"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        />
        <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg  font-medium cursor-pointer">
          Add +
        </button>
      </div>
    </div>
  );
};

export default Todo;
