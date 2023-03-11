import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutMe from "./components/pages/AboutMe";
import "../src/App.scss"
import Home from "./components/pages/Home";
import Header from "./components/components/Header";
import Portfolio from "./components/pages/Portfolio";
import TechStack from "./components/pages/TechStack";
import ContactMe from "./components/pages/ContactMe";


const App = () =>{
  return(
    <BrowserRouter>
      <div className="background">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/techstack" element={<TechStack />} />
            <Route path="/contactme" element={<ContactMe />} />
          </Routes>
      </div>
      
    </BrowserRouter>
  )}
  export default App