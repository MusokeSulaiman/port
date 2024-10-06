import React from "react";
import Navbar from "./pages/Navbar/Navbar";
import HeroSection from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Projects from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
