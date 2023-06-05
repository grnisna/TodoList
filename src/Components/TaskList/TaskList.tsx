import React, { FC } from "react";
import Todo from "../Model/Model";
import "../Styles/Style.css"
import SingleTask from "./SingleTask";

interface Props {
  allTask: Todo[];
  setAllTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList: FC<Props> = ({ allTask, setAllTask }) => {
  return (
    <div className="allTask">
      {allTask.map((task, index) => (
        <SingleTask task={task} key={index} allTask={allTask} setAllTask={setAllTask}  />
      ))}
    </div>
  );
};

export default TaskList;
