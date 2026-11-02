import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Projectdata from "./data/Projectdata";

function App(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects Projects={Projectdata}/>
      <Footer/>
    </>
  )
}
export default App