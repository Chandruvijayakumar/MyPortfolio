import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    testimonial:
      "Working with Aryan was an amazing experience. His dedication and skill are unmatched.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    testimonial:
      "Aryan's work ethic and attention to detail are top-notch. Highly recommend!",
    image: "https://via.placeholder.com/150",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-base-100" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          What People Say
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-lg shadow-lg overflow-hidden p-6"
              data-aos="fade-up"
            >
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
              <p className="text-base-content">{testimonial.role}</p>
              <p className="mt-4 text-base-content italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
