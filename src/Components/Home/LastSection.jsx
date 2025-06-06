import React from "react";

const LastSection = () => {
  return (
    <div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto">
          <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-600">
            Event is managed by sponsor
          </span>
          <h2 className="text-5xl font-bold text-center dark:text-gray-900">
            Previous Year Event Details
          </h2>
          <div className="grid gap-6 my-16 lg:grid-cols-3">
            <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
                1
              </div>
              <p className="text-2xl font-semibold">
                <b>Record-Breaking Participation.</b><br />Over 3,500+ runners joined from 15+ cities, setting a new benchmark in regional marathon events.
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
                2
              </div>
              <p className="text-2xl font-semibold">
                <b>Seamless Route & Support.</b><br /> A 25km professionally marked track, 6 hydration booths, 3 medical checkpoints, and real-time GPS tracking ensured a safe and smooth experience.
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
                3
              </div>
              <p className="text-2xl font-semibold">
                <b>98% Positive Feedback.</b><br />Participants rated the event 4.8/5, praising the event coordination, volunteer support, and overall vibe. Charity run raised $12,000 for local health initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LastSection;
