import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo-green.png';
import avatarImg from '../../../assets/img/placeholder.jpg';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth() || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = async () => {
    try {
      await logOut();
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMenuOpen && !e.target.closest('.menu-container')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <nav className="sticky w-full top-0 z-10 bg-opacity-30 backdrop-blur-lg bg-gradient-to-r from-white/30 to-gray-100/30 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-neutral font-heading">
          <Link
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-primary border-b-2 border-primary bg-gray-100'
                : 'hover:text-primary'
            }
          >
            Home
          </Link>
          <Link
            to="/scholarships"
            className={({ isActive }) =>
              isActive
                ? 'text-primary border-b-2 border-primary bg-gray-100'
                : 'hover:text-primary'
            }
          >
            All Scholarships
          </Link>
          {/* {user && ( */}
          <Link
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'text-primary border-b-2 border-primary bg-gray-100'
                : 'hover:text-primary'
            }
          >
            Dashboard
          </Link>
          {/* )} */}
        </div>

        {/* User Profile or Login/Sign-up */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent"
              >
                Log Out
              </button>

              <img
                src={user?.photoURL || avatarImg}
                alt={user?.displayName || 'User Avatar'}
                className="h-10 w-10 rounded-full border border-neutral"
              />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-neutral focus:outline-none"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="menu-container md:hidden bg-white shadow-md">
          <div className="p-4 space-y-4 text-neutral font-heading">
            <NavLink
              to="/"
              className="block px-4 py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/all-scholarships"
              className="block px-4 py-2 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Scholarships
            </NavLink>
            {user && (
              <NavLink
                to="/dashboard"
                className="block px-4 py-2 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </NavLink>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
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
