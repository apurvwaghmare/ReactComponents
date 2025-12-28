import React, { useState } from "react";

const Hooks = () => {
    // const num = [1, 2, 3];
    // const [number, setNumber] = useState(num);

    // const handleAdd = () => {
    //     setNumber([...number, 4, 5, 6])
    // }

    // const user = {
    //     name: "apurv",
    //     age: 22
    // };

    // const [data, setData] = useState([
    //     {id: 0, name: "apurv", age: 22},
    //     {id: 1, name: "asmi", age: 18},
    //     {id: 2, name: "prasiddha", age: 18},
    //     {id: 3, name: "kaustubh", age: 16},

    // ]);
    // const handleChange = () => {
    //     setData(prev => 
    //         prev.map((item, index) => 
    //             index === 2 ? {...item, name:"arun", age:60} : item
    //         )
    //     );
    // };

    const [isOn, setIsOn] = useState(false);
    const handleChange = () => {
        setIsOn(!isOn);
    }
    return (
        <div>
            {/* <p>number {number}</p>
            <button onClick={handleAdd}>Add</button> */}
            {/* {data.map((user, idx) => (
                <p key={idx}>
                    {user.name} - {user.age}
                </p>
            ))} */}

            {/* <p>My name is {data[2].name} and my age is {data[2].age}.</p> */}
            {/* <button onClick={handleChange}>update User</button> */}

            <p>{isOn ? "Yes" : "No"}</p>
            <button onClick={handleChange}>check</button>
        </div>
    )
};

export default Hooks;










// const num = [1, 2, 3];
// const num2 = [...num, 4, 5, 6, 7];
// console.log(num2);

// const user = {
//     name: "apurv", 
//     age: 22
// };

// const updatedUser = {
//     ...user, 
//     age: 23
// };
// console.log(updatedUser);