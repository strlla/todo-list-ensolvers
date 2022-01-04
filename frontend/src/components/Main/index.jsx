import React from 'react';
import Tasks from "../Tasks";
import Folders from "../Folders";
import './index.scss';

const Main = () => {
    return <main>
        <h1>To-Do-List</h1>
        <div className='todo-wrapper'>
            <Folders/>
            <Tasks/>
        </div>
    </main>
}

export default Main;