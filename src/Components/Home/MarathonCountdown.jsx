import React, { useEffect, useState } from "react";

const MarathonCountdown = () => {
  const eventDate = new Date("2025-09-15T09:00:00"); // event date set
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-10 px-3">

    <section className="bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white py-16 max-w-7xl mx-auto rounded-lg shadow-lg">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left - Event Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
            City Marathon 2025
          </h2>
          <p className="text-lg text-[#E0E7FF] mb-6">
            Join thousands of runners for an unforgettable journey through the
            heart of the city. Whether you're a beginner or a pro, this marathon
            is your chance to shine!
          </p>
          <button className="px-6 py-3 bg-gradient-to-bl from-[#1E40AF] to-[#06B6D4] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition transform hover:scale-105">
            Register Now
          </button>
        </div>

        {/* Right - Countdown */}
        <div className="bg-white text-[#1E40AF] rounded-2xl p-8 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Event Starts In</h3>
          <div className="flex gap-6 text-center">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.mins },
              { label: "Secs", value: timeLeft.secs },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-[#1E40AF]">{item.value}</div>
                <div className="text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

    </div>

  );
};

export default MarathonCountdown;
