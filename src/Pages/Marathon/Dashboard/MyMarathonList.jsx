import React, { use, useState } from "react";
import { AuthContext } from "../../../AuthProvider";
import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Link, useLoaderData } from "react-router";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { Button, Modal } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';


const MyMarathonList = () => {
  let marathons = useLoaderData();
  let { user } = use(AuthContext);
  let filteredMarathons = marathons.filter(
    (marathon) => marathon.email === user.email
  );
  let [myMarathons, setMyMarathons] = useState(filteredMarathons);

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

  // let handleUpdateMarathon = () => {
  //   console.log("object");
  // };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="w-full ">
      {myMarathons.length > 0 ? (
        <div className="h-screen">
          <div className="overflow-x-auto  w-10/12 mx-auto m-10  p-5 rounded-2xl bg-gray-400 text-black shadow-[0_0px_80px_rgba(255,215,0,0.7)] ">
            <table className="table">
              <thead>
                <tr className="text-black text-[22px] font-semibold border-b-1 border-black">
                  <th>No</th>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Distance</th>

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
                    <td className="flex gap-5 justify-center items-center">
                      {/* <Link to={`/marathon_details/${marathon._id}`}>
                        <button className="mt-2">
                          <FaEye fill="green" size={23} />
                        </button>
                      </Link> */}
                      <div
                      // to={`/update_marathon/${marathon._id}`}
                      >
                        {/* <button
                          // onClick={handleUpdateMarathon}
                          className="flex items-center"
                        >
                          <FaEdit fill="blue" size={23} />
                        </button> */}
                        <div>
                          <Button variant="primary" onClick={handleShow}>
                            Launch demo modal
                          </Button>

                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Woohoo, you are reading this text in a modal!
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button variant="primary" onClick={handleClose}>
                                Save Changes
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteMarathon(marathon._id)}
                      >
                        <RiDeleteBin2Line fill="red" size={23} />
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
              You have not Added any task yet
            </h1>
            <Link to={`/addtask`}>
              <p className="text-center text-2xl mt-5 btn flex w-[40%] mx-auto">
                Add task
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyMarathonList;
