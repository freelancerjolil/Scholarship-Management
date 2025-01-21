import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Payments = () => {
  const { id } = useParams(); // Get the scholarship ID from URL
  const [paymentStatus, setPaymentStatus] = useState(false); // Track payment status
  const navigate = useNavigate();

  // Handle Payment logic (this can integrate with a payment gateway like Stripe)
  const handlePayment = async () => {
    try {
      // Simulate payment processing (replace with actual gateway logic)
      // Example: Stripe/SSL-commerz integration here

      // If payment is successful
      setPaymentStatus(true);
      toast.success(
        'Payment successful! You can now apply for the scholarship.'
      );

      // Redirect to apply page after payment
      navigate(`/apply/${id}`);
    } catch (error) {
      setPaymentStatus(false);
      toast.error('Payment failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold">Payment Page</h2>
      <p className="mt-4">Proceed with payment to apply for the scholarship.</p>

      <button
        onClick={handlePayment}
        className="btn bg-[#ec4899] text-white hover:bg-[#f954a6] w-full mt-6"
      >
        Pay Application Fee
      </button>

      {paymentStatus && (
        <div className="mt-4">
          <p>Payment Successful!</p>
        </div>
      )}
    </div>
  );
};

export default Payments;
