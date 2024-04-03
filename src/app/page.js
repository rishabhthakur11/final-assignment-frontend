"use client"

import CustomerRegistrationForm from "@/components/CustomerRegistrationForm";
import Navbar from "@/components/Navbar";

export default function Home() {
  const handleCustomerRegistration = (formData) => {
    // Implement API call to register customer
    console.log(formData);
  };
  return (
    <main className="">
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Customer Registration</h2>
        <CustomerRegistrationForm onSubmit={handleCustomerRegistration} />
      </div>
    </main>
  );
}
