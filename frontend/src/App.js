import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import LeadershipExperience from "./components/LeadershipExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Literacy from "./components/Literacy";
import ContentCreation from "./components/ContentCreation";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <LeadershipExperience />
        <Skills />
        <Projects />
        <Literacy />
        <ContentCreation />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
