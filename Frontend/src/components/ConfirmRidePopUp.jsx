import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {

  const [otp, setOtp] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className='h-full'>
          <h3 className="text-2xl mb-5 font-bold text-center">Confirm Your Ride</h3>

          <div className="flex flex-col items-center">
        <div className="w-full">
        <div className='flex items-center justify-between my-2 p-3 bg-yellow-300 rounded-lg'>
            <div className="flex items-center gap-3">
                <img className='h-10 w-10 object-cover rounded-full' src="https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg" alt="" />
            <h2 className="text-lg font-medium">Harsha Patel</h2>
            </div>
            <h5 className="text-lg font-semibold">2.2 KM</h5>
        </div>
          <div className="flex gap-4 items-center p-2 border-b">
            <i className="ri-map-pin-2-fill text-lg text-gray-600"></i>
            <div>
              <h3 className="text-lg font-semibold">Pickup Location</h3>
              <p className="text-gray-500 text-sm">123 Main St</p>
            </div>
          </div>
          <div className="flex gap-4 items-center p-2 border-b">
            <i className="ri-square-fill text-lg text-gray-600"></i>
            <div>
              <h3 className="text-lg font-semibold">Dropoff Location</h3>
              <p className="text-gray-500 text-sm">456 Elm St</p>
            </div>
          </div>
          <div className="flex gap-4 items-center p-2 border-b">
            <i className="ri-time-fill text-lg text-gray-600"></i>
            <div>
              <h3 className="text-lg font-semibold">Estimated Time</h3>
              <p className="text-gray-500 text-sm">15 mins</p>
            </div>
          </div>
          <div className="flex gap-4 items-center p-2">
            <i className="ri-currency-fill text-lg text-gray-600"></i>
            <div className='flex items-center justify-between w-full'>
              <h3 className="text-lg font-semibold">Total Fare</h3>
              <p className="text-lg font-bold">$15.00</p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-2 mt-6'>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <input 
          value={otp} 
          onChange={(e)=>{
            setOtp(e.target.value);
          }} 
          type="number" 
          placeholder='Enter OTP' 
          className='bg-[#eee] px-8 py-3 text-lg rounded-lg w-full mt-2 font-mono'/>
        <div className="w-full mt-4 bg-green-500 text-white p-2 rounded-lg font-semibold text-center">
          <Link
            to='/captain-riding'
            className='text-white'
            onClick={() => {
              props.setConfirmRidePopUpPanel(false);
              props.setRidePopUpPanel(false);
            }}
          >
            Confirm Ride
          </Link>
        </div>
        <div className="w-full mt-3 bg-red-500 text-white p-2 rounded-lg font-semibold text-center">
          <button
            onClick={() => {
              props.setConfirmRidePopUpPanel(false);
              props.setRidePopUpPanel(false);
            }}
          >
            Cancel
          </button>
        </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;