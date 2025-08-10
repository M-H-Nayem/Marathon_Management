import axios from "axios";
import React, { use, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const AddMarathon = () => {
  let { user } = use(AuthContext);
  let navigate = useNavigate();
  const [todayDate, setTodayDate] = useState(new Date());
  const [regiStartDate, setRegiStartDate] = useState();
  const [regiEndDate, setRegiEndDate] = useState();
  const [marStartDate, setMarStartDate] = useState();

  const handleAddMarathon = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formDataObj = Object.fromEntries(formData.entries());

    axios
      .post("https://marathon-server-side.vercel.app/marathons", formDataObj)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your Marathon added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/my-marathons");
        }
      })
      .catch((err) => {});
  };

  return (
    <div className="">
      <Helmet>
        <title>Add Marathon - Marathon Pro</title>
      </Helmet>
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-lg">
        <form onSubmit={handleAddMarathon} className="space-y-6">
          <h2 className="text-4xl mb-10 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent md:text-5xl font-bold text-center h-15">
            Create Marathon
          </h2>

          <label className="block font-semibold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent mb-1">
            Marathon Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Marathon Title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block font-semibold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent mb-1">
                Registration Start
              </label>
              <DatePicker
                selected={regiStartDate}
                onChange={(date) => setRegiStartDate(date)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                name="regi_start"
                placeholderText="Start Date"
                dateFormat="yyyy-MM-dd"
                minDate={todayDate}
              />
              {!regiStartDate && (
                <p className="text-sm text-red-500 mt-1">
                  Please select registration start date
                </p>
              )}
            </div>

            <div className="flex-1">
              <label className="block font-semibold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent mb-1">
                Registration End
              </label>
              <DatePicker
                selected={regiEndDate}
                onChange={(date) => setRegiEndDate(date)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                name="regi_end"
                placeholderText="End Date"
                dateFormat="yyyy-MM-dd"
                minDate={regiStartDate}
                disabled={!regiStartDate}
              />
              {!regiEndDate && (
                <p className="text-sm text-red-500 mt-1">
                  Please select registration end date
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block font-semibold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent mb-1">
              Marathon Start Date
            </label>
            <DatePicker
              selected={marStartDate}
              onChange={(date) => setMarStartDate(date)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              name="marathon_start"
              placeholderText="Marathon Date"
              dateFormat="yyyy-MM-dd"
              minDate={regiEndDate}
              disabled={!regiEndDate}
            />
          </div>

          <div>
            <label className="block font-semibold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label className="block font-semibold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent mb-1">
              Running Distance
            </label>
            <select
              name="distance"
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="">Select Distance</option>
              <option value="25k">25k</option>
              <option value="10k">10k</option>
              <option value="3k">3k</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Description"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent mb-1">
              Upload Image Link
            </label>
            <input
              type="text"
              name="image"
              placeholder="Upload Image Link"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label className="block font-semibold bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] bg-clip-text text-transparent mb-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={user.email}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] hover:from-[#06B6D4] hover:to-[#1E3A8A] transition"
          >
            Add Marathon
          </button>
        </form>
      </div>

      <style>{`
        .text-gradient {
          background: linear-gradient(90deg, #1E40AF 0%, #06B6D4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default AddMarathon;
