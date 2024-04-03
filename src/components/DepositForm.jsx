import React, { useState } from "react";

const DepositForm = ({ onSubmit }) => {
  const [accountId, setAccountId] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ accountId, ifscCode, amount });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="accountId" className="block font-medium">
          Account ID:
        </label>
        <input
          type="text"
          id="accountId"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
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
      <div className="mb-4">
        <label htmlFor="amount" className="block font-medium">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-md px-4 py-2 w-full mt-1"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Deposit
      </button>
    </form>
  );
};

export default DepositForm;
