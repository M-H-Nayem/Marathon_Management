import React from "react";
import { Link, useLoaderData } from "react-router";

const Marathons = () => {
  let marathons = useLoaderData();
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
        {marathons?.map((marathon) => (
          
            <div key={marathon._id} className="card bg-gray-300 w-12/12 mx-auto shadow-lg rounded-2xl">
              <figure>
                <img
                  className="w-full h-[260px]"
                  src={marathon.image}
                  alt="Marathon Image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl font-bold bg-gradient-to-tl from-blue-600 to-green-800 bg-clip-text text-transparent">
                  {marathon.title}
                </h2>
                <p className="text-xl text-black">{marathon.description}</p>
                <div className="flex justify-around gap-5">
                  <p className="w-fit text-red-600  underline ">
                    Regi-Start :{marathon.regi_start}
                  </p>
                  <p className="w-fit text-red-600 flex justify-end underline ">
                    Regi-End :{marathon.regi_end}
                  </p>
              </div>
              <hr />
                <div className="card-actions flex items-center">
                  <p className="text-xl font-bold text-black">
                    Location- {marathon.location}
                  </p>
                  <Link to={`/marathon_details/${marathon._id}`}>
                    <button
                      className="btn bg-blue-600 text-white border-none"
                    >
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

export default Marathons;
