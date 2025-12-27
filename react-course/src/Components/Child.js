import React from "react";

const Child = (props) => {
    return (
        <div>
            <h1>
                Hello {props.name}!
            </h1>
            <h1>
                How are {props.name2}
            </h1>
        </div>
    );
};


export default Child;
