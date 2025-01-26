import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import LoadingSpinner from '../../../components/LoadingSpinner';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch Users
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  // Handle Make Admin
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // Handle Delete User
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire('Deleted!', 'User has been deleted.', 'success');
            }
          })
          .catch((error) => {
            Swal.fire('Error', 'Failed to delete user.', 'error');
            console.error(error);
          });
      }
    });
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
          All Users
        </h2>
        <h2 className="text-lg lg:text-xl font-medium text-gray-600">
          Total Users:{' '}
          <span className="font-bold text-orange-500">{users.length}</span>
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="table-auto w-full text-left">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-4">#</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-gray-50`}
              >
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  {user.role === 'admin' ? (
                    <span className="text-green-600 font-semibold">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      <FaUsers className="inline mr-2" />
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn bg-red-100 text-red-600 px-4 py-2 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    <FaTrashAlt className="inline mr-2" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
