"use client";

import ChequeDepositForm from "@/components/ChequeDepositForm";
import Navbar from "@/components/Navbar";

export default function Cheque() {
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
        <h2 className="text-2xl font-bold mb-4">Cheque Deposit</h2>
        <ChequeDepositForm onSubmit={handleDeposit} />
      </div>
    </main>
  );
}
