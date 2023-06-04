import React, { FC, useState } from 'react';

interface Props{
    name:string,
    age:number
    counter:number;
    setCounter:React.Dispatch<React.SetStateAction<number>>
}

const User :FC<Props> = ({name, age, counter, setCounter}) => {

const handleIncrease = (): void =>{
    setCounter(counter + 1)
}
const handleDecrease = (): void =>{
    setCounter(counter - 1)
}

    return (
        <div>
            <h1>your name : {name}</h1>
            <h1>your age : {counter}</h1>
            <button onClick={handleIncrease}>increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            
        </div>
    );
};

export default User;