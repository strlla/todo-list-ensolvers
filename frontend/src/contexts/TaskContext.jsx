import React, { createContext, useState, useContext, useEffect } from "react";
import { useFolders } from "./FolderContext";
import http from "../http.common";
import { v4 } from "uuid";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState("");
  const { folders, selectedFolder, selectFolder } = useFolders();

  const fetchTasks = async () => {
    const { data } = await http.get("/tasks");
    setTasks(data);
  };

  const saveTask = async (data) => {
    const response = await http({
      method: "post",
      url: "/tasks",
      data: JSON.stringify(data),
    });
    return response;
  };

  const deleteTask = async (taskId) => {
    const response = await http.delete(`/tasks/${taskId}`);
    return response;
  };

  const updateTaskStatus = async (taskId, completed) => {
    const response = await http({
      method: "patch",
      url: `/tasks/${taskId}`,
      data: JSON.stringify({ completed }),
    });
    return response;
  };

  const updateTaskText = async (taskId, text) => {
    const response = await http({
      method: "patch",
      url: `/tasks/${taskId}`,
      data: JSON.stringify({ text }),
    });
    return response;
  };

  useEffect(() => {
    if (tasks.length > 0) {
      setFilteredTasks(
        tasks.filter((task) => task.folderId === selectedFolder.id)
      );
    }
  }, [tasks]);

  useEffect(async () => {
    if (selectedFolder) {
      await fetchTasks();
      setFilteredTasks(
        tasks.filter((task) => task.folderId === selectedFolder.id)
      );
    }
  }, [selectedFolder]);

  useEffect(() => {
    if (!folders.find((folder) => folder.id === selectedFolder.id)) {
      setIsEdit(false);
    }

    if (folders.length === 0) {
      selectFolder("");
    }
  }, [folders]);

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

  const addTask = (text, folderId) => {
    const id = v4();
    setTasks([
      ...tasks,
      {
        id,
        text,
        completed: false,
        folderId,
      },
    ]);
    const data = {
      id,
      text,
      completed: false,
      folderId,
    };
    saveTask(data);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    if (tasks.length === 0) {
      selectFolder("");
    }
    deleteTask(taskId);
  };

  const changeStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    updateTaskStatus(taskId, !tasks.find((t) => t.id === taskId).completed);
  };

  const editTask = (text) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskToEdit.id ? { ...task, text } : task
      )
    );
    setTaskToEdit({ ...taskToEdit, text });
    updateTaskText(taskToEdit.id, text);
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
