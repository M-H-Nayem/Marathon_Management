import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="/undraw_junior-soccer_0lib.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Marathon <br />
                          <span className="dark:text-violet-600">Management</span>
                          <br />
              Event
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
             “Beyond the Miles, Behind the Moments —
              <br className="hidden md:inline lg:hidden" />
                Mastering the Marathon Experience.”
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
