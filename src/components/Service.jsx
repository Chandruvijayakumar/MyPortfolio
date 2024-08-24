import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites.",
    icon: "https://via.placeholder.com/100",
  },
  {
    title: "Mobile Apps",
    description: "Creating mobile applications for both Android and iOS.",
    icon: "https://via.placeholder.com/100",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly and engaging interfaces.",
    icon: "https://via.placeholder.com/100",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-base-100" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          My Services
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto bg-base-200 rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-24 h-24 mx-auto"
                src={service.icon}
                alt={service.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-base-content">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
