import React, { FC, FormEvent, useEffect, useRef, useState } from "react";
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.todo);

  // handle completed icon
  const handleDone = (id: number) => {
    const matchId = allTask.map((element) =>
      element.id === id ? { ...task, isFinish: !task.isFinish } : element
    );
    setAllTask(matchId);
  };

  // handle delete icons
  const handleDelete = (id: number) => {
    const filterId = allTask.filter((element) => element.id !== id);
    setAllTask(filterId);
  };

  // handle Edit icons
  const handleEdit = (e:FormEvent, id:number) => {
    e.preventDefault();

    const editText= allTask.map(todo => todo.id === id?{...task, todo:editTask} : todo);

    setAllTask(editText);
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect( ()=>{
    inputRef.current?.focus();
  } ,[edit])

  return (
    <form className="single_task" onSubmit={(e) => handleEdit(e, task.id)}>
      {edit ? (
        <input
        ref={inputRef}
          type="text"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          className="edit_input"
        />
      ) : task.isFinish ? (
        <span className="single_task_text_finish">{task.todo}</span>
      ) : (
        <span className="single_task_text">{task.todo}</span>
      )}

      <div className="all_icons">
        <span
          className="icons"
          onClick={() => {
            if (!edit && !task.isFinish) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icons" onClick={() => handleDelete(task.id)}>
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
