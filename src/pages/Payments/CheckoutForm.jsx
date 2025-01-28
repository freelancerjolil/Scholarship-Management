import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const CheckoutForm = ({ scholarshipData }) => {
  const [paymentError, setPaymentError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const applicationFee = parseFloat(scholarshipData?.applicationFees || 0);

  useEffect(() => {
    if (applicationFee > 0) {
      axiosSecure
        .post('/create-payment-intent', { price: applicationFee })
        .then((res) => setClientSecret(res.data.clientSecret))
        .catch(() => {
          setPaymentError('Failed to create payment. Please try again.');
        });
    } else {
      setPaymentError('Invalid application fee.');
    }
  }, [axiosSecure, applicationFee]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setPaymentError('Stripe has not loaded yet.');
      return;
    }

    setLoading(true);
    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setPaymentError('Card details are required.');
      setLoading(false);
      return;
    }

    try {
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              email: user?.email || 'anonymous',
              name: user?.displayName || 'anonymous',
            },
          },
        }
      );

      if (error) {
        setPaymentError(error.message);
        setLoading(false);
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);

        const paymentData = {
          email: user?.email,
          price: applicationFee,
          transactionId: paymentIntent.id,
          scholarshipId: scholarshipData._id,
          date: new Date(),
          status: 'completed',
        };

        const res = await axiosSecure.post('/payments', paymentData);
        if (res.data?.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Payment Successful!',
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate(`/apply-scholarship/${scholarshipData._id}`);
          });
        }
      }
    } catch {
      setPaymentError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!scholarshipData) {
    return <p className="text-red-600">Scholarship data is missing.</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Checkout for {scholarshipData?.name}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="p-4 bg-gray-100 rounded border border-gray-300">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': { color: '#aab7c4' },
                },
                invalid: { color: '#9e2146' },
              },
            }}
          />
        </div>
        <button
          className={`btn btn-primary w-full ${loading ? 'opacity-50' : ''}`}
          type="submit"
          disabled={!stripe || !clientSecret || applicationFee <= 0 || loading}
        >
          {loading ? 'Processing...' : `Pay $${applicationFee.toFixed(2)}`}
        </button>
        {paymentError && (
          <p
            className="mt-2 text-red-600 bg-red-100 p-2 rounded text-center"
            aria-live="assertive"
          >
            {paymentError}
          </p>
        )}
        {transactionId && (
          <p
            className="mt-2 text-green-600 bg-green-100 p-2 rounded text-center"
            aria-live="polite"
          >
            Payment successful! Transaction ID: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
