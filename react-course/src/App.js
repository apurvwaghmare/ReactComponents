import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import shoes from "./Assets/shoes.png";
import shoe2 from "./Assets/shoe2.png";
import shoe3 from "./Assets/shoe3.png";
import shoe4 from "./Assets/shoe4.png";
import shoe5 from "./Assets/shoe5.png";
const App = () => {
    return (
        <div className="app">
            <Header/>
            <div className = "shoe">
                <Hero title="Blktop Rider Suede Sneakers" price="8099" img={shoes}/>
                <Hero title="Speedcat OG Sneakers" price="9999" img={shoe2}/>
                <Hero title="Palermo Classic Sneakers" price="5249" img={shoe3}/>
                <Hero title="Speedcat OG Sneakers" price="9999" img={shoe4}/>
                <Hero title="Ascenso Sneakers" price="6499" img={shoe5}/>
            </div>
            <Footer/>


        </div>
    );
};

export default App;