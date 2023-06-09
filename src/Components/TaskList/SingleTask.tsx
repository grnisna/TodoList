import React, { FC, useState } from "react";
import Todo from "../Model/Model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../Styles/Style.css";

interface Props {
  task: Todo;
  allTask: Todo[];
  setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTask: FC<Props> = ({ task, allTask, setAllTask }) => {
  const handleDone = (id: number) => {

    const matchId = allTask.map((element) =>
      element.id === id ? { ...task, isFinish: !task.isFinish } : element
    );

    setAllTask(matchId);
  };

  
  return (
    <form className="single_task">
      {task.isFinish ? (
        <span className="single_task_text_finish">{task.todo}</span>
      ) : (
        <span className="single_task_text">{task.todo}</span>
      )}
      <div className="all_icons">
        <span className="icons">
          <AiFillEdit />
        </span>
        <span className="icons">
          <AiFillDelete />
        </span>
        <span className="icons" onClick={() => handleDone(task.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
