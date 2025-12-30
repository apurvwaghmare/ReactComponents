import React, { useState } from "react";
import logo from "../Assets/instalogo.png";
import "./Form.css";
const Form = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    mob: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};

    if (!user.userName) newError.userName = "Please enter username";
    else if (user.userName.length < 3 || user.userName.length > 15)
      newError.userName = "username length must be between 3 and 15";
    if (!user.email) newError.email = "Please enter email";
    else if (user.email.indexOf("@") === 0) newError = "invalid email";
    else if (
      user.email.charAt(user.email.length - 4) !== "." &&
      user.email.charAt(user.email.length - 3) !== "."
    )
      newError.email = "invalid email";
    if (!user.mob) newError.mob = "Please enter mobile number";
    else if (isNaN(user.mob)) newError.mob = "please enter digit only";
    if (!user.password) newError.password = "Please enter password";
    else if (user.password.length <= 8 || user.password.length >= 15)
      newError.password = "password length must be between 8 and 15";
    if (!user.confirmPassword)
      newError.confirmPassword = "Please confirm password";
    else if (user.password !== user.confirmPassword)
      newError.confirmPassword = "password did not match";
    else setFlag(true);

    setError(newError);
  };

  return (
    <div className="form-wrapper">
      {flag && (
        <h1 className="success-msg">
          {user.userName} you have registered successfully!
        </h1>
      )}
      <div className="form-container">
        <div className="insta-logo">
          <img src={logo} alt="" style={{ width: "200px" }} />
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              onChange={handleChange}
              value={user.userName}
              name="userName"
              autoComplete="off"
            />
            {error.userName && (
              <span
                style={{
                  color: "red",
                  marginTop: "4px",
                  fontSize: "20px",
                  display: "block",
                }}
              >
                {error.userName}
              </span>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              onChange={handleChange}
              value={user.email}
              name="email"
              autoComplete="off"
            />
            {error.email && (
              <span
                style={{
                  color: "red",
                  marginTop: "4px",
                  fontSize: "20px",
                  display: "block",
                }}
              >
                {error.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Mobile Number"
              onChange={handleChange}
              value={user.mob}
              name="mob"
              autoComplete="off"
            />
            {error.mob && (
              <span
                style={{
                  color: "red",
                  marginTop: "4px",
                  fontSize: "20px",
                  display: "block",
                }}
              >
                {error.mob}
              </span>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
              name="password"
              autoComplete="off"
            />
            {error.password && (
              <span
                style={{
                  color: "red",
                  marginTop: "4px",
                  fontSize: "20px",
                  display: "block",
                }}
              >
                {error.password}
              </span>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={user.confirmPassword}
              name="confirmPassword"
              autoComplete="off"
            />
            {error.confirmPassword && (
              <span
                style={{
                  color: "red",
                  marginTop: "4px",
                  fontSize: "20px",
                  display: "block",
                }}
              >
                {error.confirmPassword}
              </span>
            )}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );

  // // handling form using comtrolled components using {useState}
  // const [firstName, setFirstName] = useState("arun");
  // const handleChange = (e) => {
  //     setFirstName(e.target.value);
  // }

  // // handling form using uncomtrolled components {useRef}
  // const inputRef = useRef();
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(inputRef.current.value);
  // }
  // return (
  //     <div>
  //         <form>
  //             <label>First name:</label>
  //             <input type="text" name="fname" value={firstName} onChange={handleChange}/>
  //             <br />
  //         </form>

  //          <form onSubmit={handleSubmit}>
  //             <label>Last name:</label>
  //             <input type="text" ref={inputRef}/>
  //             <br />
  //             <button type="submit">Submit</button>
  //         </form>
  //     </div>
  // );
};

export default Form;
