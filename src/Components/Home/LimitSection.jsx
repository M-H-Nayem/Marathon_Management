import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import Loading from "../Loading/Loading";

const LimitSection = () => {
  const { user } = useContext(AuthContext);
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://marathon-server-side.vercel.app/marathons-limit")
      .then((res) => res.json())
      .then((data) => {
        setMarathons(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="w-full  pt-10">
      <div className="max-w-7xl mx-auto px-3">
        {/* Section Title */}
        <h1
          className="text-4xl mb-10 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent md:text-5xl font-bold text-center h-15"
        >
          Popular Marathons
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marathons.map((marathon) => (
            <article
              key={marathon._id}
              className="
                group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200
                hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300
              "
            >
              {/* Image with Overlay */}
              <figure className="relative">
                <img
                  src={marathon.image}
                  alt={marathon.title}
                  loading="lazy"
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                <span
                  className="
                    absolute bottom-3 left-3 px-3 py-1 text-sm font-semibold
                    bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white
                    rounded-full shadow-md select-none
                  "
                >
                  {marathon.location}
                </span>
              </figure>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                <h2
                  className="
                    text-3xl font-bold
                    bg-gradient-to-tl from-[#1E40AF] to-[#06B6D4]
                    bg-clip-text text-transparent drop-shadow-sm
                  "
                >
                  {marathon.title}
                </h2>
                <p className="text-[#111827] text-lg leading-relaxed line-clamp-3">
                  {marathon.description}
                </p>

                {/* Dates */}
                <div className="flex justify-between text-sm font-medium">
                  <p className="text-green-700 bg-green-100 px-3 py-1 rounded-full select-none">
                    Regi-Start: {marathon.regi_start}
                  </p>
                  <p className="text-red-700 bg-red-100 px-3 py-1 rounded-full select-none">
                    Regi-End: {marathon.regi_end}
                  </p>
                </div>

                <hr className="border-gray-200" />

                {/* Action Button */}
                <div className="flex justify-end">
                  <Link to={`/marathon_details/${marathon._id}`}>
                    <button
                      className="
                        px-5 py-2 rounded-full font-semibold
                        bg-gradient-to-r from-[#1E40AF] to-[#06B6D4]
                        text-white shadow-md hover:from-[#06B6D4] hover:to-[#1E3A8A]
                        transition-all duration-300
                      "
                    >
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LimitSection;
