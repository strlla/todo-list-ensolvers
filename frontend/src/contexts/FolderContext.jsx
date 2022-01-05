import React, { createContext, useState, useContext, useEffect } from "react";
import http from "../http.common";
import { v4 } from "uuid";

const FolderContext = createContext();
export const useFolders = () => useContext(FolderContext);

const FolderProvider = ({ children }) => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");

  const fetchFolders = async () => {
    const { data } = await http.get(`/folders`);
    setFolders(data);
  };

  const saveFolder = async (data) => {
    const response = await http({
      method: "post",
      url: "/folders",
      data: JSON.stringify(data),
    });
    return response;
  };

  const deleteFolder = async (folderId) => {
    const response = await http.delete(`/folders/${folderId}`);
    return response;
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  const selectFolder = (folder) => {
    setSelectedFolder(folder);
  };

  const createFolder = (folder) => {
    const id = v4();
    setFolders([
      ...folders,
      {
        id,
        name: folder,
      },
    ]);
    const data = {
      id,
      name: folder,
    };
    saveFolder(data);
  };

  const removeFolder = (folderId) => {
    setFolders(folders.filter((folder) => folder.id !== folderId));
    deleteFolder(folderId);
  };

  return (
    <FolderContext.Provider
      value={{
        folders,
        createFolder,
        removeFolder,
        selectFolder,
        selectedFolder,
      }}
    >
      {children}
    </FolderContext.Provider>
  );
};

export default FolderProvider;
