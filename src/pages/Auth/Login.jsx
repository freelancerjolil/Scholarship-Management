import { useContext, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Password visibility icons
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const { signIn, googleSignIn, setUser } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const navigate = useNavigate();
  const emailRef = useRef();

  const from = location?.state?.from?.pathname || '/';

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user); // Set the user in context
        toast.success(`Welcome, ${user.displayName || 'User'}!`);
        navigate(location?.state?.from?.pathname || '/');
      })
      .catch((error) => {
        console.error('Google Sign-In Error:', error.message);
        toast.error('Google Sign-In failed. Please try again.');
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success('User Login Successful!');
      navigate(from, { replace: true });
    });
  };

  const togglePasswordVisibility = () =>
    setShowPassword((prevState) => !prevState);

  return (
    <div className="h-full bg-[#F7F8FA] flex justify-center items-center py-4 lg:py-10">
      <Helmet>
        <title>Edu-Track | Login</title>
      </Helmet>
      <div className="card bg-white shadow-sm w-full max-w-md p-8 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mt-4">
            Welcome To Edu-Track Scholarshop Portal
          </h2>
        </div>

        {/* Google Sign-In Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleGoogleLogin}
            className="btn w-full bg-base-100 border hover:bg-white  flex items-center justify-center py-2"
          >
            <FcGoogle className="mr-2" size={20} />
            Sign In with Google
          </button>
        </div>

        {/* Separator */}
        <div className="flex items-center my-4">
          <hr className="w-full border-t border-gray-300" />
          <span className="mx-2 text-gray-500">or </span>
          <hr className="w-full border-t border-gray-300" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email Address</span>
            </label>
            <input
              id="email"
              name="email"
              ref={emailRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute mt-2 right-3 top-[33%] transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <HiEyeOff size={24} /> : <HiEye size={24} />}
              </span>
            </div>
          </div>

          <div className="form-control">
            <button
              type="submit"
              className="btn bg-[#134479] text-white hover:bg-[#0e62bb] w-full"
            >
              Log In
            </button>
          </div>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{' '}
          <Link className="text-[#134479] hover:underline" to="/signup">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
