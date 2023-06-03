import React from 'react';
import './App.css';

let name : string;
name= "nasir";

// union typescript 
let age : number | string; 

let isLearner : boolean;
let hobbies : string[];
let role : [number , string];

// type Person = {
//   name: string,
//   age? : number
// }

// let person : Person = {
//   name:"nisan",
//   age: 55
// }

function printName(name:string) {
  console.log(name)
}
printName("salman muktadir");


function App() {
  return (
    <div className="App">
      <h1>To Do list</h1>
    </div>
  );
}

export default App;
