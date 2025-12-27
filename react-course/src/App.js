import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <div className = "shoe">
                <Hero/>
                <Hero/>
                <Hero/>
                <Hero/>
                <Hero/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;