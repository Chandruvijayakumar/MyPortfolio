import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-base-100 shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-accent cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-accent cursor-pointer"
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="hover:text-accent cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            className="hover:text-accent cursor-pointer"
          >
            Gallery
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="hover:text-accent cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-accent cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-accent cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-current focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
