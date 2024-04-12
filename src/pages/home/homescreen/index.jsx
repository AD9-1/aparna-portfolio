import React from "react";
import Hero from "../Hero";
import Skills from "../Skills";
import AboutMe from "../AboutMe";
import PortFolio from "../PortFolio";
import Experience from "../Experience";
import Contact from "../Contact";
import Navbar from "../Navbar";
import Footer from "../Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <AboutMe />
      <PortFolio />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
