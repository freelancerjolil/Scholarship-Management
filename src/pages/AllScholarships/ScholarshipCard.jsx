import React from 'react';
import { Link } from 'react-router-dom';

const ScholarshipCard = ({ scholarship }) => {
  const {
    universityName,
    universityImage,
    scholarshipCategory,
    universityLocation,
    applicationDeadline,
    subjectName,
    applicationFees,
    ratings,
  } = scholarship;

  // Calculate average rating
  const averageRating = ratings?.length
    ? ratings.reduce((total, rating) => total + rating, 0) / ratings.length
    : 0;

  return (
    <div className="card bg-white shadow-md p-4 rounded-lg">
      {/* University Info */}
      <div className="flex items-center space-x-4">
        <img
          src={universityImage}
          alt={universityName}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold">{universityName}</h3>
          <p className="text-sm text-gray-500">{`${universityLocation.city}, ${universityLocation.country}`}</p>
        </div>
      </div>

      {/* Scholarship Details */}
      <div className="mt-4 space-y-2">
        <p>
          <strong>Scholarship Category: </strong>
          {scholarshipCategory}
        </p>
        <p>
          <strong>Subject Category: </strong>
          {subjectName}
        </p>
        <p>
          <strong>Application Deadline: </strong>
          {applicationDeadline}
        </p>
        <p>
          <strong>Application Fees: </strong>${applicationFees}
        </p>
        <p>
          <strong>Average Rating: </strong>
          {averageRating.toFixed(1)}
        </p>
      </div>

      {/* Scholarship Details Button */}
      <Link to={`/scholarship/${scholarship._id}`}>
        <button className="mt-4 btn btn-primary w-full">
          Scholarship Details
        </button>
      </Link>
    </div>
  );
};

export default ScholarshipCard;
