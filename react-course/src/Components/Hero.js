import React from "react";
import "./Hero.css";
// import shoes from "../Assets/shoes.png";
// import shoe2 from "../Assets/shoe2.png";
// import shoe3 from "../Assets/shoe3.png";
// import shoe4 from "../Assets/shoe4.png";
// import shoe5 from "../Assets/shoe5.png";
const Hero = ({title, price, img}) => {
    return (
        <div className = "hero">
            <h2 style={{textAlign:"center"}}>TRENDING NOW</h2>
            <div style={{border:"2px solid gray", width:"250px", padding:"5px 5px"}}>
                <div>
                    <img src={img} alt="shoes" style={{ marginLeft: "20px" }} />
                </div>
                <div className = "shoes" style={{display:"flex"}}>
                    <p>{title}</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;