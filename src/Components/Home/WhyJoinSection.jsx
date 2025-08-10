import React from "react";
import { FaRunning, FaMedal, FaHandsHelping } from "react-icons/fa";

const WhyJoinSection = () => {
  return (
    <section className="pt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-4xl mb-12 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent md:text-5xl font-bold text-center lg:h-15"
        >
          Why Join Our Marathon?
        </h2>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Card 1 */}
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div
              className="
                flex items-center justify-center w-16 h-16 rounded-full
                bg-gradient-to-r from-[#1E40AF] to-[#06B6D4]
                text-white text-3xl mb-6
              "
            >
              <FaRunning />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-[#1E40AF]">
              Challenge Yourself
            </h3>
            <p className="text-gray-700">
              Push your limits and experience the thrill of crossing the finish line stronger than ever before.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div
              className="
                flex items-center justify-center w-16 h-16 rounded-full
                bg-gradient-to-r from-[#1E40AF] to-[#06B6D4]
                text-white text-3xl mb-6
              "
            >
              <FaMedal />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-[#1E40AF]">
              Earn Rewards
            </h3>
            <p className="text-gray-700">
              Exclusive finisher medals, t-shirts, and recognition for your dedication and determination.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div
              className="
                flex items-center justify-center w-16 h-16 rounded-full
                bg-gradient-to-r from-[#1E40AF] to-[#06B6D4]
                text-white text-3xl mb-6
              "
            >
              <FaHandsHelping />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-[#1E40AF]">
              Support a Cause
            </h3>
            <p className="text-gray-700">
              Every step you take helps raise funds for local charities and community initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
