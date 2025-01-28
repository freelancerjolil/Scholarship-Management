import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

// Load the Stripe publishable key from environment variables
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payments = () => {
  const location = useLocation();
  const scholarshipData = location.state?.scholarship;
  console.log(scholarshipData);
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Complete Your Payment
        </h1>
        <Elements stripe={stripePromise}>
          <CheckOutForm scholarshipData={scholarshipData} />
        </Elements>
      </div>
    </div>
  );
};

export default Payments;
