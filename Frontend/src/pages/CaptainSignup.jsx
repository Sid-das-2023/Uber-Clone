import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [captainData, setCaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
        
          className="w-14 mb-10"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-base font-medium mb-2">What's our captain's name?</h3>
          <div className="flex gap-4">
          <input
            required
            value={firstName}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder-gray-500 placeholder:text-sm"
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            required
            value={lastName}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder-gray-500 placeholder:text-sm"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
          />
      </div>
          <h3 className="text-base font-medium mb-2">What's our captain's email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder-gray-500 placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-sm placeholder-gray-500 placeholder:text-sm"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] mb-3 rounded px-4 py-2 w-full text-lg text-[#fff] font-semibold">
            Sign up
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight text-gray-500">
          By signing up, you agree to receive email notifications regarding your rides and other offers.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;