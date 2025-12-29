import React, {useState, useRef} from "react";

const Form = () => {

    // handling form using comtrolled components using {useState}
    const [firstName, setFirstName] = useState("arun");
    const handleChange = (e) => {
        setFirstName(e.target.value);
    }

    // handling form using uncomtrolled components {useRef}
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <form>
                <label>First name:</label>
                <input type="text" name="fname" value={firstName} onChange={handleChange}/>
                <br />
            </form>

             <form onSubmit={handleSubmit}>
                <label>Last name:</label>
                <input type="text" ref={inputRef}/>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
