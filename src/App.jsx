import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./components/Projects";
import Contact from "./pages/Contact";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div>
      {/* Navbar Component */}
      <NavBar />

      {/* Main Sections */}
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Optional Footer Component */}
      <footer>
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
