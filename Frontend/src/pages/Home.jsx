import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import WaitingForDriver from "../components/WaitingForDriver";
import DriverDetailsPanel from "../components/DriverDetailsPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vechiclePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useEffect(() => {
    if (vehiclePanel) {
      gsap.to(vechiclePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(vechiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useEffect(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);

  useEffect(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useEffect(() => {
    if (waitingForDriverPanel) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriverPanel]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-14 absolute left-5 top-5"
        src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
        alt="Uber Logo"
      />
      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20220218205322/WhatsAppImage20220218at54912PM-304x660.jpeg"
          alt="Background"
        />
      </div>
      <div className="h-screen flex flex-col justify-end absolute top-0 w-full">
        <div className="h-[30%] bg-white p-5 relative rounded-lg">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 right-6 top-4 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-bold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[40%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              type="text"
              placeholder="Add a pick-up location"
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              placeholder="Enter your destination"
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
            />
          </form>
        </div>
        {/* we can give height 0 when not needed and then h-[70%] once clicked */}
        <div ref={panelRef} className="h-[70%] bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vechiclePanelRef}
        className="fixed w-full px-3 py-10 pt-12 z-10 bottom-0 bg-white translate-y-full"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed w-full px-3 py-10 pt-12 z-10 bottom-0 bg-white translate-y-full"
      >
        <ConfirmedRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full px-3 py-10 pt-12 z-10 bottom-0 bg-white translate-y-full"
      >
        <WaitingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full px-3 py-10 pt-12 z-10 bottom-0 bg-white translate-y-full"
      >
        <DriverDetailsPanel setWaitingForDriverPanel={setWaitingForDriverPanel} />
      </div>
    </div>
  );
};

export default Home;
