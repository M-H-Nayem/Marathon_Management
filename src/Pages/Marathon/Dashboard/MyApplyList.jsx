import React, { use, useEffect, useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdBrowserUpdated } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../../Components/Loading/Loading";
import { Helmet } from "react-helmet-async";

const MyApplyList = () => {
  let { user } = use(AuthContext);
  let navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  let [loading, setLoading] = useState(true);
  let [myApply, setMyApply] = useState([]);
  let [selectId, setSelectId] = useState(null);
  let [selectedApplyData, setSelectedApplyData] = useState(null);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios(
      `https://marathon-server-side.vercel.app/my-marathons-apply?email=${user.email}&searchQuery=${searchText}`,
      {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => {
        setLoading(false);
        setMyApply(res.data);
      })
      .catch(() => {});
  }, [user, searchText]);

  let handleDeleteMarathonApply = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://marathon-server-side.vercel.app/marathons-apply/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your Marathon Application has been cancelled.",
              icon: "success",
            });
            let remainingMarathons = myApply?.filter(
              (marathon) => marathon._id !== id
            );
            setMyApply(remainingMarathons);
          });
      }
    });
  };
  let handleSingleLoad = (id) => {
    setSelectId(id);
    setLoading(true);
    console.log(id);
  };

  useEffect(() => {
    if (selectId) {
      setSelectedApplyData(null);
      axios(
        `https://marathon-server-side.vercel.app/marathons-apply/${selectId}`
      )
        .then((res) => {
          setSelectedApplyData(res.data);
          setSelectId(null);
          setLoading(false);
          setIsOpen(true);
        })
        .catch((err) => console.error(err));
    }
  }, [selectId]);

  // console.log(selectId, selectedApplyData);

  let handleUpdateMarathonApply = (e, id) => {
    e.preventDefault();
    let form = e.target;
    let formDate = new FormData(form);
    let formDateObj = Object.fromEntries(formDate.entries());
    // console.log(formDateObj);

    axios
      .put(
        `https://marathon-server-side.vercel.app/marathons-apply/${id}`,
        formDateObj
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Your Application Updated sucessfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsOpen(false);
          setTimeout(() => {
            navigate(0);
          }, 1500);
        }
      })
      .catch((err) => {});
  };

  // console.log(searchText);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-gray-100 min-h-screen ">
      <Helmet>
        <title>My Apply List - Marathon App</title>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="my-8">
          <h2 className="text-4xl mb-10 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent md:text-5xl font-bold text-center lg:h-15">
            My Applied Marathons
          </h2>
          <form className="max-w-md mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by title..."
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
            </div>
          </form>
        </div>

        {myApply.length > 0 ? (
          <div>
            {/* Desktop Table View */}
            <div className="hidden lg:block">
              <div className="overflow-x-auto shadow-xl rounded-2xl bg-white">
                <table className="table w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr className="text-lg">
                      <th>No</th>
                      <th>Marathon Title</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Contact</th>
                      <th>Marathon Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myApply.map((marathon, index) => (
                      <tr
                        key={marathon._id}
                        className="border-b border-gray-200 hover:bg-gray-50 text-gray-700"
                      >
                        <td>{index + 1}</td>
                        <td>
                          <img
                            className="w-20 h-12 object-cover rounded-lg"
                            src={marathon.image}
                            alt={marathon.title}
                          />
                        </td>
                        <td>{marathon.title}</td>
                        <td>{marathon.location}</td>
                        <td>{marathon.distance}</td>
                        <td>{marathon.marathon_start}</td>
                        <td>
                          <div className="flex gap-2">
                            <button
                              className="text-green-500 hover:text-green-700 transition duration-200"
                              onClick={() => handleSingleLoad(marathon._id)}
                            >
                              <MdBrowserUpdated size={28} />
                            </button>
                            <button
                              className="text-red-500 hover:text-red-700 transition duration-200"
                              onClick={() => handleDeleteMarathonApply(marathon._id)}
                            >
                              <RiDeleteBin2Line size={28} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden">
              <div className="space-y-6">
                {myApply.map((marathon) => (
                  <div
                    key={marathon._id}
                    className="bg-white rounded-xl shadow-lg p-5 border border-gray-200"
                  >
                    <img
                      src={marathon.image}
                      alt={marathon.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {marathon.title}
                    </h3>
                    <div className="text-gray-600 space-y-1 text-sm">
                      <p>
                        <span className="font-semibold">Location:</span>{" "}
                        {marathon.location}
                      </p>
                      <p>
                        <span className="font-semibold">Distance:</span>{" "}
                        {marathon.distance}
                      </p>
                      <p>
                        <span className="font-semibold">Date:</span>{" "}
                        {marathon.marathon_start}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-end gap-3">
                      <button
                        className="text-green-500 hover:text-green-700 transition duration-200"
                        onClick={() => handleSingleLoad(marathon._id)}
                      >
                        <MdBrowserUpdated size={28} />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700 transition duration-200"
                        onClick={() => handleDeleteMarathonApply(marathon._id)}
                      >
                        <RiDeleteBin2Line size={28} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Update Modal */}
            {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto w-full max-w-2xl relative p-6">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-500 hover:text-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    ✕
                  </button>
                  <form
                    onSubmit={(e) =>
                      handleUpdateMarathonApply(e, selectedApplyData._id)
                    }
                    className="space-y-4"
                  >
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                      Update Marathon Application Info
                    </h2>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Marathon Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        defaultValue={selectedApplyData.title}
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Marathon Date
                      </label>
                      <input
                        type="text"
                        name="marathon_start"
                        defaultValue={selectedApplyData.marathon_start}
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          defaultValue={selectedApplyData.first_name}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          defaultValue={selectedApplyData.last_name}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Contact Number
                      </label>
                      <input
                        type="number"
                        name="number"
                        defaultValue={selectedApplyData.number}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Additional Info
                      </label>
                      <textarea
                        name="additional_info"
                        defaultValue={selectedApplyData.additional_info}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={user?.email || ""}
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-4 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
                    >
                      Update Application
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[70vh]">
            <div className="w-11/12 md:w-1/2 lg:w-1/3 p-8 bg-white rounded-2xl shadow-xl text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
                You have not applied for any Marathon Event.
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplyList;
