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

  // Toggle Sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Close Sidebar on Mobile after Clicking a Link
  const handleLinkClick = () => sidebarOpen && setSidebarOpen(false);

  // Sidebar Menu Items
  const sidebarItems = [
    ...(isAdmin
      ? [
          {
            path: '/dashboard/admin-home',
            icon: <FaHome />,
            label: 'Admin Profile',
          },
          {
            path: '/dashboard/add-scholarship',
            icon: <FaPlusCircle />,
            label: 'Add Scholarship',
          },
          {
            path: '/dashboard/manage-application',
            icon: <FaClipboardList />,
            label: 'Manage Applications',
          },
          {
            path: '/dashboard/admin/users',
            icon: <FaUserFriends />,
            label: 'Manage Users',
          },
          {
            path: '/dashboard/manage-review',
            icon: <FaClipboardList />,
            label: 'Manage Reviews',
          },
        ]
      : isModerator
      ? [
          {
            path: '/dashboard/moderator-profile',
            icon: <FaHome />,
            label: 'My Profile',
          },
          {
            path: '/dashboard/manage-application',
            icon: <FaClipboardList />,
            label: 'Manage Scholarships',
          },
          {
            path: '/dashboard/moderator/all-reviews',
            icon: <FaClipboardList />,
            label: 'All Reviews',
          },
          {
            path: '/dashboard/applied-applications',
            icon: <FaClipboardList />,
            label: 'All Applied Scholarships',
          },
          {
            path: '/dashboard/m/add-scholarship',
            icon: <FaPlusCircle />,
            label: 'Add Scholarship',
          },
        ]
      : [
          {
            path: '/dashboard/my-profile',
            icon: <FaHome />,
            label: 'My Profile',
          },
          {
            path: '/dashboard/my-applications',
            icon: <FaCheckCircle />,
            label: 'My Applications',
          },
          {
            path: '/dashboard/my-reviews',
            icon: <FaUserGraduate />,
            label: 'My Reviews',
          },
        ]),
    { path: '/', icon: <FaHome />, label: 'Home' },
    {
      path: '/scholarships',
      icon: <FaClipboardList />,
      label: 'Browse Scholarships',
    },
    { path: '/dashboard/contact', icon: <FaEnvelope />, label: 'Contact Us' },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-primary text-white transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:translate-x-0 lg:relative`}
      >
        {/* Sidebar Header (Mobile) */}
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

        {/* Sidebar Menu */}
        <ul className="p-4 space-y-2">
          {sidebarItems.map(({ path, icon, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={handleLinkClick}
                className="flex items-center gap-2 p-2 rounded-lg transition-colors hover:bg-accent"
              >
                {icon}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar (Mobile) */}
        <header className="bg-primary text-white px-4 py-3 flex items-center justify-between lg:hidden">
          <button onClick={toggleSidebar} aria-label="Open Sidebar">
            <FaBars size={20} />
          </button>
          <h1 className="text-lg font-bold">Dashboard</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
