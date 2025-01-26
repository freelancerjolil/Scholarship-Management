import { Link } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';
import SectionTitle from '../../components/Shared/SectionTitle';
import useScholarships from '../../hooks/useScholarships';
import ScholarshipCard from './ScholarshipCard';

const TopScholarships = () => {
  const { scholarships, isLoading, error } = useScholarships();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Failed to load scholarships
      </div>
    );
  }

  // Sort scholarships by low application fees and recent post date
  const sortedScholarships = scholarships.slice().sort((a, b) => {
    const dateA = new Date(a.postDate).getTime();
    const dateB = new Date(b.postDate).getTime();
    if (a.applicationFees === b.applicationFees) {
      return dateB - dateA; // Sort by recent post date if fees are equal
    }
    return a.applicationFees - b.applicationFees; // Sort by lowest application fees
  });

  return (
    <div className="container mx-auto">
      <section id="scholarships-section">
        <SectionTitle
          heading={'Top Scholarships'}
          subHeading={
            'Explore the top scholarships with low application fees and recent postings.'
          }
        />

        {/* Render Scholarship Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {sortedScholarships.slice(0, 6).map((scholarship) => (
            <ScholarshipCard key={scholarship._id} scholarship={scholarship} />
          ))}
        </div>

        {/* View All Scholarships Button */}
        <div className="mt-6 text-center">
          {/* Corrected Link */}
          <Link to="/scholarships">
            <button className="btn btn-primary">View All Scholarships</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TopScholarships;
