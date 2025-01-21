import { createBrowserRouter } from 'react-router-dom';

import Main from '../layout/Main';

import Dashboard from '../layout/Dashboard';
import AllScholarships from '../pages/AllScholarships/AllScholarships';
import ScholarshipDetails from '../pages/AllScholarships/ScholarshipDetails';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Home from '../pages/Home/Home';

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
  },
]);

export default router;
