import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library

// Initialize AOS
AOS.init({
  duration: 1000, // Duration of animations
  easing: "ease-in-out", // Easing function for animations
  once: true, // Whether animation should happen only once
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
