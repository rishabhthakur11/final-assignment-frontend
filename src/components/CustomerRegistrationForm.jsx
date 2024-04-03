"use client";
import React, { useState } from "react";

const CustomerRegistrationForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [initialAmount, setInitialAmount] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, initialAmount, ifscCode });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md px-4 py-2 w-full mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="initialAmount" className="block font-medium">
          Initial Amount:
        </label>
        <input
          type="number"
          id="initialAmount"
          value={initialAmount}
          onChange={(e) => setInitialAmount(e.target.value)}
          className="border rounded-md px-4 py-2 w-full mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ifscCode" className="block font-medium">
          IFSC Code:
        </label>
        <input
          type="text"
          id="ifscCode"
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
          className="border rounded-md px-4 py-2 w-full mt-1"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Register
      </button>
    </form>
  );
};

export default CustomerRegistrationForm;
