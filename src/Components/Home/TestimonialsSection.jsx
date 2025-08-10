import React from "react";
import { FaUser } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Professional Runner",
    photo: "/testimonials/sarah.jpg",
    message:
      "Marathon Pro helped me discover amazing events with excellent organization. The community and support are unbeatable!",
  },
  {
    name: "Mark Wilson",
    role: "Fitness Enthusiast",
    photo: "/testimonials/mark.jpg",
    message:
      "The platform's easy registration and detailed event info made my first marathon stress-free and unforgettable.",
  },
  {
    name: "Linda Lee",
    role: "Charity Supporter",
    photo: "/testimonials/linda.jpg",
    message:
      "I love how Marathon Pro connects running with causes that matter. Every event feels purposeful and inspiring.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="pt-10 text-white ">
      <div className="max-w-7xl mx-auto px-3">
        <h2  className="text-4xl mb-12 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent md:text-5xl font-bold text-center h-15">
          What Our Runners Say
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map(({ name, role,  message }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg text-black hover:shadow-2xl transition-shadow duration-300"
            >
              <p className="mb-6 italic">"{message}"</p>
              <div className="flex items-center space-x-4">
                <FaUser size={35} fill="blue"></FaUser>
                <div>
                  <h3 className="font-bold text-lg">{name}</h3>
                  <p className="text-sm text-gray-600">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
