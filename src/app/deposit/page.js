"use client";

import DepositForm from "@/components/DepositForm";
import Navbar from "@/components/Navbar";

export default function Deposit() {
  const handleDeposit = (formData) => {
    // Implement API call to Deposit money
    console.log(formData);
  };
  return (
    <main className="">
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Deposit Money</h2>
        <DepositForm onSubmit={handleDeposit} />
      </div>
    </main>
  );
}
