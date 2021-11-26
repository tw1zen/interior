import React from "react"
import "./App.css"
import Menu from "./Components/Menu"
import Showcase from "./Components/Showcase"
import Services from "./Components/Services"
import Design from "./Components/Design"
import Packages from "./Components/Packages"
import Contact from "./Components/Contact"
import Footor from "./Components/Footor"
function App() {
  return (
    <>
      <Menu />
      <div className="main">
        <h1>Interior Desing</h1>
        <Showcase />
        <Services />
        <Design />
        <Packages />
        <Contact />
        <Footor />
      </div>
    </>
  )
}

export default App
