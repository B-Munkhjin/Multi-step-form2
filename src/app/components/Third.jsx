"use client";
import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { differenceInYears } from "date-fns";
import { motion } from "framer-motion";

const Third = ({ data, handleChange, onSubmit, onBack }) => {
  const [error, setError] = useState({
    date: "",
    img: "",
  });

  const birthday = new Date(data.date);
  const today = new Date();

  const difference = differenceInYears(today, birthday);

  console.log(difference);

  const handleSubmit = () => {
    let valid = true;

    if (data.date === "") {
      setError((prev) => ({
        ...prev,
        date: "Please select a date.",
      }));
      valid = false;
    } else if (difference < 18) {
      setError((prev) => ({
        ...prev,
        date: "You must be 18 years old or above.",
      }));
      valid = false;
    } else {
      setError((prev) => ({
        ...prev,
        date: "",
      }));
    }

    if (data.img === "") {
      setError((prev) => ({
        ...prev,
        img: " ",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        img: "Image cannot be blank.",
      }));
      valid = false;
    }
    if (valid) onSubmit();
  };

  const [img, setImg] = useState(null);

  const image = (e) => {
    const file = e.target.files[0]; // songogdson file haruulah
    if (!file) return; // file bish bol bolih

    const url = URL.createObjectURL(file);
    setImg(() => {
      return url;
    });
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
            <div className="flex flex-col h-108.5 justify-between ">
              <div>
                <div className="flex flex-col gap-2">
                  <div className="flex w-full">
                    <h3 className="font-semibold text-sm text-[#334155]">
                      Date of birth
                    </h3>
                    {error.date && (
                      <h3 className="font-semibold text-sm text-[#E14942]">
                        &nbsp; *
                      </h3>
                    )}
                  </div>
                  <Input
                    className={`w-full h-11 rounded-lg border p-3  ${error.date ? " text-[#E14942]" : "text-[#121316]"}`}
                    type="date"
                    inputName="date"
                    onChange={handleChange}
                    value={data.date}
                  />
                  <p className="text-[#E14942] text-sm">{error.date}</p>
                </div>
                <div className="flex w-full">
                  <h3 className="font-semibold text-sm text-[#334155]">
                    Profile image
                  </h3>
                  {error.img && (
                    <h3 className="font-semibold text-sm text-[#E14942]">
                      &nbsp; *
                    </h3>
                  )}
                </div>
                <div className=" flex flex-col w-104 h-45 rounded-lg gap-2 border p-3 w-min-20 bg-[#7F7F800D] text-center items-center justify-center">
                  <div className="flex size-7 rounded-full bg-white items-center justify-center">
                    <img src="./upload.png"></img>
                  </div>
                  <h3 className="text-sm text-black">Add image</h3>
                  <Input
                    hidden
                    type="file"
                    inputName="image"
                    accept="image/*"
                    onClick={handleChange}
                    onChange={image}
                    value={data.img}
                    className={`absolute w-104 h-45 rounded-lg text-transparent border ${error.img ? " border-[#E14942]" : "text-[#121316]"}`}
                  />
                  {img && (
                    <img
                      src={img}
                      alt="previewImg"
                      className="absolute w-104 h-45 rounded-lg object-cover bg-cover"
                    />
                  )}
                </div>
                <p className="text-[#E14942] text-sm">{error.img}</p>
              </div>
              <div className="flex gap-2 mb-8">
                <div className="flex justify-center bg-white text-black w-32 text-base rounded-md border border-[#CBD5E1] font-medium">
                  <Button text="&lt; Back" onClick={onBack} />
                </div>
                <div className="flex justify-center bg-[#121316] text-white w-70 py-2.5 px-1 text-base rounded-md font-medium">
                  <Button text="Submit 3/3&nbsp; &gt;" onClick={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Third;
