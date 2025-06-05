import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <div className=" w-10/12 mx-auto my-8 ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}

      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-9/12 mx-auto  h-[500px]"
              src="/Marathon-1.png"
              alt=""
            />
            <div className="absolute top-65 right-50 w-[450px] h-[200px]">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#f64242] to-[#5a2727] bg-clip-text text-transparent ">
                Run for Glory, Race for Change!
              </h1>
              <p className=" text-xl font-semibold bg-gradient-to-r  bg-clip-text text-white">
                Join thousands of runners in a journey of endurance, spirit, and
                purpose. Whether you're a beginner or a pro, your finish line
                awaits. 💥
              </p>
              <button className="btn bg-amber-500 border-none">Join</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-9/12 mx-auto  h-[500px]"
              src="/Marathon-2.png"
              alt=""
            />
            <div className="absolute top-65 right-50 w-[450px] h-[200px]">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-700 to-green-600 bg-clip-text text-transparent ">
                Every Step Tells a Story!
              </h1>
              <p className=" text-xl font-semibold bg-gradient-to-r from-[#f64242] to-[#5a2727] bg-clip-text text-white">
                Join thousands of runners in a journey of endurance, spirit, and
                purpose. Whether you're a beginner or a pro, your finish line
                awaits. 💥
              </p>
              <button className="btn bg-amber-600 text-white border-none">
                Join
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-9/12 mx-auto  h-[500px]"
              src="/Marathon-3.png"
              alt=""
            />
            <div className="absolute top-65 right-50 w-[450px] h-[200px]">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#42f65d] to-[#176a33] bg-clip-text text-transparent ">
                One Track. One Dream. One Community.
              </h1>
              <p className=" text-xl font-semibold bg-gradient-to-r from-[#f64242] to-[#5a2727] bg-clip-text text-white">
                Join thousands of runners in a journey of endurance, spirit, and
                purpose. Whether you're a beginner or a pro, your finish line
                awaits. 💥
              </p>
              <button className="btn bg-amber-600 text-white border-none">
                Join
              </button>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Slider;
