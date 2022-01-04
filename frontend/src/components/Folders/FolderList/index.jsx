import React from "react";
import { useFolders } from "../../../contexts/FolderContext";
import Folder from "../Folder";

const FolderList = () => {
  const { folders } = useFolders();
  return (
    <div>
      <ul>
        {folders.map((folder) => (
          <Folder folder={folder} key={folder.id}/>
        ))}
      </ul>
    </div>
  );
};

export default FolderList;
