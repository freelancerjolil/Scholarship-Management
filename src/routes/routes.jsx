import { createBrowserRouter } from 'react-router-dom';

import Main from '../layout/Main';

import Dashboard from '../layout/Dashboard';
import AllScholarships from '../pages/AllScholarships/AllScholarships';
import ScholarshipDetails from '../pages/AllScholarships/ScholarshipDetails';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import AddScholarship from '../pages/Dashboard/AddScholarship.jsx/AddScholarship';
import ManageUsers from '../pages/Dashboard/AdminDashboard/ManageUsers';
import ContactUs from '../pages/Dashboard/ContactUs';
import MyApplications from '../pages/Dashboard/UserDashboard/MyApplications';
import MyProfile from '../pages/Dashboard/UserDashboard/MyProfile';
import MyReviews from '../pages/Dashboard/UserDashboard/MyReviews';
import Home from '../pages/Home/Home';
import Payments from '../pages/Payments/Payments';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,

    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: 'scholarships',
        element: <AllScholarships></AllScholarships>,
      },
      {
        path: '/scholarship/:id',
        element: <ScholarshipDetails></ScholarshipDetails>,
      },
      {
        path: 'payment',
        element: <Payments></Payments>,
      },
    ],
  },
  {
    path: 'login',
    element: <Login></Login>,
  },
  {
    path: 'signup',
    element: <Signup></Signup>,
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      // User Dashboard Routes
      {
        path: '/dashboard/myProfile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: '/dashboard/appliedScholarships',
        element: <MyApplications></MyApplications>,
      },
      {
        path: 'user-dashboard/my-reviews',
        element: <MyReviews></MyReviews>,
      },
      {
        path: 'user-dashboard/my-reviews',
        element: <MyReviews></MyReviews>,
      },

      // Moderator Dashboard Routes
      {
        path: '/dashboard/contact',
        element: <ContactUs></ContactUs>,
      },
      {
        path: '/dashboard/addScholarship',
        element: <AddScholarship></AddScholarship>,
      },
      // {
      //   path: 'moderator-dashboard/all-reviews',
      //   element: <AllReviews></AllReviews>,
      // },
      // {
      //   path: 'moderator-dashboard/applied-applications',
      //   element: <AppliedApplications></AppliedApplications>,
      // },
      // {
      //   path: 'moderator-dashboard/add-scholarship',
      //   element: <AddScholarshipModerator></AddScholarshipModerator>,
      // },

      // // Admin Dashboard Routes
      {
        path: '/dashboard/users',
        element: <ManageUsers></ManageUsers>,
      },
      // { path: 'admin-dashboard/analytics', element: <Analytics></Analytics> },
      // {
      //   path: 'admin-dashboard/add-scholarship',
      //   element: <AddScholarshipAdmin></AddScholarshipAdmin>,
      // },
      // {
      //   path: 'admin-dashboard/manage-scholarships',
      //   element: <ManageScholarshipsAdmin></ManageScholarshipsAdmin>,
      // },
      // {
      //   path: 'admin-dashboard/manage-reviews',
      //   element: <ManageReviews></ManageReviews>,
      // },
      // {
      //   path: 'admin-dashboard/manage-applications',
      //   element: <ManageApplications></ManageApplications>,
      // },
    ],
  },
]);

export default router;
