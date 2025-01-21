import LoadingSpinner from '../../components/LoadingSpinner';

import SectionTitle from '../../components/Shared/SectionTitle';
import useScholarships from '../../hooks/useScholarships';
import ScholarshipCard from './ScholarshipCard';

const AllScholarships = () => {
  const { scholarships, isLoading } = useScholarships();

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="container mx-auto">
      <section>
        <SectionTitle
          heading={'All Available Scholarships'}
          subHeading={'Browse through the available scholarships and apply.'}
        />

        {/* Render Scholarship Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {scholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship._id} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllScholarships;
