import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import DynamicTitle from "../../Components/DynamicTitle";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import { AuthContext } from "../../AuthProvider";

const Marathons = () => {
  let {user}= use(AuthContext)
  let [marathons, setMarathons] = useState([]);
  let [sort, setSort] = useState("");
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`http://localhost:5000/marathons?email=${user.email}&sort=${sort}`, {
      headers: {
        Authorization:`Bearer ${user.accessToken}`
      }
    })
      .then((res) => {
        setMarathons(res.data);
        setLoading(false);
      })
      .catch((err) => {});
  }, [sort]);
  // console.log(sort);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <DynamicTitle></DynamicTitle>
      <h1 className="text-5xl bg-gradient-to-tl from-[#430fed] to-[#bd0e0e] bg-clip-text text-transparent text-center my-8 font-extrabold ">
        All Marathons
      </h1>

      <div className="flex items-center justify-center">
        <form className="">
          <select
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="select select-secondary w-80 px-5 rounded-full"
          >
            {/* <option
            // disabled={true}
            >
              Select a sort System
            </option> */}
            {/* <option value={'asc'}>Oldest to Newest</option> */}
            <option value="">Default</option>
            <option value="asc">Oldest to Newest</option>
            <option value="desc">Newest to Oldest</option>
          </select>
        </form>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
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
    </>
  );
};

export default Marathons;
