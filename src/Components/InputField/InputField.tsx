import React, { FC, FormEvent, useRef } from "react";
import "../Styles/Style.css";

interface Props {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todo: string;
  handleAdd: (e: FormEvent) => void;
}

const InputField: FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputFieldRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputFieldRef.current?.blur();
      }}
    >
      <input
        type="input"
        ref={inputFieldRef}
        className="input_box"
        placeholder="Enter To Do"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
