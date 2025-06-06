import React from "react";
import Slider from "./Body/Slider";
import CountDown from "./CountDown/CountDown";
import { useLoaderData } from "react-router";
import LimitSection from "./Home/LimitSection";
import CardSection from "./Home/CardSection";
import Banner from "./Home/Banner";
import LastSection from "./Home/LastSection";

const HomePage = () => {
  let marathonData = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <Slider></Slider>
      <LimitSection marathons={marathonData}></LimitSection>
      <CardSection></CardSection>
      <LastSection></LastSection>
    </div>
  );
};

export default HomePage;
