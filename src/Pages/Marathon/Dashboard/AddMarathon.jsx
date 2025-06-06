import axios from "axios";
import React, { use, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider";
import { useNavigate } from "react-router";

const AddMarathon = () => {
  let { user } = use(AuthContext);
  let navigate = useNavigate()
  const [todayDate, setTodayDate] = useState(new Date());
  const [regiStartDate, setRegiStartDate] = useState();
  const [regiEndDate, setRegiEndDate] = useState();
  const [marStartDate, setMarStartDate] = useState();

  const [totalRegi, setTotalRegi] = useState(0);

  const handleAddMarathon = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formDataObj = Object.fromEntries(formData.entries());

    axios
      .post("http://localhost:5000/marathons", formDataObj)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your Marathon added sucessfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/dashboard/my-marathons')
        }
      })
      .catch((err) => {});
  };

  return (
    <div className="w-7/12 mx-auto">
      <form
        onSubmit={handleAddMarathon}
        className="w-full mx-auto p-6 bg-gray-800 text-white rounded-3xl shadow-2xl space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create Marathon</h2>

        <label className="block mb-1 font-semibold">Marathon Title</label>
        <input
          type="text"
          name="title"
          placeholder="Marathon Title"
          className="w-full p-2 border rounded"
          required
        />

        <div className="flex flex-col md:flex-row gap-4  md:justify-between">
          <div className="w-full ">
            <label className="block mb-1 font-semibold">
              Registration Start
            </label>
            <DatePicker
              selected={regiStartDate}
              onChange={(date) => {
                setRegiStartDate(date);
              }}
              className=" w-full p-2 border rounded"
              name="regi_start"
              placeholderText="Start Date"
              dateFormat="yyyy-MM-dd"
              minDate={todayDate}
            />
            {!regiStartDate ? (
              <p className="text-[12px] text-red-600">
                Firstly select registration start date
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="w-full ">
            <label className="block mb-1 font-semibold">
              Registration End{" "}
            </label>
            <DatePicker
              selected={regiEndDate}
              onChange={(date) => setRegiEndDate(date)}
              className="w-full p-2 border rounded"
              name="regi_end"
              placeholderText="End Date"
              dateFormat="yyyy-MM-dd"
              minDate={regiStartDate}
              disabled={!regiStartDate}
            />
            {!regiEndDate ? (
              <p className="text-[12px] text-red-600">
                Then select registration End date{" "}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="w-full">
          <label className="block mb-1 font-semibold">
            Marathon Start Date
          </label>
          <DatePicker
            selected={marStartDate}
            onChange={(date) => setMarStartDate(date)}
            className="w-full p-2 border rounded"
            name="marathon_start"
            placeholderText="Marathon Date"
            dateFormat="yyyy-MM-dd"
            minDate={regiEndDate}
            disabled={!regiEndDate}
          />
        </div>
        
        <div className="">
          <label className="block mb-1 font-semibold">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Running Distance</label>
          <select
            name="distance"
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
          <label className="block mb-1 font-semibold">Description</label>

          <textarea
            name="description"
            placeholder="Description"
            rows={4}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Upload Image Link</label>
          <input
            type="text"
            name="image"
            className="w-full p-2 border rounded bg-gray-800"
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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
        <label className="block mb-1 font-semibold">
          Total Registration = {0}
        </label>
      </form>
    </div>
  );
};

export default AddMarathon;
