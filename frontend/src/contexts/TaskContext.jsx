import React, { createContext, useState, useContext, useEffect } from "react";
import { useFolders } from "./FolderContext";
import { v4 } from "uuid";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState("");
  const { selectedFolder, selectFolder } = useFolders();

  useEffect(() => {
    if (selectedFolder) {
      setFilteredTasks(
        tasks.filter((task) => task.folderId === selectedFolder.id)
      );
    }
  }, [selectedFolder, tasks]);

  const saveTaskToEdit = (task) => {
    setTaskToEdit(task);
    setIsEdit(true);
  };

  const toggleEdit = (task = "") => {
    if (!isEdit) {
      if (task) {
        saveTaskToEdit(task);
      }
    } else {
      if (task && taskToEdit?.id !== task?.id) {
        saveTaskToEdit(task);
      } else {
        setIsEdit(false);
      }
    }
  };

  const addTask = (task, folderId) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        text: task,
        completed: false,
        folderId,
      },
    ]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    if (tasks.length === 0) {
      // selectFolder("");
    }
  };

  const changeStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (text) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskToEdit.id ? { ...task, text } : task
      )
    );
    setTaskToEdit({ ...taskToEdit, text });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks,
        changeStatus,
        addTask,
        removeTask,
        editTask,
        isEdit,
        toggleEdit,
        taskToEdit,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
