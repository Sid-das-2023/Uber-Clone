import React from 'react'
import { Link } from 'react-router-dom';

const FinishRidePanel = (props) => {
return (
    <div>
        <h5
            onClick={() => {
                props.setFinishRidePanel(false);
            }}
            className="p-2 text-center absolute top-0 w-[93%]"
        >
            <i className="text-xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl mb-6 font-bold">
            Ride Finished!
        </h3>
        <div className='flex items-center justify-between mb-2 p-3 bg-yellow-300 rounded-lg'>
            <div className="flex items-center gap-3">
                <img className='h-10 w-10 object-cover rounded-full' src="https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg" alt="" />
                <h2 className="text-lg font-medium">Harsha Patel</h2>
            </div>
            <h5 className="text-lg font-semibold">Total: 10.5 KM</h5>
        </div>

        <div className="flex gap-3 justify-between items-center flex-col">
            <div className="w-full mt-2">
                <div className="flex gap-6 items-center p-3 border-b-2">
                    <i className="ri-map-pin-2-fill text-lg"></i>
                    <div>
                        <h3 className="text-lg font-semibold">Pickup Location</h3>
                        <p className="text-gray-500 -mt-1 text-sm">
                            123 Main Street, Springfield
                        </p>
                    </div>
                </div>
                <div className="flex gap-5 items-center p-3 border-b-2">
                    <i className="ri-square-fill text-base"></i>
                    <div>
                        <h3 className="text-lg font-semibold">Dropoff Location</h3>
                        <p className="text-gray-500 -mt-1 text-sm">
                            456 Elm Street, Springfield
                        </p>
                    </div>
                </div>
                <div className="flex gap-5 items-center p-3">
                    <i className="ri-time-fill text-lg"></i>
                    <div>
                        <h3 className="text-lg font-semibold">Time Elapsed</h3>
                        <p className="text-gray-500 -mt-1 text-sm">25 minutes</p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-5 bg-green-500 text-white p-2 rounded-lg font-semibold text-center">
                <Link
                    to='/captain-home'
                    onClick={() => {
                        props.setFinishRidePanel(false);
                    }}
                >
                    Complete Ride
                </Link>
            </div>
        </div>
    </div>
)
}

export default FinishRidePanel
