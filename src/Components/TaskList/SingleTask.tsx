import React, { FC } from 'react';
import Todo from '../Model/Model';


interface Props {
    task:Todo;
    allTask:Todo[];
    setAllTask:React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTask:FC<Props> = ({task, allTask, setAllTask}) => {
    return (
        <div>
            <p>{task.todo}</p>
        </div>
    );
};

export default SingleTask;