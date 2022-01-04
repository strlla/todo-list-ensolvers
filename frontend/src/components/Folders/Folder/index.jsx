import React from "react";
import { useFolders } from "../../../contexts/FolderContext";

const Folder = ({ folder }) => {
  const { removeFolder, selectFolder } = useFolders();

  return (
    <li>
      <span>{folder.name}</span>
      <button onClick={()=> selectFolder(folder)}>View items</button>
      <button onClick={() => removeFolder(folder.id)}>Remove</button>
    </li>
  );
};
export default Folder;
