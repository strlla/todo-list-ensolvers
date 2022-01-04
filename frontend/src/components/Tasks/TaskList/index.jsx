import React from "react";
import Task from "../Task";
import { useTasks } from "../../../contexts/TaskContext";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
