import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import useScholarships from '../../hooks/useScholarships';

const ScholarshipDetails = () => {
  const { id } = useParams(); // Get the scholarship ID from URL
  const { scholarships } = useScholarships(); // Get all scholarships data
  const scholarship = scholarships.find((scholar) => scholar._id === id); // Find specific scholarship

  const navigate = useNavigate();

  // Apply scholarship button click handler
  const handleApplyScholarship = () => {
    navigate(`/payment/${id}`); // Navigate to the payment page
  };

  return (
    <div className="container mx-auto px-6 py-10">
      {scholarship ? (
        <>
          {/* Header Section */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-6">
            <img
              src={scholarship.universityImage}
              alt={scholarship.universityName}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">
                {scholarship.universityName}
              </h2>
              <p className="text-gray-500">
                {`${scholarship.universityLocation.city}, ${scholarship.universityLocation.country}`}
              </p>
            </div>
          </div>

          {/* Scholarship Details */}
          <div className="mt-8 bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Scholarship Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <p>
                <strong>Category: </strong>
                {scholarship.scholarshipCategory}
              </p>
              <p>
                <strong>Subject: </strong>
                {scholarship.subjectName}
              </p>
              <p>
                <strong>Application Deadline: </strong>
                {scholarship.applicationDeadline}
              </p>
              <p>
                <strong>Application Fees: </strong>$
                {scholarship.applicationFees}
              </p>
              <p className="md:col-span-2">
                <strong>Description: </strong>
                {scholarship.scholarshipDescription}
              </p>
              <p>
                <strong>Stipend: </strong>
                {scholarship.stipend || 'N/A'}
              </p>
              <p>
                <strong>Post Date: </strong>
                {scholarship.postDate}
              </p>
              <p>
                <strong>Service Charge: </strong>${scholarship.serviceCharge}
              </p>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
            <div className="flex space-x-4 overflow-x-auto">
              {scholarship.reviews && scholarship.reviews.length > 0 ? (
                scholarship.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md p-6 rounded-lg max-w-sm flex-shrink-0"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={review.reviewerImage}
                        alt={review.reviewerName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{review.reviewerName}</h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          color={i < review.rating ? 'gold' : '#ddd'}
                          size={16}
                        />
                      ))}
                      <span className="text-sm text-gray-600">
                        {review.rating} / 5
                      </span>
                    </div>
                    <p className="mt-2 text-gray-700">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews available.</p>
              )}
            </div>
          </div>

          {/* Apply Scholarship Button */}
          <div className="mt-8">
            <button
              onClick={handleApplyScholarship}
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg font-semibold rounded-lg shadow hover:from-pink-600 hover:to-pink-700 transition-all"
            >
              Apply for Scholarship
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 text-lg">Loading...</p>
      )}
    </div>
  );
};

export default ScholarshipDetails;
