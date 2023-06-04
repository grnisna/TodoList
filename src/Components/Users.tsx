import React, { useState } from 'react';
import User from './User';

const Users = () => {

    
    const [counter , setCounter] = useState(0);

    return (
        <div>
            <User name="nisan" age={33} counter={counter} setCounter={setCounter}  />
        </div>
    );
};

export default Users;