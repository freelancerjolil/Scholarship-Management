import {
  FaCheckCircle,
  FaClipboardList,
  FaEnvelope,
  FaHistory,
  FaHome,
  FaPlusCircle,
  FaUserFriends,
  FaUserGraduate,
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-green-500 text-white">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              {/* Admin Links */}
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addScholarship">
                  <FaPlusCircle />
                  Add Scholarship
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageScholarships">
                  <FaClipboardList />
                  Manage Scholarships
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUserFriends />
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* User Links */}
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/appliedScholarships">
                  <FaCheckCircle />
                  Applied Scholarships
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaUserGraduate />
                  Write a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaHistory />
                  Payment History
                </NavLink>
              </li>
            </>
          )}
          {/* Shared Links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/scholarships">
              <FaClipboardList />
              Browse Scholarships
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <FaEnvelope />
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
