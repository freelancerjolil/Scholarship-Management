import {
  FaCheckCircle,
  FaClipboardList,
  FaEnvelope,
  FaHome,
  FaPlusCircle,
  FaUserFriends,
  FaUserGraduate,
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useModerator from '../hooks/useModerator';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isModerator] = useModerator();

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
                  Admin Profile
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
                  Manage Applied Application
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUserFriends />
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageReview">
                  <FaUserFriends />
                  Manage Review
                </NavLink>
              </li>
            </>
          ) : isModerator ? (
            <>
              {/* Moderator Links */}
              <li>
                <NavLink to="/dashboard/myProfile">
                  <FaHome />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageScholarships">
                  <FaClipboardList />
                  Manage Scholarships
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allReviews">
                  <FaClipboardList />
                  All reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allAppliedScholarship">
                  <FaClipboardList />
                  All applied Scholarship
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addScholarship">
                  <FaClipboardList />
                  Add Scholarship
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* User Links */}
              <li>
                <NavLink to="/dashboard/myProfile">
                  <FaHome />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myApplication">
                  <FaCheckCircle />
                  My Application
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myReviews">
                  <FaUserGraduate />
                  My Reviews
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
