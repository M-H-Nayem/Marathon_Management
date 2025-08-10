import React from "react";

const PreviousYearSection = () => {
  return (
    <section className="py-10 px-3">
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl lg:text-5xl font-extrabold text-center mb-8 lg:mb-12
            bg-gradient-to-r from-[#1E40AF] to-[#06B6D4]
            bg-clip-text text-transparent tracking-wide drop-shadow-md
            lg:h-15 h-30 flex items-center justify-center
          "
        >
          Previous Year Highlights
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              number: 1,
              title: "Record-Breaking Participation",
              desc: "Over 3,500+ runners joined from 15+ cities, setting a new benchmark in regional marathon events.",
            },
            {
              number: 2,
              title: "Seamless Route & Support",
              desc: "25km professionally marked track, 6 hydration booths, 3 medical checkpoints, and GPS tracking ensured a safe experience.",
            },
            {
              number: 3,
              title: "98% Positive Feedback",
              desc: "Rated 4.8/5 for event coordination, volunteer support & vibe. Charity run raised $12,000 for local health causes.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col p-6 space-y-4 rounded-xl
                bg-white text-[#1E40AF]
                shadow-lg hover:shadow-2xl hover:scale-[1.03]
                transition-transform duration-300
              "
            >
              {/* Number Badge */}
              <div
               className="
                flex items-center justify-center w-16 h-16 rounded-full
                bg-gradient-to-r from-[#1E40AF] to-[#06B6D4]
                text-white text-3xl mb-6
              "
              >
                {item.number}
              </div>
              {/* Text */}
              <p className="text-xl font-semibold">
                <p className="text-2xl font-semibold  text-[#1E40AF]">{item.title}.</p>
                <br />
                <p className="text-xl font-semibold text-black">

                {item.desc}

                </p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousYearSection;
