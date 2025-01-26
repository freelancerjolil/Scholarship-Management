import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';

const Main = () => {
  const location = useLocation();

  // Check if the current path includes 'login' or 'signup'
  const noHeaderFooter =
    location.pathname.includes('login') || location.pathname.includes('signup');

  return (
    <div>
      {/* Conditionally render Navbar if the path is not 'login' or 'signup' */}
      {!noHeaderFooter && <Navbar />}

      <div className="min-h-[calc(100vh-68px)]">
        {/* Render the page content inside Outlet */}
        <Outlet></Outlet>
      </div>

      {!noHeaderFooter && <Footer />}
    </div>
  );
};

export default Main;
