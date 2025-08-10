import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider";
import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdBrowserUpdated } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import Loading from "../../../Components/Loading/Loading";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async";

const MyMarathonList = () => {
  let { user } = use(AuthContext);
  let navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  let [loading, setLoading] = useState(true);
  let [myMarathons, setMyMarathons] = useState([]);
  let [selectId, setSelectId] = useState(null);
  let [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    axios(
      `https://marathon-server-side.vercel.app/my-marathons?email=${user.email}`,
      {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then((res) => {
        // console.log(res.data);
        setMyMarathons(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [user]);

  let handleDeleteMarathon = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://marathon-server-side.vercel.app/marathons/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your Marathon has been deleted.",
              icon: "success",
            });
            let remainingMarathons = myMarathons.filter(
              (marathon) => marathon._id !== id
            );
            setMyMarathons(remainingMarathons);
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
      setSelectedData(null);
      axios(`https://marathon-server-side.vercel.app/marathons/${selectId}`)
        .then((res) => {
          setSelectedData(res.data);
          setSelectId(null);
          setLoading(false);
          setIsOpen(true);
        })
        .catch((err) => console.error(err));
    }
  }, [selectId]);

  // console.log(selectId, selectedData);

  const handleUpdateMarathon = (e, id) => {
    e.preventDefault();
    let form = e.target;
    let formDate = new FormData(form);
    let formDateObj = Object.fromEntries(formDate.entries());
    console.log(formDateObj);

    axios
      .put(
        `https://marathon-server-side.vercel.app/marathons/${id}`,
        formDateObj
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Your Marathon Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsOpen(false);
          setTimeout(() => {
            navigate(0);
          }, 1500);
        }
      })
      .catch(() => {});
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Helmet>
        <title>My Marathon List - Marathon App</title>
      </Helmet>

      {myMarathons.length > 0 ? (
        <div className="max-w-7xl mx-auto">
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <h2 className="text-4xl mb-10 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent md:text-5xl font-bold text-center h-15">
              My Marathons
            </h2>
            <div className="overflow-x-auto shadow-xl rounded-2xl bg-white">
              <table className="table w-full">
                <thead className="bg-blue-600 text-white">
                  <tr className="text-lg">
                    <th>No</th>
                    <th>Cover</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Distance</th>
                    <th>Marathon Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myMarathons.map((marathon, index) => (
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
                            onClick={() => handleDeleteMarathon(marathon._id)}
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
            <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
              My Marathons
            </h2>
            <div className="space-y-6">
              {myMarathons.map((marathon) => (
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
                      onClick={() => handleDeleteMarathon(marathon._id)}
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
                  onSubmit={(e) => handleUpdateMarathon(e, selectedData._id)}
                  className="space-y-4"
                >
                  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Update Marathon Info
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Title</label>
                      <input
                        type="text"
                        name="title"
                        defaultValue={selectedData.title}
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Location</label>
                      <input
                        type="text"
                        name="location"
                        defaultValue={selectedData.location}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Registration Start</label>
                      <input
                        type="date"
                        name="regi_start"
                        defaultValue={selectedData.regi_start}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Registration End</label>
                      <input
                        type="date"
                        name="regi_end"
                        defaultValue={selectedData.regi_end}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Marathon Start Date</label>
                    <input
                      type="date"
                      name="marathon_start"
                      defaultValue={selectedData.marathon_start}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Distance</label>
                    <select
                      name="distance"
                      defaultValue={selectedData.distance}
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Distance</option>
                      <option value="25k">25k</option>
                      <option value="10k">10k</option>
                      <option value="3k">3k</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Description</label>
                    <textarea
                      name="description"
                      defaultValue={selectedData.description}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Image Link</label>
                    <input
                      type="text"
                      name="image"
                      defaultValue={selectedData.image}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Email</label>
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
                    Update Marathon
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <div className="w-11/12 md:w-1/2 lg:w-1/3 p-8 bg-white rounded-2xl shadow-xl text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
              You have not added any Marathon yet.
            </h1>
            <Link to="/dashboard/addmarathon">
              <button className="w-full py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition">
                Add Marathon
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyMarathonList;
