import { useContext } from 'react';
import avatarImg from '../../../assets/img/placeholder.jpg';
import { AuthContext } from '../../../providers/AuthProvider';
import LoadingSpinner from '../../LoadingSpinner';

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="h-full bg-[#F4F7FC] flex justify-center items-center py-6 lg:py-12">
      <div className="card bg-white shadow-lg w-full max-w-md p-10 rounded-xl border border-gray-300">
        <div className="text-center mb-6">
          <img
            src={user.photoURL || avatarImg}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border border-gray-300"
          />
          <h2 className="text-2xl font-bold text-[#134479]">
            {user.displayName || 'Anonymous User'}
          </h2>
          {user.role && (
            <p className="mt-2 text-sm text-gray-500">Role: {user.role}</p>
          )}
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Email:</span>
            <span className="text-gray-800">{user.email || 'N/A'}</span>
          </div>
          {user.role && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Role:</span>
              <span className="text-gray-800 capitalize">{user.role}</span>
            </div>
          )}
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Member Since:</span>
            <span className="text-gray-800">
              {user.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleDateString()
                : 'N/A'}
            </span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            className="btn bg-[#134479] text-white hover:bg-[#0e62bb] py-3 px-6 rounded-lg transition duration-300"
            onClick={() => console.log('Edit Profile Clicked')}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
