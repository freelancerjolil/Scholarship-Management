import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../components/Shared/SectionTitle';

const Payments = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  return (
    <div>
      <SectionTitle
        heading="Payment Page"
        subHeading="Proceed with payment to apply for the scholarship."
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          {/* <CheckOutForm></CheckoutForm> */}
        </Elements>
      </div>
    </div>
  );
};

export default Payments;

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-semibold">Payment Page</h2>
//       <p className="mt-4">Proceed with payment to apply for the scholarship.</p>

//       <button
//         onClick={handlePayment}
//         className="btn bg-[#ec4899] text-white hover:bg-[#f954a6] w-full mt-6"
//       >
//         Pay Application Fee
//       </button>

//       {paymentStatus && (
//         <div className="mt-4">
//           <p>Payment Successful!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Payments;
