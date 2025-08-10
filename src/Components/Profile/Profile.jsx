import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import Loading from '../Loading/Loading';

const Profile = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl text-red-500">No user found. Please log in.</p>
            </div>
        );
    }

    // Function to format timestamp to a readable date
   

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-lg p-8 transform transition-transform duration-500 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                        {user.photoURL ? (
                            <img
                                className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg object-cover"
                                src={user.photoURL}
                                alt="User Profile"
                            />
                        ) : (
                            <FaUserCircle size={128} className="text-gray-400" />
                        )}
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{user.displayName || 'User Name Not Available'}</h1>
                    <p className="text-lg text-gray-600 mb-4">{user.email}</p>
                </div>

                <div className="space-y-4 text-gray-700">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p className="font-semibold">User ID: <span className="font-normal">{user.uid}</span></p>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="font-semibold">Member Since: <span className="font-normal">20-02-2025</span></p>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <p className="font-semibold">Last Sign In: <span className="font-normal">loading......</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;