import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useModerator = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isModerator, isPending: isModeratorLoading } = useQuery({
    queryKey: [user?.email, 'isModerator'],
    enabled: !loading, // Ensure query only runs when not loading
    queryFn: async () => {
      console.log('Checking if user is a moderator:', user);
      const res = await axiosSecure.get(`/users/moderator/${user.email}`);
      return res.data?.moderator; // Return the moderator status
    },
  });

  return [isModerator, isModeratorLoading];
};

export default useModerator;
