import React, { useState } from "react";
import { useTasks } from "../../../contexts/TaskContext";

const EditTask = () => {
  const [text, setText] = useState("");
  const { isEdit, taskToEdit, toggleEdit, editTask } = useTasks();

  return (
    isEdit && (
      <section className="edittask-wrapper">
        <div className="edittask-header">
          <h3>{`Editing task "${taskToEdit.text}"`}</h3>
          <span onClick={(e) => toggleEdit()}>X</span>
        </div>
        <div className="edittask-bottom">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="New name"
          />
          <button onClick={() => editTask(text)}>Save</button>
        </div>
      </section>
    )
  );
};

export default EditTask;
