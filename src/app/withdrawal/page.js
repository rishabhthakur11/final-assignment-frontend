"use client";
import Navbar from "@/components/Navbar";
import WithdrawalForm from "@/components/WithdrawalForm";

export default function Withdrawal() {
  const handleWithdrawal = (formData) => {
    // Implement API call to Deposit money
    console.log(formData);
  };
  return (
    <main className="">
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Withdrawal Money</h2>
        <WithdrawalForm onSubmit={handleWithdrawal} />
      </div>
    </main>
  );
}
