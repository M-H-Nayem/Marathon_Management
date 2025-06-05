import React from 'react';

const Error = () => {
    return (
        <div className='w-[50%] h-[50%] mx-auto my-15 bg-white rounded-2xl'>
            <img className='p-10' src="/undraw_page-not-found_6wni.png" alt="" />
            <p className='text-red-700 text-4xl font-bold text-center pb-15'>Page not found</p>
        </div>
    );
};

export default Error;