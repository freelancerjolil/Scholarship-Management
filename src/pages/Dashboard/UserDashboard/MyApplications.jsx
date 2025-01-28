import { AiTwotoneDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { FcViewDetails } from 'react-icons/fc';
import { Link } from 'react-router-dom'; // Ensure you import Link from 'react-router-dom'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useScholarships from '../../../hooks/useScholarships';

const MyApplications = () => {
  const axiosPublic = useAxiosPublic();
  const [applications, refetch] = useScholarships(); // Ensure useApplication is set up correctly

  // Handle delete action
  const handleDelete = async (_id) => {
    try {
      const response = await axiosPublic.delete(`/AppliedScholarship/${_id}`); // Fixed axiosPublic.delete
      console.log(response.data);
      refetch(); // Refetch the applications after deletion
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  // If no applications or if loading is true, return loading message
  if (!applications || applications.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-500">No applications found.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                University Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                University Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Subject Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Applied Degree
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Application Fees
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Service Charge
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applications.map((item, i) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {i + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.universityName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.universityLocation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.subjectCategory}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.degree}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  ${item.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                  {item.service_charge}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-between items-center">
                  <button className="text-xl">
                    <FcViewDetails />
                  </button>
                  <Link to={`/AppliedScholarship/${item._id}`}>
                    <button className="text-xl">
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    className="text-xl text-red-500"
                    onClick={() => handleDelete(item._id)}
                  >
                    <AiTwotoneDelete />
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

export default MyApplications;
