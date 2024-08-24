import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/600x400",
];

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-base-100" id="gallery">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          My Gallery
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto bg-base-200 rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full h-48 object-cover"
                src={image}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
