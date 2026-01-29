"use client";

import { useState } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Last from "./components/Last";

export default function Home() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
    img: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((step) => step + 1);
  const prevStep = () => setStep((step) => step - 1);
  return (
    <div>
      {step === 1 && (
        <First data={data} handleChange={handleChange} onSubmit={nextStep} />
      )}
      {step === 2 && (
        <Second
          data={data}
          handleChange={handleChange}
          onSubmit={nextStep}
          onBack={prevStep}
        />
      )}
      {step === 3 && (
        <Third
          data={data}
          handleChange={handleChange}
          onSubmit={nextStep}
          onBack={prevStep}
        />
      )}
      {step === 4 && <Last />}
    </div>
  );
}
