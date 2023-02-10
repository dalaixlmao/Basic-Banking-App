import React from "react";
import './home.css';
import mobile from '../assets/mobile.svg';
function Home()
{
    return (
       <div className="home">
        <div className="home_left" >
            <h1 style={{color:"#B1D945"}}>Basic</h1>
            <h1>Banking <span style={{color:"#B1D945"}}>App</span></h1>
            <button>Get Started</button>
        </div>
            
        <div className="home_right">
        <img className="mobile" src={mobile}></img>
        </div>
       </div>

    );
}
export default Home;