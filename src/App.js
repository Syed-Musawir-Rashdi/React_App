import React from "react";
import Header from "./components/hero section/Header"
import About from "./components/about section/About"
import Career from "./components/career section/Career";
import Services from "./components/services section/Services";
import Skill from "./components/skills section/Skill";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Brands from "./components/brands/Brands";
import Contact from "./components/contacts/Contacts";
function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Career/>
      <Services/>
      <Skill/>
      <Portfolio/>
      <Testimonial/>
      <Brands/>
      <Contact/>
    </div>
  );
}

export default App;
