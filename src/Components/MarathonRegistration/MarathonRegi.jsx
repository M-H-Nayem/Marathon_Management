import React, { use } from "react";
import { AuthContext } from "../../AuthProvider";
import { useLoaderData, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const MarathonRegi = () => {
  let navigate = useNavigate();
  let { user } = use(AuthContext);
  let { title, marathon_start, _id } = useLoaderData();

  let handleMarathonApply = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let { ...formObj } = Object.fromEntries(formData.entries());
    let formDataObj = { mainId: _id, ...formObj };
    formDataObj.regiCount=[]
    console.log(formDataObj);
    axios
      .post("http://localhost:5000/marathons-apply", formDataObj)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your Application added sucessfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(`/dashboard/myapply`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-10">
      <form
        onSubmit={handleMarathonApply}
        className="max-w-2xl mx-auto p-6 bg-gray-800 text-white rounded-2xl shadow space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Register for this Marathon
        </h2>

        <div className="">
          <label className="block mb-1 font-semibold">Marathon Title</label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Marathon Title"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="">
          <label className="block mb-1 font-semibold">
            Marathon start Date
          </label>
          <input
            type="date"
            name="date"
            placeholder="Start date"
            value={marathon_start}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            className="w-full p-2 border rounded bg-gray-800"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">First Name</label>
          <input
            type="text"
            name="first_name"
            className="w-full p-2 border rounded bg-gray-800"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Last Name</label>
          <input
            type="text"
            name="last_name"
            className="w-full p-2 border rounded bg-gray-800"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Contact Number</label>
          <input
            type="number"
            name="number"
            className="w-full p-2 border rounded bg-gray-800"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Additional Info</label>
          <textarea
            name="additional_info"
            placeholder="Additional Info"
            rows={4}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
        <label className="block mb-1 font-semibold">
        </label>
      </form>
    </div>
  );
};

export default MarathonRegi;
