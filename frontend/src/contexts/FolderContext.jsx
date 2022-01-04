import React, { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

const FolderContext = createContext();
export const useFolders = () => useContext(FolderContext);

const FolderProvider = ({ children }) => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");

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
