import {React, useState, useRef, useEffect} from "react";

const UseRefHooks = () => {

    const [counter , setCounter] = useState(0);
    // const nameRef = useRef();
    // useEffect(() => {
    //     console.log(nameRef.current.innerText = "hello apurv");
    // },[])

    // useEffect(() => {
    //     setCounter(counter + 1);
    // }, [])

    const handleClick = () => {
        setCounter(counter + 1);
    }

    // changes only after counter is changed
    const countRef = useRef(0);

    useEffect(() => {
        countRef.current = countRef.current + 1;
    }, [counter]);

    return (
        <div>
            {/* <h1 ref={nameRef}></h1> */}
            <p>counterRef : {countRef.current}</p>
            <p>counterState : {counter}</p>
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default UseRefHooks;