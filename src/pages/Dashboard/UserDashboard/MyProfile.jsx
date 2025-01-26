import avatarImg from '../../../assets/img/placeholder.jpg'; // Fixed typo
import LoadingSpinner from '../../../components/LoadingSpinner';
import useAuth from '../../../hooks/useAuth';

function MyProfile() {
  const { user, logout, loading } = useAuth();

  if (!user || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#017F4E] to-[#008D54] py-8">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg transition-all duration-300 ">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="mb-6">
            <img
              src={user?.photoURL || avatarImg}
              alt="User Profile"
              className="w-32 h-32 mb-4 rounded-full border-4 border-[#008D54] shadow-lg"
            />
          </div>

          {/* User Info */}
          <h2 className="text-3xl font-extrabold text-gray-800">
            {user.displayName || 'User Name'}
          </h2>
          <p className="text-gray-500 text-lg mt-2">
            {user.email || 'No Email Provided'}
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-8 justify-center">
            <button className="px-6 py-2 text-white bg-[#017F4E] rounded-lg shadow-md hover:bg-[#008D54] focus:ring-4 focus:ring-[#017F4E]">
              Edit Profile
            </button>
            <button
              onClick={logout}
              className="px-6 py-2 text-white bg-gray-700 rounded-lg shadow-md hover:bg-gray-800 focus:ring-4 focus:ring-gray-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
