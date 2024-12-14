import React from "react";

const LocationSearchPanel = (props) => {
  // sample array of locations
  const locations = [
    "123 Main St, Springfield, USA",
    "456 Elm St, Metropolis, USA",
    "789 Oak St, Gotham, USA",
    "101 Maple St, Star City, USA",
    "202 Pine St, Central City, USA",
    "303 Birch St, Coast City, USA",
  ];
  return (
    <div>
      {/* This is just a sample data */}
      {locations.map(function (elem, index) {
        return (
          <div
            key={index}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 m-2 items-center justify-start px-4 py-2 border-2 active:bg-gray-200 rounded-lg"
          >
            <h2 className="flex items-center justify-center h-9 w-9 bg-gray-100 rounded-full">
              <i className="ri-map-pin-2-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
