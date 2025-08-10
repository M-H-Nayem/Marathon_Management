import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slidesData = [
  {
    img: "/Marathon-1.png",
    title: "Run for Glory, Race for Change!",
    titleGradient: "from-[#f64242] to-[#5a2727]",
    description:
      "Join thousands of runners in a journey of endurance, spirit, and purpose. Whether you're a beginner or a pro, your finish line awaits. 💥",
    btnBg: "bg-amber-500",
  },
  {
    img: "/Marathon-2.png",
    title: "Every Step Tells a Story!",
    titleGradient: "from-violet-700 to-green-600",
    description:
      "Join thousands of runners in a journey of endurance, spirit, and purpose. Whether you're a beginner or a pro, your finish line awaits. 💥",
    btnBg: "bg-amber-600",
  },
  {
    img: "/Marathon-3.png",
    title: "One Track. One Dream. One Community.",
    titleGradient: "from-[#42f65d] to-[#176a33]",
    description:
      "Join thousands of runners in a journey of endurance, spirit, and purpose. Whether you're a beginner or a pro, your finish line awaits. 💥",
    btnBg: "bg-amber-600",
  },
];

const Slider = () => {
  return (
    <div className="w-12/12 mx-auto my-8">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {slidesData.map(({ img, title, titleGradient, description, btnBg }, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center bg-white dark:bg-gray-900 shadow-lg p-6 gap-6">
              {/* Image */}
              <img
                src={img}
                alt={title}
                className="w-full lg:w-1/2 h-[500px] object-cover rounded-lg shadow-md"
              />

              {/* Text Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1
                  className={`text-4xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-4`}
                >
                  {title}
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold mb-6">
                  {description}
                </p>
                <button
                  className={`${btnBg} text-white px-8 py-3 rounded-md font-semibold hover:brightness-110 transition`}
                >
                  Join
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
