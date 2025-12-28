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
import Hooks from "./Components/Hooks";
const App = () => {

    // const data = [{title:"Blktop Rider Suede Sneakers", price:"8099", img:shoes},
    //             {title:"Speedcat OG Sneakers", price:"9999", img:shoe2},
    //             {title:"Palermo Classic Sneakers", price:"5249", img:shoe3},
    //             {title:"Speedcat OG Sneakers", price:"9999", img:shoe4},
    //             {title:"Ascenso Sneakers", price:"6499", img:shoe5}
    // ];

    // return (
    //     <div className="app">
    //         <Header/>
    //         <div className = "shoe">
    //             <Hero title={data[0].title} price={data[0].price} img={data[0].img}/>
    //             <Hero title={data[1].title} price={data[1].price} img={data[1].img}/>
    //             <Hero title={data[2].title} price={data[2].price} img={data[2].img}/>
    //             <Hero title={data[3].title} price={data[3].price} img={data[3].img}/>
    //             <Hero title={data[4].title} price={data[4].price} img={data[4].img}/>
    //         </div>
    //         <Footer/>


    //     </div>
    // );

    const data = [
        { id: 1, title: "Blktop Rider Suede Sneakers", price: "8099", img: shoes },
        { id: 2, title: "Speedcat OG Sneakers", price: "9999", img: shoe2 },
        { id: 3, title: "Palermo Classic Sneakers", price: "5249", img: shoe3 },
        { id: 4, title: "Speedcat OG Sneakers", price: "9999", img: shoe4 },
        { id: 5, title: "Ascenso Sneakers", price: "6499", img: shoe5 }
    ];


    return (
        <div className="app">


            
            {/* <Header/>
            <div className = "shoe">

                {
                    data.map((item) => {
                        return (
                            <Hero key={item.id} title={item.title} price={item.price} img={item.img}/>
                        );
                    })
                }

            </div>
            <Footer/> */}
            
            
            <Hooks/>
        </div>
    );
};

export default App;