import React, { FC } from 'react';
import "../Styles/Style.css";

interface Props{
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    todo:string;
}


const InputField:FC<Props> = ({todo, setTodo}) => {
    return (
        <form className='input'>
            <input type="input"
             className='input_box' 
             placeholder='Enter To Do'
             value={todo}
             onChange={(e) => setTodo(e.target.value)}
              />
            <button type='submit'   className='input_submit'>Go</button>
            
        </form>
    );
};

export default InputField;