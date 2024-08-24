import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className="relative bg-base-200 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-xl">
          I’m a passionate developer creating awesome web experiences.
        </p>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="mt-8 inline-block bg-accent text-background-content py-2 px-4 rounded-full text-lg cursor-pointer"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
