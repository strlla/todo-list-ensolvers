import React, { useState } from "react";
import { useTasks } from "../../../contexts/TaskContext";
import { useFolders } from "../../../contexts/FolderContext";

const AddTask = () => {
    const [task, setTask] = useState('');
    const { addTask } = useTasks();
    const {selectedFolder} =useFolders();

    const handleClick = () => {
        if(task){
            addTask(task, selectedFolder.id)
        }
    }

    return <div className="addtask-wrapper">
        <input type="text" name="task" id="" onChange={(e)=>setTask(e.target.value)} value={task} />
        <button onClick={handleClick}>Add</button>
    </div>
}

export default AddTask