import React, { use } from 'react';
import { Link } from 'react-router';
import Loading from '../Loading/Loading';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider';

const Profile = () => {
    let { user } = use(AuthContext)
    // console.log(user);
    return (
         <>
      {user ? (
        <div className="h-[400px] text-black flex flex-col justify-center items-center gap-3 shadow-2xl bg-gray-100 w-fit mx-auto p-10 rounded-3xl my-10">
          <img className='w-20 h-20 rounded-full' src={user?` ${user.photoURL}`:<FaUserCircle size={50} fill="#eb41a0" />} alt="" />
          {/* <FaUserCircle size={50} fill="#eb41a0" /> */}
          <p className="text-2xl font-bold">User Name :{user.displayName}</p>
          <p className="text-xl font-semibold">User Email :{user.email}</p>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </>
    );
};

export default Profile;