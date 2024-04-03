import React, { useState } from "react";

const ChequeDepositForm = ({ onSubmit }) => {
  const [fromAccount, setFromAccount] = useState("");
  const [fromIfscCode, setFromIfscCode] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [toIfscCode, setToIfscCode] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ fromAccount, fromIfscCode, toAccount, toIfscCode, amount });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="fromAccount" className="block font-medium">
          From Account:
        </label>
        <input
          type="text"
          id="fromAccount"
          value={fromAccount}
          onChange={(e) => setFromAccount(e.target.value)}
          className="border rounded-md px-4 py-2 w-full mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fromIfscCode" className="block font-medium">
          From IFSC Code:
        </label>
        <input
          type="text"
          id="fromIfscCode"
          value={fromIfscCode}
          onChange={(e) => setFromIfscCode(e.target.value)}
          className="border rounded-md px-4 py-2 w-full mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="toAccount" className="block font-medium">
          To Account:
        </label>
        <input
          type="text"
          id="toAccount"
          value={toAccount}
          onChange={(e) => setToAccount(e.target.value)}
          className="border rounded-md px-4 py-2 w-full mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="toIfscCode" className="block font-medium">
          To IFSC Code:
        </label>
        <input
          type="text"
          id="toIfscCode"
          value={toIfscCode}
          onChange={(e) => setToIfscCode(e.target.value)}
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
        Deposit Cheque
      </button>
    </form>
  );
};

export default ChequeDepositForm;
