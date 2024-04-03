import React, { useState } from "react";

const BalanceEnquiryForm = ({ onSubmit }) => {
  const [accountId, setAccountId] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await onSubmit({ accountId, ifscCode });
      setBalance(response.balance);
      setError(null);
    } catch (error) {
      setBalance(null);
      setError(
        "Error fetching balance. Please check your details and try again."
      );
    }
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
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Check Balance
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {balance !== null && <p className="mt-2">Balance: {balance}</p>}
    </form>
  );
};

export default BalanceEnquiryForm;
