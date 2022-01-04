import React from "react";
import FolderList from "./FolderList";
import CreateFolder from "./CreateFolder";

const Folders = () => {
  return (
    <section className="folders">
      <CreateFolder />
      <FolderList />
    </section>
  );
};

export default Folders;
