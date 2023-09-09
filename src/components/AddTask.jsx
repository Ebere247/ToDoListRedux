import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Actions/taskActions";

const AddTask = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(addTask(newTask));
      setNewTask("");
    }
  };

  return (
    <div className="flex gap-4 border-b-2 border-gray-800 pb-8">
      <input
        type="text"
        className="px-2 text-sm focus:outline-none"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="px-5 py-2 rounded-xl bg-black text-white" onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
