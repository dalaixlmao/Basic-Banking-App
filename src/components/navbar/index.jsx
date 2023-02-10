import React from "react";
import './navbar.css';
function Navbar()
{
    return (
       <div className="nav">
        <div className="nav_left">
            <h2>View All Customers</h2>
            <h2>View Database</h2>
            <h2 style={{paddingRight:"2rem"}}>About App</h2>
        </div>
            
        <div className="nav_right">
        <button>Contact Us</button>
        </div>
       </div>

    );
}
export default Navbar;