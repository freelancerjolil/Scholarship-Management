import { useState } from 'react';
import {
  FaBars,
  FaCheckCircle,
  FaClipboardList,
  FaEnvelope,
  FaHome,
  FaPlusCircle,
  FaTimes,
  FaUserFriends,
  FaUserGraduate,
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useModerator from '../hooks/useModerator';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isModerator] = useModerator();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle Sidebar Visibility
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Close Sidebar on Mobile after Link Click
  const handleLinkClick = () => {
    if (sidebarOpen) setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-green-600 text-white transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:translate-x-0 lg:relative lg:flex lg:flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-4 lg:hidden">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <button
            onClick={toggleSidebar}
            className="text-white"
            aria-label="Close Sidebar"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <ul className="menu p-4">
          {/* Admin Links */}
          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/admin-home"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaHome className="mr-2" />
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-scholarship"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaPlusCircle className="mr-2" />
                  Add Scholarship
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-application"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaClipboardList className="mr-2" />
                  Manage Applications
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/admin/users"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaUserFriends className="mr-2" />
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-review"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaClipboardList className="mr-2" />
                  Manage Review
                </NavLink>
              </li>
            </>
          )}

          {/* Moderator Links */}
          {isModerator && (
            <>
              <li>
                <NavLink
                  to="/dashboard/moderator-profile"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaHome className="mr-2" />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-application"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaClipboardList className="mr-2" />
                  Manage Scholarships
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/moderator/all-reviews"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaClipboardList className="mr-2" />
                  All Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/applied-applications"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaClipboardList className="mr-2" />
                  All Applied Scholarships
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/m/add-scholarship"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaPlusCircle className="mr-2" />
                  Add Scholarship
                </NavLink>
              </li>
            </>
          )}

          {/* User Links */}
          {!isAdmin && !isModerator && (
            <>
              <li>
                <NavLink
                  to="/dashboard/my-profile"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaHome className="mr-2" />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-applications"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaCheckCircle className="mr-2" />
                  My Application
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-reviews"
                  onClick={handleLinkClick}
                  className="flex items-center"
                >
                  <FaUserGraduate className="mr-2" />
                  My Reviews
                </NavLink>
              </li>
            </>
          )}

          {/* Shared Links */}
          <div className="divider my-4 border-t border-white opacity-50" />
          <li>
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className="flex items-center"
            >
              <FaHome className="mr-2" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/scholarships"
              onClick={handleLinkClick}
              className="flex items-center"
            >
              <FaClipboardList className="mr-2" />
              Browse Scholarships
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/contact"
              onClick={handleLinkClick}
              className="flex items-center"
            >
              <FaEnvelope className="mr-2" />
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="bg-green-600 text-white px-4 py-3 flex items-center justify-between lg:hidden">
          <button onClick={toggleSidebar} aria-label="Open Sidebar">
            <FaBars size={20} />
          </button>
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>

        <div className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
