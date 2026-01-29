"use client";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import { motion } from "framer-motion";

const Second = ({ data, handleChange, onSubmit, onBack }) => {
  const [error, setError] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  // console.log("error: ", error);

  const handleSubmit = () => {
    // console.log("button daragdaj bn");

    let valid = true;

    if (data.email === "") {
      setError((prev) => ({
        ...prev,
        email: "Email cannot be empty.",
      }));
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      //email requirement @gmail.com
      setError((prev) => ({
        ...prev,
        email: "Please provide a valid email address.",
      }));
      valid = false;
    } else {
      setError((prev) => ({
        ...prev,
        email: "",
      }));
    }

    if (data.phoneNumber === "") {
      setError((prev) => ({
        ...prev,
        phoneNumber: "Phone number cannot be empty.",
      }));
      valid = false;
    } else if (!/^\+?\d{8}$/.test(data.phoneNumber)) {
      setError((prev) => ({
        ...prev,
        phoneNumber: "Please enter a valid phone number.",
      }));
      valid = false;
    } else {
      setError((prev) => ({
        ...prev,
        phoneNumber: "",
      }));
    }

    if (data.password === "") {
      setError((prev) => ({
        ...prev,
        password: "Password cannot be empty.",
      }));
      valid = false;
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(
        data.password,
      )
    ) {
      setError((prev) => ({
        ...prev,
        password:
          "Password must be above 6 character with at least one letter and one number.",
      }));
      valid = false;
    } else {
      setError((prev) => ({
        ...prev,
        password: "",
      }));
    }
    if (data.confirmPassword === "") {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Please confirm password.",
      }));
      valid = false;
    } else if (data.password !== data.confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match. Please try again.",
      }));
      valid = false;
    } else {
      setError((prev) => ({
        ...prev,
        confirmPassword: "",
      }));
    }
    if (valid) onSubmit();
  };

  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="m-auto relative top-45.5 w-120 h-full rounded-lg p-8 bg-white gap-7 ">
        <div className="flex flex-col h-32.25 gap-2 justify-start">
          <img src="/pinecone.png" className="w-15 h-15" />
          <h1 className="font-semibold text-[26px] text-[#202124] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            Join Us! 😎
          </h1>
          <p className="text-lg text-[#8E8E8E] ">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="relative top-7">
            <div className="flex flex-col justify-between h-132.5">
              <div className="flex flex-col gap-2">
                <div className="flex w-full">
                  <h2 className="font-semibold text-sm text-[#334155]">
                    Email
                  </h2>
                  {error.email && (
                    <h2 className="font-semibold text-sm text-[#E14942]">
                      &nbsp; *
                    </h2>
                  )}
                </div>
                <Input
                  className={`w-full h-11 rounded-lg border p-3  ${error.email ? " text-[#E14942]" : "text-[#121316]"}`}
                  placeholder="Email"
                  type="text"
                  inputName="email"
                  onChange={handleChange}
                  value={data.email}
                />
                <p className="text-[#E14942] text-sm">{error.email}</p>

                <div className="flex w-full">
                  <h2 className="font-semibold text-sm text-[#334155]">
                    Phone number
                  </h2>
                  {error.phoneNumber && (
                    <h2 className="font-semibold text-sm text-[#E14942]">
                      &nbsp; *
                    </h2>
                  )}
                </div>
                <Input
                  className={`w-full h-11 rounded-lg border p-3  ${error.phoneNumber ? " text-[#E14942]" : "text-[#121316]"}`}
                  placeholder="Phone number"
                  type="text"
                  inputName="phoneNumber"
                  onChange={handleChange}
                  value={data.phoneNumber}
                />
                <p className="text-[#E14942] text-sm">{error.phoneNumber}</p>

                <div className="flex w-full">
                  <h2 className="font-semibold text-sm text-[#334155]">
                    Password
                  </h2>
                  {error.password && (
                    <h2 className="font-semibold text-sm text-[#E14942]">
                      &nbsp; *
                    </h2>
                  )}
                </div>

                <Input
                  className={`w-full h-11 rounded-lg border p-3  ${error.password ? " text-[#E14942]" : "text-[#121316]"}`}
                  placeholder="Password"
                  type="password"
                  inputName="password"
                  onChange={handleChange}
                  value={data.password}
                />

                <p className="text-[#E14942] text-sm">{error.password}</p>

                <div className="flex w-full">
                  <h2 className="font-semibold text-sm text-[#334155]">
                    Confirm password
                  </h2>
                  {error.confirmPassword && (
                    <h2 className="font-semibold text-sm text-[#E14942]">
                      &nbsp; *
                    </h2>
                  )}
                </div>
                <Input
                  className={`w-full h-11 rounded-lg border p-3  ${error.confirmPassword ? " text-[#E14942]" : "text-[#121316]"}`}
                  placeholder="Confirm password"
                  type="password"
                  inputName="confirmPassword"
                  onChange={handleChange}
                  value={data.confirmPassword}
                />
                <p className="text-[#E14942] text-sm">
                  {error.confirmPassword}
                </p>
              </div>
              <div className="flex gap-2 mb-8">
                <div className="flex justify-center bg-white text-black w-32 text-base rounded-md border border-[#CBD5E1] font-medium">
                  <Button text="&lt; Back" onClick={onBack} />
                </div>
                <div className="flex justify-center bg-[#121316] text-white w-70 py-2.5 px-1 text-base rounded-md font-medium">
                  <Button
                    text="Continue 2/3&nbsp; &gt;"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Second;
