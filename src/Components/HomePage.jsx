import React from "react";
import Slider from "./Body/Slider";
import CountDown from "./CountDown/CountDown";
import { useLoaderData } from "react-router";
import LimitSection from "./Home/LimitSection";
import Banner from "./Home/Banner";
import { Helmet } from "react-helmet-async";
import DynamicTitle from "./DynamicTitle";
import MarathonCountdown from "./Home/MarathonCountdown";
import WhyJoinSection from "./Home/WhyJoinSection";
import WhyChooseUs from "./Home/WhyChooseUs";
import FAQSection from "./Home/FAQSection";
import PreviousYearSection from "./Home/PreviousYearSection";
import UpcomingSection from "./Home/UpcomingSection";
import TestimonialsSection from "./Home/TestimonialsSection";

const HomePage = () => {
  let marathonData = useLoaderData();
  return (
    <div>
      
      <DynamicTitle></DynamicTitle>
      <Banner></Banner>
      {/* <Slider></Slider> */}
      <LimitSection
        marathons={marathonData}
      ></LimitSection>
      <UpcomingSection></UpcomingSection>
      <MarathonCountdown></MarathonCountdown>
      <WhyJoinSection></WhyJoinSection>
      <WhyChooseUs></WhyChooseUs>
      <TestimonialsSection></TestimonialsSection>
      <FAQSection></FAQSection>
    <PreviousYearSection></PreviousYearSection>
    </div>
  );
};

export default HomePage;
