import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Password validation function
  const validatePassword = (password) => {
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidation.test(password)) {
      return 'Password must contain at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long.';
    }
    return '';
  };

  // Handle password change with validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError(validatePassword(value));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (error || !email || !password || !name || !photo) {
      toast.error('Please check your inputs.', {
        position: 'top-center',
        autoClose: 5000,
      });
      return;
    }

    try {
      setLoading(true);
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      // Update user profile with display name and photo
      await updateUserProfile(name, photo);

      // Set user in context
      setUser(user);

      // Show success message and navigate
      toast.success('Registration successful! Redirecting...', {
        position: 'top-center',
        autoClose: 3000,
      });
      navigate('/');
    } catch (err) {
      console.error('Signup error:', err.message);
      const errorMessage =
        err.code === 'auth/email-already-in-use'
          ? 'Email is already in use. Please try another.'
          : err.code === 'auth/invalid-email'
          ? 'Invalid email format. Please check your email.'
          : 'Failed to create account. Please try again.';
      toast.error(errorMessage, {
        position: 'top-center',
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full lg:min-h-screen bg-[#F7F8FA] flex justify-center items-center">
      <Helmet>
        <title>Edu-Track | Signup</title>
      </Helmet>
      <div className="card bg-white shadow-sm w-full max-w-lg p-8 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mt-4 text-[#134479]">
            Sign Up for Scholarship Portal
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#134479]">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#134479]">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#134479]">Email</span>
            </label>
            <input
              type="email"
              placeholder="e-mail@mail.com"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#134479]">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="input input-bordered w-full"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-[#21B1E6] text-white hover:bg-[#1e9dcb] w-full"
              disabled={loading || !!error}
            >
              {loading ? 'Registering...' : 'Sign Up'}
            </button>
          </div>
        </form>

        <p className="text-center mt-4 font-semibold">
          Already have an account?{' '}
          <Link to="/login" className="text-[#21B1E6] hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
