import React, { useState } from "react";

const UpcomingSection = () => {
  const events = [
    {
      title: "Bike Ride",
      description: "Pedal towards a greener future — ride for health and happiness!",
      img: "/undraw_bike-ride_ba0o.png",
    },
    {
      title: "Drone Race",
      description: "Master the skies — test your speed and precision!",
      img: "/undraw_drone-race_gddk.png",
    },
    {
      title: "Basketball",
      description: "One shot can change the game — own the court!",
      img: "/undraw_greek-freak_p532.png",
    },
    {
      title: "Golf",
      description: "Patience, precision, and passion — every hole is a victory.",
      img: "/undraw_playing-golf_016o.png",
    },
    {
      title: "Skateboard",
      description: "Balance, tricks, and speed — the street is your playground!",
      img: "/undraw_skateboard_w3bz.png",
    },
    {
      title: "Track & Field",
      description: "Run, jump, and throw — unleash the athlete in you!",
      img: "/undraw_track-and-field_i2au.png"
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prev) =>
      prev + 3 > events.length ? events.length : prev + 3
    );
  };

  return (
    <div className="pt-10 max-w-7xl mx-auto rounded-xl px-3">
      {/* Section Title */}
      <h1
       className="text-4xl mb-12 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent md:text-5xl font-bold text-center lg:h-15"
      >
        Upcoming Marathon Events
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.slice(0, visibleCount).map((event, idx) => (
          <div
            key={idx}
            className="
              bg-white text-[#111827] rounded-2xl overflow-hidden shadow-lg
              hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300
              border border-gray-200
            "
          >
            <figure>
              <img
                className="h-[300px] w-full object-cover"
                src={event.img}
                alt={event.title}
              />
            </figure>
            <div className="p-5">
              <h2 className="text-2xl font-bold text-[#1E40AF] mb-2">
                {event.title}
              </h2>
              <p className="text-[#6B7280] text-lg mb-4">
                {event.description}
              </p>
              <button
                className="
                  px-4 py-2 rounded-full
                  bg-gradient-to-r from-[#1E40AF] to-[#06B6D4]
                  text-white hover:opacity-90 transition
                "
              >
                Upcoming
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < events.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewMore}
            className="
              px-6 py-3 rounded-full
              bg-gradient-to-r from-[#1E40AF] to-[#06B6D4]
              text-white font-medium shadow-md
              hover:shadow-lg hover:scale-105 transition-all duration-300
            "
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default UpcomingSection;
