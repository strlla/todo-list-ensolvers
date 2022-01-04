import React, { useState } from "react";
import { useFolders } from "../../../contexts/FolderContext";

const CreateFolder = () => {
  const [name, setName] = useState("");
  const { createFolder } = useFolders();

  const handleClick = () => {
      if(name){
        createFolder(name)
      }
  }
  return (
    <div className="createfolder-wrapper">
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Create folder</button>
    </div>
  );
};

export default CreateFolder;
