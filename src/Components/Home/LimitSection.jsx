import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../AuthProvider";
import Loading from "../Loading/Loading";

const LimitSection = () => {
  let { user } = use(AuthContext);
  let [marathons, setMarathons] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://marathon-server-side.vercel.app/marathons-limit")
      .then((res) => res.json())
      .then((data) => {
        setMarathons(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-10">
      <h1 className="text-5xl bg-gradient-to-tl from-[#430fed] to-[#bd0e0e] bg-clip-text text-transparent text-center my-8 font-extrabold ">
        Popular Marathons
      </h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
        {marathons?.map((marathon) => (
          <div
            key={marathon._id}
            className="card bg-gray-300 w-12/12 mx-auto shadow-lg rounded-2xl"
          >
            <figure>
              <img
                className="w-full h-[260px]"
                src={marathon.image}
                alt="Marathon Image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title py-1 text-4xl font-bold bg-gradient-to-tl from-blue-600 to-green-800 bg-clip-text text-transparent">
                {marathon.title}
              </h2>
              <p className="text-2xl text-black">{marathon.description}</p>
              <div className="flex justify-around gap-5">
                <p className="w-fit text-green-600 text-xl  ">
                  Regi-Start :{marathon.regi_start}
                </p>
                <p className="w-fit text-red-600 flex text-xl justify-end  ">
                  Regi-End :{marathon.regi_end}
                </p>
              </div>
              <hr />
              <div className="card-actions flex items-center">
                <p className="text-xl font-bold text-black">
                  Location- {marathon.location}
                </p>
                <Link to={`/marathon_details/${marathon._id}`}>
                  <button className="btn bg-blue-600 text-white border-none">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LimitSection;
