import React from "react";
import "./Header.css";
import pumaLogo from "../Assets/pumaLogo.png";

const Header = () => {
  return (
    <div className = "header">
        <div>
            <img src = {pumaLogo} alt="pumaLogo" style={{width:"80px"}}></img>
        </div>
        <div className = "listItem">
            <ul>
                <li>New</li>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Sports</li>
            </ul>
        </div>
    </div>
  );  
};

export default Header;