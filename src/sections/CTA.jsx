import React from 'react'
import Laptop from '../assets/laptop.jpg'

const CTA = () => {
  return (
    <div className="sm:px-[150px] p-8 bg-white w-full flex flex-col items-center sm:flex-row">
      <img src={Laptop} className="my-2 sm:w-[50%]" />
      <div>
        <p className="text-green-500 font-bold ">DATA ANALYTICS DASHBOARD</p>
        <h3 className="text-4xl font-bold my-2">
          Manage Data Analytics Centrally
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic pariatur
          magni consectetur labore atque et facilis quisquam velit suscipit
          molestias dolorum architecto, enim ducimus, asperiores necessitatibus,
          blanditiis mollitia itaque modi!
        </p>
        <button className='text-green-400 bg-black px-6 py-2 rounded-md my-2'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default CTA