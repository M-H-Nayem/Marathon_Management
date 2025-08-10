import React, { use, useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { MdLocationPin } from "react-icons/md";

const MarathonDataDetails = () => {
  const { user } = use(AuthContext);
  const marathonData = useLoaderData();
  const [registeredList, setRegisteredList] = useState([]);

  const targetDate = new Date(marathonData.marathon_start);
  const regiStartDate = new Date(marathonData.regi_start);
  const regiEndDate = new Date(marathonData.regi_end);
  const today = new Date();

  useEffect(() => {
    axios(
      `https://marathon-server-side.vercel.app/marathons/application/${marathonData._id}`,
      {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      }
    )
      .then((res) => setRegisteredList(res.data))
      .catch(() => {});
  }, [marathonData._id, user]);

  marathonData.totalRegiCount = registeredList.length;

  const toDateOnly = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const now = toDateOnly(today);
  const start = toDateOnly(regiStartDate);
  const end = toDateOnly(regiEndDate);

  let content;
  if (user.email === marathonData.email) {
    content = (
      <button className="px-6 py-2 rounded-full font-bold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white">
        ⏳ You can't Apply to your own Marathon
      </button>
    );
  } else if (now < start) {
    content = (
      <button className="px-6 py-2 rounded-full font-bold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white">
        ⏳ Registration hasn't started yet.
      </button>
    );
  } else if (now > end) {
    content = (
      <button className="px-6 py-2 rounded-full font-bold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white">
        ❌ Registration has expired.
      </button>
    );
  } else {
    content = (
      <Link to={`/register_marathon/${marathonData._id}`}>
        <button className="px-6 py-2 rounded-full font-bold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white hover:from-[#06B6D4] hover:to-[#1E3A8A] transition-all duration-300">
          ✅ Register Now
        </button>
      </Link>
    );
  }

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h3 className="text-red-600 font-bold">⏰ Time's up!</h3>;
    } else {
      return (
        <div className="text-lg font-bold text-gray-800">
          ⏳ {days}d {hours}h {minutes}m {seconds}s
        </div>
      );
    }
  };

  return (
    <div className=" flex justify-center items-center min-h-screen">
      <Helmet>
        <title>{marathonData.title} - Details</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-3 py-10">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src={marathonData.image}
              alt={marathonData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <span className="absolute bottom-4 left-4 px-4 py-2 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white rounded-full font-semibold shadow-lg">
              {marathonData.location}
            </span>
          </div>

          {/* Right Side - Content */}
          <div className="p-8 space-y-5 flex flex-col justify-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent">
              {marathonData.title}
            </h1>
            <p className="text-lg text-gray-700">{marathonData.description}</p>

            {/* Info List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
              <div className="flex
              ">
<MdLocationPin size={24} color="#d33f49" />

              <p className="flex">
                <strong> Location: </strong> {marathonData.location}
              </p>
              </div>
              <p>
                <strong>📏 Distance:</strong> {marathonData.distance}
              </p>

              {/* Registration Start */}
              <p>
                <strong>📅 Registration Start:</strong>
                <span className="ml-2 px-3 py-1 rounded-full text-white text-sm bg-gradient-to-r from-green-500 to-green-400">
                  {marathonData.regi_start}
                </span>
              </p>

              {/* Registration End */}
              <p>
                <strong>📅 Registration End:</strong>
                <span className="ml-2 px-3 py-1 rounded-full text-white text-sm bg-gradient-to-r from-red-500 to-red-400">
                  {marathonData.regi_end}
                </span>
              </p>

              {/* Marathon Start */}
              <p>
                <strong>🏁 Marathon Start:</strong>
                <span className="ml-2 px-3 py-1 rounded-full text-white text-sm bg-gradient-to-r from-[#1E40AF] to-[#06B6D4]">
                  {marathonData.marathon_start}
                </span>
              </p>

              <p>
                <strong>📨 Organizer Email:</strong> {marathonData.email}
              </p>
              <p>
                <strong>👥 Total Registrations:</strong>{" "}
                {marathonData.totalRegiCount}
              </p>
            </div>

            {/* Countdown */}
            <div>
              <h2 className="font-bold text-gray-800 mb-1">
                🚀 Countdown to Marathon Start
              </h2>
              <Countdown date={targetDate} renderer={renderer} />
            </div>

            <hr className="border-gray-200" />

            {/* Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonDataDetails;
