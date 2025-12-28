// import React from "react";
// import {useState} from "react";

// const Hooks = () => {

//     const[counter, setCount] = useState(0);

//     const handlePlus= () => {
//         setCount(counter + 1);
//     };

//     return (
//         <div>
//             <p>number {counter}</p>
//             <button onClick={handlePlus}>add</button>
//         </div>
//     )
// }

// export default Hooks;

import React, { useState } from "react";

const Hooks = () => {
    const [counter, setCount] = useState(0);

    const handlePlus = () => {
        setCount(prev => prev + 1);
    };

    const [name, setName] = useState("apurv");
    const changeName= () => {
        setName(prev => prev === "apurv" ? "asmi" : "apurv");
    };

    return (
        <div>
            <h1>{name}</h1>
            <p>number {counter}</p>
            <button onClick={handlePlus}>add</button>
            <button onClick={changeName}>changeName</button>
        </div>
    );
};

export default Hooks;
