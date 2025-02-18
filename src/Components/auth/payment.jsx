import React from "react";
import axios from "axios";

const Payment = () => {
  const handlePayment = async () => {
    const { data } = await axios.post("http://localhost:7000/api/payment/create-order", {
      amount: 500, // Amount in INR
      currency: "INR",
    });

    const options = {
      key: "your_razorpay_key_id", // Replace directly with Razorpay Key ID
      amount: data.order.amount,
      currency: data.order.currency,
      order_id: data.order.id,
      handler: async (response) => {
        // Verify payment
        const verify = await axios.post("http://localhost:7000/api/payment/verify-payment", {
          ...response,
          appointmentData: {
            patientName: "John Doe",
            patientEmail: "john@example.com",
            doctorId: "doctor123",
            slot: "10:00 AM",
            date: "2024-06-20",
          },
        });

        if (verify.data.success) {
          alert("Payment successful and appointment booked!");
        } else {
          alert("Payment failed!");
        }
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <h2>Pay and Book Appointment</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
