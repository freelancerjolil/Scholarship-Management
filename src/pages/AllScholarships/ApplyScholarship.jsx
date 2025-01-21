import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ApplyScholarship = () => {
  const { id } = useParams(); // Get the scholarship ID from URL
  const [formData, setFormData] = useState({
    phoneNumber: '',
    address: '',
    gender: '',
    degree: '',
    sscResult: '',
    hscResult: '',
    studyGap: '',
    photo: null,
  });

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Post data to your backend (ensure you have an endpoint to handle it)
    try {
      // Example: Send form data to server
      await fetch('/api/apply', {
        method: 'POST',
        body: JSON.stringify(formData), // Include additional required data (e.g., scholarship ID)
        headers: { 'Content-Type': 'application/json' },
      });

      toast.success('Application submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold">Apply for Scholarship</h2>

      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="mt-4">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-4">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* More form fields for other data */}

        <button
          type="submit"
          className="btn bg-[#ec4899] text-white hover:bg-[#f954a6] w-full mt-6"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyScholarship;
