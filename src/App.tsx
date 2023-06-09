import React, { FC, FormEvent, useState } from 'react';
import './App.css';
import InputField from './Components/InputField/InputField';
import Todo from './Components/Model/Model';
import TaskList from './Components/TaskList/TaskList';
// import Counter from './Components/Counter';
// import Users from './Components/Users';

// let name : string;
// name= "nasir";

// // union typescript 
// let age : number | string; 

// let isLearner : boolean;
// let hobbies : string[];
// let role : [number , string];

// interface Person  {
//   name: string,
//   age? : number
// }

// // let person : Person = {
// //   name:"nisan",
// //   age: 55
// // }

// function printName(name:string) {
//   console.log(name)
// }
// printName("salman muktadir");


const App:FC =  () => {

  const [todo, setTodo]  = useState<string>('');
  const [allTask, setAllTask] = useState<Todo[]>([]);

  const handleAdd = (e:FormEvent) =>{
    e.preventDefault();

    if(todo){
      setAllTask([...allTask, {id: Date.now(), todo, isFinish:false}]);
      setTodo('');
    }
  }


  return (
    <div className="App">
      <h1 className='heading'>Note To Do chat</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      
      <TaskList allTask={allTask} setAllTask={setAllTask} />
    </div>
  );
}

export default App;
