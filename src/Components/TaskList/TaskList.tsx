import React, { FC } from 'react';
import Todo from '../Model/Model';

interface Props{
    allTask:Todo[];
    setAllTask:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TaskList:FC<Props> = ({allTask, setAllTask}) => {
    return (
        <div>
            {
                allTask.map(task => <li>{task.todo}</li>)
            }
        </div>
    );
};

export default TaskList;