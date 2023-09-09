import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleTask } from "../Actions/taskActions";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedTask.trim() !== "") {
      dispatch(editTask(task.id, editedTask));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
        disabled={isEditing}
      />
      {isEditing ? (
        <div className="flex gap-5 items-center">
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button className="py-2 px-5 bg-green-600 rounded-lg text-white" onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <span>{task.description}</span>
          <button className="py-2 px-3 bg-gray-700 rounded-lg text-white" onClick={handleEdit} disabled={task.isDone}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
