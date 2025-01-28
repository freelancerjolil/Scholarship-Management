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
import AddScholarship from '../pages/Dashboard/AddScholarship.jsx/AddScholarship';
import ManageApplications from '../pages/Dashboard/AdminDashboard/ManageApplications';
import ManageUsers from '../pages/Dashboard/AdminDashboard/ManageUsers';
import MyApplications from '../pages/Dashboard/UserDashboard/MyApplications';
import MyProfile from '../pages/Dashboard/UserDashboard/MyProfile';
// Moderator Dashboard Components
// Admin Dashboard Components

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
        element: <ScholarshipDetails></ScholarshipDetails>,
      },
      {
        path: 'apply-scholarship/:id',
        element: <ApplyScholarship></ApplyScholarship>,
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
    element: <Dashboard></Dashboard>,
    children: [
      // User Dashboard Routes
      {
        // index: true,
        path: 'my-profile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: 'my-applications',
        element: <MyApplications></MyApplications>,
      },
      // {
      //   path: 'my-reviews',
      //   element: <MyReviews></MyReviews>,
      // },
      // {
      //   path: 'contact',
      //   element: <ContactUs></ContactUs>,
      // },

      // Moderator Dashboard Routes
      // {
      //   path: 'moderator/all-reviews',
      //   element: <AllReviews></AllReviews>,
      // },
      // {
      //   path: 'moderator/applied-applications',
      //   element: <AppliedApplications></AppliedApplications>,
      // },
      // {
      //   path: 'moderator/add-scholarship',
      //   element: <AddScholarship></AddScholarship>,
      // },

      // Admin Dashboard Routes
      {
        path: 'admin-home',
        element: <MyProfile></MyProfile>,
      },
      {
        path: 'add-scholarship',
        element: <AddScholarship></AddScholarship>,
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
        path: 'admin/users',
        element: <ManageUsers></ManageUsers>,
      },
      // {
      //   path: 'admin/analytics',
      //   element: <Analytics></Analytics>,
      // },
      // {
      //   path: 'admin/add-scholarship',
      //   element: <AddScholarship></AddScholarship>,
      // },
      // {
      //   path: 'admin/manage-scholarships',
      //   element: <ManageApplications></ManageApplications>,
      // },
      // {
      //   path: 'admin/manage-reviews',
      //   element: <ManageReviews></ManageReviews>,
      // },
      // {
      //   path: 'admin/manage-applications',
      //   element: <ManageApplications></ManageApplications>,
      // },
    ],
  },
]);

export default router;
