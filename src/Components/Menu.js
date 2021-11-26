import React from "react";
import "../App.css"

function Menu() {
    return (
        <div className="menu">
            <h3>Company Name</h3>
            <div>
                <a href="#home">Home</a>
                <a href="#showcase">Showcase</a>
                <a href="#services">Services</a>
                <a href="#desing">Designers</a>
                <a href="#packages">Packages</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Menu