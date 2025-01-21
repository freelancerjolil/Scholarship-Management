import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useScholarships = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: scholarships = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['scholarships'],
    queryFn: async () => {
      const response = await axiosPublic.get('/scholarships');
      return response.data;
    },
  });

  return { scholarships, isLoading, isError, refetch };
};

export default useScholarships;
