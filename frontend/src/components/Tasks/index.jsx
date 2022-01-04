import React from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import { useFolders } from "../../contexts/FolderContext";

const Tasks = () => {
  const { selectedFolder } = useFolders();

  return (
    selectedFolder && (
      <section className="tasks">
          <h2>{`Folders > ${selectedFolder.name}`}</h2>
        <AddTask />
        <TaskList />
        <EditTask />
      </section>
    )
  );
};
export default Tasks;
