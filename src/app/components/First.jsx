"use client";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import { motion } from "framer-motion";

const First = ({ data, handleChange, onSubmit }) => {
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  // (/^[а-яА-ЯӨөҮүЁё\s-]+$/.test(formData.firstName))
  const handleSubmit = () => {
    let valid = true;
    if (data.firstName === "") {
      setError((prev) => ({
        ...prev,
        firstName: "First name cannot be empty.",
      }));
      valid = false;
    } else if (/[^a-zA-Z-]/.test(data.firstName)) {
      setError((prev) => ({
        ...prev,
        firstName: "First name cannot contain numbers.",
      }));
      valid = false;
    } else {
      setError((prev) => ({
        ...prev,
        firstName: "",
      }));
    }

    if (data.lastName === "") {
      setError((prev) => ({
        ...prev,
        lastName: "Last name cannot be empty.",
      }));
      valid = false;
    } else if (/[^a-zA-Z-]/.test(data.lastName)) {
      setError((prev) => ({
        ...prev,
        lastName: "Last name cannot contain numbers.",
      }));
      valid = false;
    } else {
      setError((prev) => ({
        ...prev,
        lastName: "",
      }));
    }

    if (data.userName === "") {
      setError((prev) => ({
        ...prev,
        userName: "Username cannot be empty.",
      }));
      valid = false;
    } else {
      setError((prev) => ({
        ...prev,
        userName: "",
      }));
    }
    if (valid === true) onSubmit();
  };
  console.log(data);

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
            <div className="flex flex-col justify-between h-108.5">
              <div className="flex flex-col gap-2 ">
                <div className="flex w-full">
                  <h1 className="font-semibold text-sm text-[#334155]">
                    First name
                  </h1>
                  {error.firstName && (
                    <h1 className="font-semibold text-sm text-[#E14942]">
                      &nbsp; *
                    </h1>
                  )}
                </div>
                <Input
                  className={`w-full h-11 rounded-lg border p-3  ${error.firstName ? " text-[#E14942]" : "text-[#121316]"}`}
                  placeholder="First Name"
                  type="text"
                  inputName="firstName"
                  onChange={handleChange}
                  value={data.firstName}
                />
                <p className="text-[#E14942] text-sm">{error.firstName}</p>

                <div className="flex flex-col gap-2">
                  <div className="flex w-full">
                    <h1 className="font-semibold text-sm text-[#334155]">
                      Last name
                    </h1>
                    {error.lastName && (
                      <h1 className="font-semibold text-sm text-[#E14942]">
                        &nbsp; *
                      </h1>
                    )}
                  </div>
                  <Input
                    className={`w-full h-11 rounded-lg border p-3  ${error.lastName ? " text-[#E14942]" : "text-[#121316]"}`}
                    placeholder="Last Name"
                    type="text"
                    inputName="lastName"
                    onChange={handleChange}
                    value={data.lastName}
                  />
                  <p className="text-[#E14942] text-sm">{error.lastName}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex w-full">
                    <h1 className="font-semibold text-sm text-[#334155]">
                      Username
                    </h1>
                    {error.userName && (
                      <h1 className="font-semibold text-sm text-[#E14942]">
                        &nbsp; *
                      </h1>
                    )}
                  </div>
                  <Input
                    className={`w-full h-11 rounded-lg border p-3  ${error.userName ? " text-[#E14942]" : "text-[#121316]"}`}
                    placeholder="Username"
                    type="text"
                    inputName="userName"
                    onChange={handleChange}
                    value={data.userName}
                  />
                  <p className="text-[#E14942] text-sm mb-8">
                    {error.userName}
                  </p>
                </div>
              </div>
              <div>
                <div className=" bg-[#121316] w-full text-white py-2.5 px-3 flex justify-center text-base rounded-md mb-8">
                  <Button
                    text="Continue 1/3&nbsp; &gt;"
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

export default First;
