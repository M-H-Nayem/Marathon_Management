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
  const [isOpen, setIsOpen] = useState(false);
  let [loading, setLoading] = useState(true);
  let [myMarathons, setMyMarathons] = useState([]);
  let [selectId, setSelectId] = useState(null);
  let [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    axios(`http://localhost:5000/my-marathons/${user.email}`)
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
        fetch(`http://localhost:5000/marathons/${id}`, {
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
      axios(`http://localhost:5000/marathons/${selectId}`)
        .then((res) => {
          setSelectedData(res.data);
          setSelectId(null);
          setLoading(false);
          setIsOpen(true);
        })
        .catch((err) => console.error(err));
    }
  }, [selectId]);

  console.log(selectId, selectedData);

  const handleUpdateMarathon = (e, id) => {
    e.preventDefault();
    let form = e.target;
    let formDate = new FormData(form);
    let formDateObj = Object.fromEntries(formDate.entries());
    console.log(formDateObj);

    axios
      .put(`http://localhost:5000/marathons/${id}`, formDateObj)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Your Marathon Updated sucessfully",
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

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Helmet><title>My Marathon List</title></Helmet>
      
      <div className="w-full ">
      {myMarathons.length > 0 ? (
        <div className="h-fit pb-40">
          <div className="overflow-x-auto  w-10/12 mx-auto m-10  p-5 rounded-2xl bg-gray-400 text-black shadow-[0_0px_80px_rgba(255,215,0,0.7)] ">
            <table className="table">
              <thead>
                <tr className="text-black text-[22px] font-semibold border-b-1 border-black">
                  <th>No</th>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Distance</th>
                  <th>Marathon Start Date</th>

                  <th>About</th>
                </tr>
              </thead>
              {myMarathons.map((marathon, index) => (
                <tbody key={index}>
                  <tr className="text-black text-[20px]   border-b-1 border-black">
                    <th>{index + 1}</th>
                    <td>
                      <img
                        className="w-[80px] h-[50px] p-0"
                        src={marathon.image}
                        alt=""
                      />
                    </td>
                    <td>{marathon.title}</td>
                    <td>{marathon.location}</td>
                    <td>{marathon.distance}</td>
                    <td>{marathon.marathon_start}</td>

                    <td className="grid h-20 my-auto grid-cols-2 justify-center items-center">
                      <>
                        <Link
                        // to={`/dashboard/${marathon._id}`}
                        >
                          <button
                            className="hover:bg-amber-100 mt-2"
                            onClick={() => handleSingleLoad(marathon._id)}
                          >
                            <MdBrowserUpdated fill="green" size={30} />
                          </button>
                        </Link>

                        {isOpen && (
                          <div className="fixed inset-0  bg-opacity-10 flex h-screen py-50 justify-center items-center z-50">
                            <div className="bg-gray-700 rounded-3xl shadow-lg w-180  relative">
                              <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => setIsOpen(false)}
                              >
                                ✕
                              </button>

                              <form
                                onSubmit={(e) =>
                                  handleUpdateMarathon(e, selectedData._id)
                                }
                                className=" mx-auto p-5 px-6  bg-gray-800 text-white text-[16px] rounded-3xl shadow space-y-1"
                              >
                                <h2 className="text-2xl font-bold mb-4 text-center">
                                  Update Marathon Info
                                </h2>

                                <label className="block mb-1 font-semibold">
                                  Marathon Title (Read Only)
                                </label>
                                <input
                                  type="text"
                                  name="title"
                                  value={selectedData.title}
                                  placeholder="Marathon Title"
                                  className="w-full p-2 border rounded"
                                  required
                                />

                                <div className="flex flex-col md:flex-row gap-4">
                                  <div className="flex-1">
                                    <label className="block mb-1 font-semibold">
                                      Registration Start
                                    </label>
                                    <input
                                      type="date"
                                      defaultValue={selectedData.regi_start}
                                      className="w-full p-2 border rounded"
                                      name="regi_start"
                                      placeholderText="Start Date"
                                      dateFormat="yyyy-MM-dd"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <label className="block mb-1 font-semibold">
                                      Registration End
                                    </label>
                                    <input
                                      type="date"
                                      defaultValue={selectedData.regi_end}
                                      className="w-full p-2 border rounded"
                                      name="regi_start"
                                      placeholderText="Start Date"
                                      dateFormat="yyyy-MM-dd"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label className="block mb-1 font-semibold">
                                    Marathon Start Date (Read Only)
                                  </label>
                                  <input
                                    type="date"
                                    value={selectedData.marathon_start}
                                    className="w-full p-2 border rounded"
                                    name="marathon_start"
                                    placeholderText="Marathon Date"
                                    dateFormat="yyyy-MM-dd"
                                  />
                                </div>
                                <div className="">
                                  <label className="block mb-1 font-semibold">
                                    Location
                                  </label>
                                  <input
                                    type="text"
                                    name="location"
                                    defaultValue={selectedData.location}
                                    placeholder="Location"
                                    className="w-full p-2 border rounded"
                                    required
                                  />
                                </div>

                                <div>
                                  <label className="block mb-1 font-semibold">
                                    Running Distance
                                  </label>
                                  <select
                                    name="distance"
                                    defaultValue={selectedData.distance}
                                    className="w-full p-2 border rounded bg-gray-800"
                                    required
                                  >
                                    <option value="">Select Distance</option>
                                    <option value="25k">25k</option>
                                    <option value="10k">10k</option>
                                    <option value="3k">3k</option>
                                  </select>
                                </div>

                                <div className="">
                                  <label className="block mb-1 font-semibold">
                                    Description
                                  </label>
                                  <input
                                    type="text"
                                    defaultValue={selectedData.description}
                                    name="description"
                                    placeholder="Description"
                                    rows={4}
                                    className="w-full p-2 border rounded"
                                    required
                                  />
                                </div>

                                <div>
                                  <label className="block mb-1 font-semibold">
                                    Upload Image Link
                                  </label>
                                  <input
                                    type="text"
                                    name="image"
                                    defaultValue={selectedData.image}
                                    className="w-full p-2 border rounded bg-gray-800"
                                    required
                                  />
                                </div>
                                <div>
                                  <label className="block mb-1 font-semibold">
                                    Email
                                  </label>
                                  <input
                                    type="text"
                                    name="email"
                                    value={user.email}
                                    className="w-full p-2 border rounded bg-gray-800"
                                    required
                                  />
                                </div>

                                <button
                                  type="submit"
                                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
                                >
                                  Update
                                </button>
                              </form>
                            </div>
                          </div>
                        )}
                      </>

                      <button
                        className="flex hover:bg-amber-100 justify-center items-center"
                        onClick={() => handleDeleteMarathon(marathon._id)}
                      >
                        <RiDeleteBin2Line fill="red" size={28} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      ) : (
        <div className="h-screen">
          <div className="w-[35%] mx-auto my-10 p-10 border-2  rounded-2xl bg-gray-300 text-black">
            <h1 className="text-3xl text-center">
              You have not Added any Marathon yet
            </h1>
            <Link to={`/dashboard/addmarathon`}>
              <p className="text-center text-2xl mt-5 btn flex w-[100%] mx-auto">
                Add Marathon
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default MyMarathonList;
