import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen flex flex-col">
      <Link to="/home" className="fixed right-2 top-2 h-10 w-10 flex items-center justify-center bg-white rounded-full shadow-lg">
      <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20220218205322/WhatsAppImage20220218at54912PM-304x660.jpeg"
          alt="Background"
        />
      </div>
      <div className="h-1/2 p-4">
      <div className="flex items-center justify-between mb-3">
        <img
          className="h-20 rounded-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
          alt="Car"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Sarthak</h2>
          <h4 className="text-xl font-bold">MP04 AB 1234</h4>
          <p className="text-sm text-gray-500">Maruti Suzuki</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 p-3 border-b">
          <i className="ri-square-fill text-lg"></i>
          <div>
            <h3 className="text-lg font-semibold">Drop-off Location</h3>
            <p className="text-gray-500 text-sm">456 Elm Street, Springfield</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3">
          <i className="ri-currency-fill text-lg"></i>
          <div>
            <h3 className="text-lg font-semibold">$85.50</h3>
            <p className="text-gray-500 text-sm">Cash</p>
          </div>
        </div>
        <div>
          <button className="bg-green-500 rounded-lg px-4 py-2 w-full text-xl text-white font-semibold">
            Make a Payment
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Riding;
