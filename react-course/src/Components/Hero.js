import React from "react";
import "./Hero.css";
import shoes from "../Assets/shoes.png";
const Hero = () => {
    return (
        <div className = "hero">
            <h2 style={{textAlign:"center"}}>TRENDING NOW</h2>
            <div style={{border:"2px solid gray", width:"250px", padding:"5px 5px"}}>
                <div>
                    <img src={shoes} alt="shoes" style={{ marginLeft: "20px" }} />
                </div>
                <div className = "shoes" style={{display:"flex"}}>
                    <p>Blktop Rider Suede Sneakers</p>
                    <p>₹8,099</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;