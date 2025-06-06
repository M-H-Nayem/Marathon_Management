import React from "react";
import Countdown from "react-countdown";
import { Link, useLoaderData,  } from "react-router";

const MarathonDataDetails = () => {
  let marathonData = useLoaderData() 
  const targetDate = new Date(marathonData.marathon_start);
  const regiStartDate = new Date(marathonData.regi_start);
  const regiEndDate = new Date(marathonData.regi_start);
  const today = new Date();

  const toDateOnly = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const now = toDateOnly(today);
  const start = toDateOnly(regiStartDate);
  const end = toDateOnly(regiEndDate);

  let content;

  if (now < start && now < end) {
    content = (
      <button className="btn bg-blue-500 text-white border-none font-bold">⏳ Registration hasn't started yet.</button>
    );
  } else if (now > start && now < end ) {
    content = <button className="btn bg-blue-500 text-white border-none font-bold">❌ Registration has expired.</button>;
  } else {
    content = (
      <Link to={`/register_marathon/${marathonData._id}`}>
        <button className="btn bg-blue-500 text-white border-none font-bold ">✅ Register Now</button>
      </Link>
    );
  }

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h3 style={{ color: "red" }}>⏰ Time's up!</h3>;
    } else {
      return (
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          ⏳ {days}d {hours}h {minutes}m {seconds}s
        </div>
      );
    }
  };

  return (
    <div className="my-10">
      <div className=" w-8/12 mx-auto">
        <div className="card bg-gray-300 w-10/12 mx-auto shadow-lg rounded-2xl">
          <figure>
            <img
              className="w-full bg-amber-300 h-[500px]"
              src={marathonData.image}
              alt="marathonData Image"
            />
          </figure>
          <div className="card-body">
            ,
            <div className="flex items-center">
              <h2 className="card-title text-3xl font-bold bg-gradient-to-tl from-blue-600 to-green-800 bg-clip-text text-transparent">
                {marathonData.title}
              </h2>
              <p className="flex justify-end text-2xl text-green-600">
                Marathon Start date - {marathonData.marathon_start}
              </p>
            </div>
            <p className="text-xl text-black">{marathonData.description}</p>
            <div className="flex  gap-5 w-full justify-between">
              <p className="w-fit text-red-600  underline ">
                Regi-Start :{marathonData.regi_start}
              </p>
              <p className="w-fit text-red-600 flex justify-end  underline ">
                Regi-End :{marathonData.regi_end}
              </p>
            </div>
            <p className="text-xl font-bold text-black">
              Location- {marathonData.location}
                      </p>
                      <hr />
            <div className="card-actions flex items-center justify-between">
              <div className="text-black font-bold">
                <h2>🚀 Countdown to Marathon Start</h2>
                <Countdown date={targetDate} renderer={renderer} />
              </div>
              <div>{content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonDataDetails;
