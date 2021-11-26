import React from "react";
import "../App.css"
import KitchenCocrete from "../img/kitchenconcrete.jpg"
import Atrium from "../img/atrium.jpg"
import LivingRoom from "../img/livingroom.jpg"
import DiningRoom from "../img/diningroom.jpg"
import BedRoom from "../img/bedroom.jpg"
import LivingRoom2 from "../img/livingroom2.jpg"

function Showcase() {
    return (
        <div id="showcase">
          <h2>Showcase.</h2>
          <hr />
          <div className="images">
            <img src={KitchenCocrete} />
            <img src={Atrium} />
            <img src={LivingRoom} />
            <img src={DiningRoom} />
            <img src={BedRoom} />
            <img src={LivingRoom2} />
          </div>
        </div>
    )
}

export default Showcase