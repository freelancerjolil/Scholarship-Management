import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ApplyScholarship = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams(); // Get the scholarship ID from URL
  const { user } = useAuth(); // Assuming you have user data in context
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

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  // Validate form fields
  const validateForm = () => {
    const {
      phoneNumber,
      address,
      gender,
      degree,
      sscResult,
      hscResult,
      photo,
    } = formData;
    if (
      !phoneNumber ||
      !address ||
      !gender ||
      !degree ||
      !sscResult ||
      !hscResult ||
      !photo
    ) {
      toast.error('All fields are required!');
      return false;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      toast.error('Phone number must be 10 digits.');
      return false;
    }
    if (photo && !['image/jpeg', 'image/png'].includes(photo.type)) {
      toast.error('Only JPEG and PNG images are allowed.');
      return false;
    }
    if (photo && photo.size > 5 * 1024 * 1024) {
      // Max size 5MB
      toast.error('Image size should not exceed 5MB.');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!validateForm()) return; // Ensure form validation is passed

    const applicationData = new FormData();
    applicationData.append('scholarshipId', id);
    applicationData.append('userName', user?.displayName);
    applicationData.append('userEmail', user?.email);
    applicationData.append('userId', user?._id);
    applicationData.append('applicationDate', new Date().toISOString());

    Object.keys(formData).forEach((key) => {
      applicationData.append(key, formData[key]);
    });

    // Log FormData contents
    console.log('Form Data:', [...applicationData]);

    try {
      // Get the token from localStorage, context, or wherever it's stored
      const token = localStorage.getItem('authToken'); // Adjust if you store it differently

      if (!token) {
        toast.error('You must be logged in to apply!');
        return;
      }

      const response = await axiosSecure.post(
        '/apply-scholarship',
        applicationData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to headers
          },
        }
      );

      if (response.status === 201) {
        toast.success('Application submitted successfully!');
        // Reset form
        setFormData({
          phoneNumber: '',
          address: '',
          gender: '',
          degree: '',
          sscResult: '',
          hscResult: '',
          studyGap: '',
          photo: null,
        });
      }
    } catch (error) {
      console.error('Application error:', error);
      toast.error('Failed to submit application. Please try again.');
    }
  };
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Apply for Scholarship</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Phone Number Input */}
        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Address Input */}
        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Gender Select */}
        <div>
          <label className="block font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Degree Input */}
        <div>
          <label className="block font-medium">Degree</label>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            placeholder="Enter your degree"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* SSC Result Input */}
        <div>
          <label className="block font-medium">SSC Result</label>
          <input
            type="text"
            name="sscResult"
            value={formData.sscResult}
            onChange={handleChange}
            placeholder="Enter your SSC result"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* HSC Result Input */}
        <div>
          <label className="block font-medium">HSC Result</label>
          <input
            type="text"
            name="hscResult"
            value={formData.hscResult}
            onChange={handleChange}
            placeholder="Enter your HSC result"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Study Gap Input */}
        <div>
          <label className="block font-medium">Study Gap (if any)</label>
          <input
            type="text"
            name="studyGap"
            value={formData.studyGap}
            onChange={handleChange}
            placeholder="Enter study gap years"
            className="input input-bordered w-full"
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block font-medium">Upload Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            className="file-input file-input-bordered w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="btn bg-[#017F4E] text-white hover:bg-[#005F36] w-full"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyScholarship;
