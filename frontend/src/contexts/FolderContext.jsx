import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";

const FolderContext = createContext();
export const useFolders = () => useContext(FolderContext);

const FolderProvider = ({ children }) => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");

  const fetchFolders = async () => {
    const { data } = await axios.get(`http://localhost:8000/folders`);
    console.log(data);
    setFolders(data);
  }

  useEffect(() => {
    fetchFolders();
  }, []);

  const selectFolder = (folder) => {
    setSelectedFolder(folder);
  };

  const createFolder = (folder) => {
    setFolders([
      ...folders,
      {
        id: v4(),
        name: folder,
      },
    ]);
  };

  const removeFolder = (folderId) => {
    setFolders(folders.filter((folder) => folder.id !== folderId));
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
