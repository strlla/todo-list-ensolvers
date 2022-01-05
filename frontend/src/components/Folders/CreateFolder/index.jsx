import React, { useState } from "react";
import { useFolders } from "../../../contexts/FolderContext";

const CreateFolder = () => {
  const [name, setName] = useState("");
  const { createFolder } = useFolders();

  const handleClick = () => {
    if (name) {
      createFolder(name);
      setName("");
    }
  };
  return (
    <div className="createfolder-wrapper">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New folder"
      />
      <button onClick={handleClick}>Create</button>
    </div>
  );
};

export default CreateFolder;
