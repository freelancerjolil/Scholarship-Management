import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddScholarship = () => {
  const [formData, setFormData] = useState({
    scholarshipName: '',
    universityName: '',
    universityImage: null,
    universityCountry: '',
    universityCity: '',
    universityRank: '',
    subjectCategory: 'Agriculture',
    scholarshipCategory: 'Full fund',
    degree: 'Diploma',
    tuitionFees: '',
    applicationFees: '',
    serviceCharge: '',
    applicationDeadline: '',
    scholarshipPostDate: new Date().toISOString().split('T')[0],
    postedUserEmail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(image_hosting_api, formData);
      const imageUrl = response.data.data.display_url;
      setFormData((prev) => ({ ...prev, universityImage: imageUrl }));
      toast.success('Image uploaded successfully.');
    } catch (error) {
      toast.error('Failed to upload image. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.universityImage) {
      toast.error('Please upload the university image.');
      return;
    }

    try {
      await axios.post('/scholarships', formData); // Replace with your API endpoint
      toast.success('Scholarship added successfully.');
      setFormData({
        scholarshipName: '',
        universityName: '',
        universityImage: null,
        universityCountry: '',
        universityCity: '',
        universityRank: '',
        subjectCategory: 'Agriculture',
        scholarshipCategory: 'Full fund',
        degree: 'Diploma',
        tuitionFees: '',
        applicationFees: '',
        serviceCharge: '',
        applicationDeadline: '',
        scholarshipPostDate: new Date().toISOString().split('T')[0],
        postedUserEmail: '',
      });
    } catch (error) {
      toast.error('Failed to add scholarship. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Add Scholarship</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Scholarship Name
            </label>
            <input
              type="text"
              name="scholarshipName"
              value={formData.scholarshipName}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              University Name
            </label>
            <input
              type="text"
              name="universityName"
              value={formData.universityName}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              University Image/Logo
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="file-input file-input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              University Country
            </label>
            <input
              type="text"
              name="universityCountry"
              value={formData.universityCountry}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              University City
            </label>
            <input
              type="text"
              name="universityCity"
              value={formData.universityCity}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              University World Rank
            </label>
            <input
              type="number"
              name="universityRank"
              value={formData.universityRank}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Subject Category
            </label>
            <select
              name="subjectCategory"
              value={formData.subjectCategory}
              onChange={handleInputChange}
              className="select select-bordered w-full"
            >
              <option>Agriculture</option>
              <option>Engineering</option>
              <option>Doctor</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Scholarship Category
            </label>
            <select
              name="scholarshipCategory"
              value={formData.scholarshipCategory}
              onChange={handleInputChange}
              className="select select-bordered w-full"
            >
              <option>Full fund</option>
              <option>Partial</option>
              <option>Self-fund</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Degree</label>
            <select
              name="degree"
              value={formData.degree}
              onChange={handleInputChange}
              className="select select-bordered w-full"
            >
              <option>Diploma</option>
              <option>Bachelor</option>
              <option>Masters</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Tuition Fees (Optional)
            </label>
            <input
              type="number"
              name="tuitionFees"
              value={formData.tuitionFees}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Application Fees
            </label>
            <input
              type="number"
              name="applicationFees"
              value={formData.applicationFees}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Service Charge
            </label>
            <input
              type="number"
              name="serviceCharge"
              value={formData.serviceCharge}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Application Deadline
            </label>
            <input
              type="date"
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Posted User Email
            </label>
            <input
              type="email"
              name="postedUserEmail"
              value={formData.postedUserEmail}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn bg-green-500 hover:bg-green-600 text-white mt-4 w-full"
        >
          Add Scholarship
        </button>
      </form>
    </div>
  );
};

export default AddScholarship;
