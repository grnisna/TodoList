import React, { FC, useState } from 'react';
import './App.css';
import InputField from './Components/InputField/InputField';
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

  const [todo, setTodo]  = useState<string>('')
  console.log(todo);


  return (
    <div className="App">
      <h1 className='heading'>Note To Do chat</h1>
      <InputField todo={todo} setTodo={setTodo}  />
    </div>
  );
}

export default App;
