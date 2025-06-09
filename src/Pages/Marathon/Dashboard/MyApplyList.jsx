import React, { use, useEffect, useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdBrowserUpdated } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router";
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
      .catch((err) => {});
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
          .then((data) => {
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

  console.log(selectId, selectedApplyData);

  let handleUpdateMarathonApply = (e, id) => {
    e.preventDefault();
    let form = e.target;
    let formDate = new FormData(form);
    let formDateObj = Object.fromEntries(formDate.entries());
    console.log(formDateObj);

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

  console.log(searchText);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Helmet>
        <title>My Apply List - Marathon App</title>
      </Helmet>

      <div className="w-full">
        <div className="">
          <form
            // onSubmit={handleSearch}
            class="max-w-md mx-auto"
          >
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by title...."
                onChange={(e) => setSearchText(e.target.value)}
                required
              />
              {/* <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button> */}
            </div>
          </form>
        </div>
        <div className="w-full ">
          {myApply.length > 0 ? (
            <div className="h-fit pb-40">
              <div className="overflow-x-auto  w-10/12 mx-auto m-10  p-5 rounded-2xl bg-gray-400 text-black shadow-[0_0px_80px_rgba(255,215,0,0.7)] ">
                <table className="table">
                  <thead>
                    <tr className="text-black text-[22px] font-semibold border-b-1 border-black">
                      <th>No</th>
                      {/* <th>Cover</th> */}
                      <th>Marathon Title</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Contact</th>
                      <th>Marathon Start</th>

                      <th>About</th>
                    </tr>
                  </thead>
                  {myApply.map((marathon, index) => (
                    <tbody key={index}>
                      <tr className="text-black text-[20px]   border-b-1 border-black">
                        <th>{index + 1}</th>
                        {/* <td>
                      <img
                        className="w-[80px] h-[50px] p-0"
                        src={marathon.image}
                        alt=""
                      />
                    </td> */}
                        <td>{marathon.title}</td>
                        <td>{marathon.first_name}</td>
                        <td>{marathon.last_name}</td>
                        <td>{marathon.number}</td>
                        <td>{marathon.marathon_start}</td>
                        <td className="grid gap-2 h-20 my-auto grid-cols-2 justify-center items-center">
                          <>
                            <button
                              className="hover:bg-amber-200"
                              onClick={() => handleSingleLoad(marathon._id)}
                            >
                              <MdBrowserUpdated fill="green" size={30} />
                            </button>

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
                                      handleUpdateMarathonApply(
                                        e,
                                        selectedApplyData._id
                                      )
                                    }
                                    className=" mx-auto p-5 px-6  bg-gray-800 text-white text-[16px] rounded-3xl shadow space-y-1"
                                  >
                                    <h2 className="text-2xl font-bold mb-4 text-center">
                                      Update Marathon Application Info
                                    </h2>

                                    <div className="">
                                      <label className="block mb-1 font-semibold">
                                        Marathon Title (Read Only)
                                      </label>
                                      <input
                                        type="text"
                                        name="title"
                                        value={selectedApplyData.title}
                                        placeholder="Marathon Title"
                                        className="w-full p-2 border rounded"
                                        required
                                      />
                                    </div>

                                    <div>
                                      <label className="block mb-1 font-semibold">
                                        Marathon Start Date (Read Only)
                                      </label>
                                      <input
                                        type="date"
                                        value={selectedApplyData.date}
                                        className="w-full p-2 border rounded"
                                        name="marathon_start"
                                        placeholderText="Marathon Date"
                                        dateFormat="yyyy-MM-dd"
                                      />
                                    </div>
                                    <div>
                                      <label className="block mb-1 font-semibold">
                                        Email (Read Only)
                                      </label>
                                      <input
                                        type="text"
                                        name="email"
                                        value={user.email}
                                        className="w-full p-2 border rounded bg-gray-800"
                                        required
                                      />
                                    </div>
                                    <div>
                                      <label className="block mb-1 font-semibold">
                                        First Name
                                      </label>
                                      <input
                                        type="text"
                                        name="first_name"
                                        defaultValue={
                                          selectedApplyData.first_name
                                        }
                                        className="w-full p-2 border rounded bg-gray-800"
                                        required
                                      />
                                    </div>
                                    <div>
                                      <label className="block mb-1 font-semibold">
                                        Last Name
                                      </label>
                                      <input
                                        type="text"
                                        name="last_name"
                                        defaultValue={
                                          selectedApplyData.last_name
                                        }
                                        className="w-full p-2 border rounded bg-gray-800"
                                        required
                                      />
                                    </div>
                                    <div>
                                      <label className="block mb-1 font-semibold">
                                        Contact Number
                                      </label>
                                      <input
                                        type="number"
                                        defaultValue={selectedApplyData.number}
                                        name="number"
                                        className="w-full p-2 border rounded bg-gray-800"
                                        required
                                      />
                                    </div>
                                    <div>
                                      <label className="block mb-1 font-semibold">
                                        Additional Info
                                      </label>
                                      <textarea
                                        name="additional_info"
                                        placeholder="Additional Info"
                                        defaultValue={
                                          selectedApplyData.additional_info
                                        }
                                        rows={4}
                                        className="w-full p-2 border rounded"
                                        required
                                      ></textarea>
                                    </div>

                                    <button
                                      type="submit"
                                      className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
                                    >
                                      Update Apply Info
                                    </button>
                                  </form>
                                </div>
                              </div>
                            )}
                          </>

                          <button
                            className="flex justify-center items-center"
                            onClick={() =>
                              handleDeleteMarathonApply(marathon._id)
                            }
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
                  You have not Applied for any Marathon Event..
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyApplyList;
