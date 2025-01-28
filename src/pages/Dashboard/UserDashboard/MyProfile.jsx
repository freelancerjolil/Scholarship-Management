import LoadingSpinner from '../../../components/LoadingSpinner';
import MyProfile from '../../../components/Shared/MyProfile/Profile';
import useAuth from '../../../hooks/useAuth';

function Profile() {
  const { user, loading } = useAuth();

  if (!user || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  return (
    <div>
      <MyProfile></MyProfile>
    </div>
  );
}

export default Profile;
