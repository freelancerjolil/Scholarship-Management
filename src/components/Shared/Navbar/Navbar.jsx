import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';
import avatarImg from '../../../assets/img/placeholder.jpg';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const userRole = user?.role;

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      await logOut();
      setIsOpen(false); // Close the menu after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 bg-opacity-30 w-full bg-white shadow-sm z-10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 flex-grow justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-primary font-bold text-lg'
                : 'text-neutral font-semibold hover:text-secondary text-lg'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-scholarships"
            className={({ isActive }) =>
              isActive
                ? 'text-primary font-bold text-lg'
                : 'text-neutral font-semibold hover:text-secondary text-lg'
            }
          >
            All Scholarships
          </NavLink>
          {user && userRole === 'user' && (
            <NavLink
              to="/user-dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-bold text-lg'
                  : 'text-neutral font-semibold hover:text-secondary text-lg'
              }
            >
              User Dashboard
            </NavLink>
          )}
          {user && userRole === 'admin' && (
            <NavLink
              to="/admin-dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-bold text-lg'
                  : 'text-neutral font-semibold hover:text-secondary text-lg'
              }
            >
              Admin Dashboard
            </NavLink>
          )}
        </div>

        {/* Login/Signup and Avatar */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="btn btn-primary text-white rounded-lg"
              >
                Log-Out
              </button>
              <img
                src={user.photoURL || avatarImg}
                alt="Profile"
                className="rounded-full h-10 w-10"
                referrerPolicy="no-referrer"
              />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline border  text-primary  rounded-lg"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-primary text-white rounded-lg"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-neutral-600"
        >
          <AiOutlineMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="p-4 flex flex-col space-y-4">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold hover:bg-neutral-100 p-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/all-scholarships"
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold hover:bg-neutral-100 p-2"
            >
              All Scholarships
            </NavLink>
            {user && userRole === 'user' && (
              <NavLink
                to="/user-dashboard"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold hover:bg-neutral-100 p-2"
              >
                User Dashboard
              </NavLink>
            )}
            {user && userRole === 'admin' && (
              <NavLink
                to="/admin-dashboard"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold hover:bg-neutral-100 p-2"
              >
                Admin Dashboard
              </NavLink>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="btn btn-error text-white w-full mt-4"
              >
                Log-Out
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-secondary text-white w-full mt-4"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary text-white w-full mt-4"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
