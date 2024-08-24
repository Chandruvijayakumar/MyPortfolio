import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = {
  basic: [
    {
      title: "Calculator using DOM",
      description:
        "A basic calculator built using vanilla JavaScript and DOM manipulation.",
      link: "#",
    },
    {
      title: "Resume with Basic JS",
      description:
        "A simple resume page built with basic JavaScript functionality.",
      link: "#",
    },
    {
      title: "Survey Form",
      description:
        "A basic survey form created using HTML, CSS, and JavaScript.",
      link: "#",
    },
    {
      title: "Countdown Timer",
      description: "A simple countdown timer built using JavaScript.",
      link: "#",
    },
  ],
  intermediate: [
    {
      title: "Gmail Clone",
      description: "A clone of Gmail's UI with email functionalities.",
      link: "#",
    },
    {
      title: "Dynamic Form Validation",
      description: "A form validation system with dynamic error messages.",
      link: "#",
    },
    {
      title: "My Portfolio",
      description:
        "A personal portfolio website showcasing projects and skills.",
      link: "#",
    },
    {
      title: "Shopping Cart",
      description: "An e-commerce shopping cart using JavaScript.",
      link: "#",
    },
    {
      title: "Shopping Cart using Redux",
      description: "A shopping cart with state management using Redux.",
      link: "#",
    },
    {
      title: "Brand ID",
      description: "A website for creating custom logos and branding.",
      link: "#",
    },
    {
      title: "To-Do List with CRUD",
      description: "A to-do list application with full CRUD operations.",
      link: "#",
    },
    {
      title: "Dashboard",
      description: "A basic dashboard with interactive widgets.",
      link: "#",
    },
    {
      title: "Random Jokes Generator",
      description: "A web app that generates random jokes.",
      link: "#",
    },
    {
      title: "Random Quotes Generator",
      description: "A web app that generates random quotes.",
      link: "#",
    },
    {
      title: "Giphy Generator",
      description:
        "A Giphy search engine that fetches gifs from the Giphy API.",
      link: "#",
    },
    {
      title: "Rest Countries API",
      description:
        "A web app that fetches country data like latitude, longitude, temperature, capital, and flag.",
      link: "#",
    },
  ],
  advanced: [
    {
      title: "MERN Blog Site",
      description: "A full-featured blog site using the MERN stack.",
      link: "#",
    },
    {
      title: "Artist Site",
      description:
        "A portfolio site for an artist with rich animations and design.",
      link: "#",
    },
    {
      title: "Restaurant Dashboard - Pachayappa's Mess",
      description:
        "A dashboard for managing a restaurant, with CRUD operations and analytics.",
      link: "#",
    },
    {
      title: "CRUD Operations using API",
      description: "A project demonstrating CRUD operations using a REST API.",
      link: "#",
    },
  ],
};

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-base-100" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          My Projects
        </h2>
        <div className="mt-10">
          <h3 className="text-3xl font-semibold mt-10">Basic Projects</h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.basic.map((project, index) => (
              <div
                key={index}
                className="max-w-sm mx-auto bg-base-200 rounded-lg shadow-lg overflow-hidden"
                data-aos="fade-up"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-base-content">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-accent text-background-content py-2 px-4 rounded-full text-lg cursor-pointer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-semibold mt-16">
            Intermediate Projects
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.intermediate.map((project, index) => (
              <div
                key={index}
                className="max-w-sm mx-auto bg-base-200 rounded-lg shadow-lg overflow-hidden"
                data-aos="fade-up"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-base-content">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-accent text-background-content py-2 px-4 rounded-full text-lg cursor-pointer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-semibold mt-16">Advanced Projects</h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.advanced.map((project, index) => (
              <div
                key={index}
                className="max-w-sm mx-auto bg-base-200 rounded-lg shadow-lg overflow-hidden"
                data-aos="fade-up"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-base-content">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-accent text-background-content py-2 px-4 rounded-full text-lg cursor-pointer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
