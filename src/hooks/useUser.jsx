import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
  const { user, loading } = useAuth(); // Get user from authentication context
  const axiosSecure = useAxiosSecure(); // Secure axios instance for authenticated requests

  const {
    data: userData,
    isPending: isUserLoading,
    error,
  } = useQuery({
    queryKey: [user?.email, 'userData'],
    enabled: !!user && !loading, // Ensures the query runs only when user is available
    queryFn: async () => {
      try {
        console.log('Fetching user data for:', user);
        const res = await axiosSecure.get(`/users/${user.email}`);
        return res.data; // Assuming the API returns user data as an object
      } catch (err) {
        console.error('Error fetching user data:', err);
        throw err; // Throw error to be caught by React Query's onError
      }
    },
    onError: (err) => {
      console.error('Error while fetching user data:', err);
    },
    staleTime: 5 * 60 * 1000, // Avoid refetching within 5 minutes if the data hasn't changed
    cacheTime: 10 * 60 * 1000, // Cache the data for 10 minutes
  });

  return [userData, isUserLoading, error];
};

export default useUser;
