import React from "react";
import { useTasks } from "../../../contexts/TaskContext";

const Task = ({ task }) => {
  const { changeStatus, removeTask, toggleEdit } = useTasks();

  return (
    <li>
      <input
        type="checkbox"
        name=""
        onChange={() => changeStatus(task.id)}
        checked={task.completed}
      />
      <span>{task.text}</span>
      <button onClick={() => toggleEdit(task)}>Edit</button>
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
};

export default Task;
