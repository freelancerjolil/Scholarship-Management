import { createBrowserRouter } from 'react-router-dom';

// Layout Components
import Dashboard from '../layout/Dashboard';
import Main from '../layout/Main';
// Public Pages
import AllScholarships from '../pages/AllScholarships/AllScholarships';
import ApplyScholarship from '../pages/AllScholarships/ApplyScholarship';
import ScholarshipDetails from '../pages/AllScholarships/ScholarshipDetails';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Home from '../pages/Home/Home';
import Payments from '../pages/Payments/Payments';
// Dashboard Pages
import ContactUs from '../components/Shared/MyProfile/ContactUs/ContactUs';
import AddScholarship from '../pages/Dashboard/AddScholarship.jsx/AddScholarship';
import ManageApplications from '../pages/Dashboard/AdminDashboard/ManageApplications';
import ManageReviews from '../pages/Dashboard/AdminDashboard/ManageReviews';
import ManageUsers from '../pages/Dashboard/AdminDashboard/ManageUsers';
import AllReviews from '../pages/Dashboard/ModeratorDashboard/AllReviews';
import AppliedApplications from '../pages/Dashboard/ModeratorDashboard/AppliedApplications';
import MyApplications from '../pages/Dashboard/UserDashboard/MyApplications';
import MyProfile from '../pages/Dashboard/UserDashboard/MyProfile';
import MyReviews from '../pages/Dashboard/UserDashboard/MyReviews';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  // Main Layout Routes
  {
    path: '/',
    element: <Main></Main>,
    children: [
      // Public Routes
      {
        path: '',
        element: <Home></Home>,
      },

      {
        path: 'scholarships',
        element: <AllScholarships></AllScholarships>,
      },
      {
        path: 'scholarship/:id',
        element: (
          <PrivateRoute>
            <ScholarshipDetails></ScholarshipDetails>
          </PrivateRoute>
        ),
      },
      {
        path: 'apply-scholarship/:id',
        element: (
          <PrivateRoute>
            <ApplyScholarship></ApplyScholarship>
          </PrivateRoute>
        ),
      },
      {
        path: 'payment/:id',
        element: <Payments></Payments>,
      },
    ],
  },

  // Auth Routes
  {
    path: 'login',
    element: <Login></Login>,
  },
  {
    path: 'signup',
    element: <Signup></Signup>,
  },

  // Dashboard Layout Routes
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <MyProfile></MyProfile>,
      },

      {
        path: 'contact',
        element: <ContactUs></ContactUs>,
      },
      // User Dashboard Routes
      {
        path: 'my-profile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: 'my-applications',
        element: <MyApplications></MyApplications>,
      },
      {
        path: 'my-reviews',
        element: <MyReviews></MyReviews>,
      },

      // Moderator Dashboard Routes
      {
        path: 'moderator-profile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: 'moderator/all-reviews',
        element: <AllReviews></AllReviews>,
      },
      {
        path: 'applied-applications',
        element: <AppliedApplications></AppliedApplications>,
      },
      {
        path: 'm/add-scholarship',
        element: <AddScholarship></AddScholarship>,
      },

      // Admin Dashboard Routes
      {
        path: 'admin-home',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <MyProfile></MyProfile>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'add-scholarship',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddScholarship></AddScholarship>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-application',
        element: <ManageApplications></ManageApplications>,
      },
      {
        path: 'admin/users',
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: 'manage-review',
        element: <ManageReviews></ManageReviews>,
      },
    ],
  },
]);

export default router;
