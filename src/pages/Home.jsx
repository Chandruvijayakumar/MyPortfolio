// src/pages/Home.jsx

import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Service";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">{/* About content */}</section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">{/* Contact content */}</section>
      <Footer />
    </div>
  );
};

export default Home;
