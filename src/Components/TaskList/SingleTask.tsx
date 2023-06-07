import React, { FC } from "react";
import Todo from "../Model/Model";
import { AiFillEdit ,AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../Styles/Style.css";

interface Props {
  task: Todo;
  allTask: Todo[];
  setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTask: FC<Props> = ({ task, allTask, setAllTask }) => {
  return (
    <form className="single_task">
      <span className="single_task_text">{task.todo}</span>
      <div className="all_icons">
        <span className="icons">
          <AiFillEdit />
        </span>
        <span className="icons">
          <AiFillDelete />
        </span>
        <span className="icons">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
