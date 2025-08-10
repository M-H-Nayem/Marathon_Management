import React from "react";
import { FaRunning, FaHeartbeat, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className=" pt-10 px-3">
      <div className="max-w-7xl mx-auto text-center text-[#1E40AF] ">
        <h2 className="text-4xl mb-12 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent md:text-5xl font-bold text-center lg:h-15">
          Why Choose Marathon Pro?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaRunning className="text-[#F97316] mx-auto mb-6 text-6xl" />
            <h3 className="text-2xl font-semibold mb-3 text-[#1E40AF]">
              Expertly Curated Events
            </h3>
            <p className="text-gray-700 text-lg">
              We partner with top marathon organizers to bring you safe, challenging, and fun races across the country.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaHeartbeat className="text-[#FF9F1C] mx-auto mb-6 text-6xl" />
            <h3 className="text-2xl font-semibold mb-3 text-[#1E40AF]">
              Health & Safety Focus
            </h3>
            <p className="text-gray-700 text-lg">
              Every event follows strict safety protocols, hydration stations, and medical support to keep you going strong.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaShieldAlt className="text-[#F97316] mx-auto mb-6 text-6xl" />
            <h3 className="text-2xl font-semibold mb-3 text-[#1E40AF]">
              Trusted & Verified
            </h3>
            <p className="text-gray-700 text-lg">
              Our platform verifies all events and organizers, so you can register with confidence and focus on your run.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
