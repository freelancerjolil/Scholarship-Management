import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddScholarship = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleImageUpload = async (imageFile) => {
    try {
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      return res.data.success ? res.data.data.url : null; // Return the image URL if successful
    } catch (error) {
      console.error('Image upload failed:', error);
      return null; // Return null if image upload fails
    }
  };

  const onSubmit = async (formData) => {
    console.log(formData);
    // Upload image
    const imageFile = { image: formData.image[0] };
    const imageUrl = await handleImageUpload(imageFile);

    if (!imageUrl) {
      toast.error('Failed to upload image. Please try again.');
      return;
    }

    // Prepare scholarship data
    const scholarshipData = {
      ...formData,
      universityImage: imageUrl,
    };

    // Make the API call to add the scholarship
    const res = await axiosSecure.post('/scholarships', scholarshipData);

    if (res.status === 200 || res.status === 201) {
      toast.success('Scholarship added successfully!');
      reset(); // Reset form fields
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: `${formData.scholarshipName} has been added.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      toast.error('Failed to add scholarship. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Add Scholarship</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Scholarship Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Scholarship Name
            </label>
            <input
              type="text"
              {...register('scholarshipName', {
                required: 'This field is required.',
              })}
              className="input input-bordered w-full"
            />
            {errors.scholarshipName && (
              <span className="text-red-500 text-sm">
                {errors.scholarshipName.message}
              </span>
            )}
          </div>

          {/* University Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              University Name
            </label>
            <input
              type="text"
              {...register('universityName', {
                required: 'This field is required.',
              })}
              className="input input-bordered w-full"
            />
            {errors.universityName && (
              <span className="text-red-500 text-sm">
                {errors.universityName.message}
              </span>
            )}
          </div>

          {/* University Image */}
          <div>
            <label className="block text-sm font-medium mb-1">
              University Image/Logo
            </label>
            <input
              onChange={handleImageUpload}
              type="file"
              {...register('image')}
              className="file-input file-input-bordered w-full"
            />
            {errors.image && (
              <span className="text-red-500 text-sm">
                {errors.image.message}
              </span>
            )}
          </div>

          {/* University Country */}
          <div>
            <label className="block text-sm font-medium mb-1">
              University Country
            </label>
            <input
              type="text"
              {...register('universityCountry', {
                required: 'This field is required.',
              })}
              className="input input-bordered w-full"
            />
            {errors.universityCountry && (
              <span className="text-red-500 text-sm">
                {errors.universityCountry.message}
              </span>
            )}
          </div>

          {/* University City */}
          <div>
            <label className="block text-sm font-medium mb-1">
              University City
            </label>
            <input
              type="text"
              {...register('universityCity', {
                required: 'This field is required.',
              })}
              className="input input-bordered w-full"
            />
            {errors.universityCity && (
              <span className="text-red-500 text-sm">
                {errors.universityCity.message}
              </span>
            )}
          </div>

          {/* Subject Category */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Subject Category
            </label>
            <select
              {...register('subjectCategory')}
              className="select select-bordered w-full"
              defaultValue="Agriculture"
            >
              <option>Agriculture</option>
              <option>Engineering</option>
              <option>Doctor</option>
            </select>
          </div>

          {/* Scholarship Category */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Scholarship Category
            </label>
            <select
              {...register('scholarshipCategory')}
              className="select select-bordered w-full"
              defaultValue="Full fund"
            >
              <option>Full fund</option>
              <option>Partial</option>
              <option>Self-fund</option>
            </select>
          </div>

          {/* Degree */}
          <div>
            <label className="block text-sm font-medium mb-1">Degree</label>
            <select
              {...register('degree')}
              className="select select-bordered w-full"
              defaultValue="Diploma"
            >
              <option>Diploma</option>
              <option>Bachelor</option>
              <option>Masters</option>
            </select>
          </div>

          {/* Tuition Fees */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Tuition Fees (Optional)
            </label>
            <input
              type="number"
              {...register('tuitionFees')}
              className="input input-bordered w-full"
            />
          </div>

          {/* Application Fees */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Application Fees
            </label>
            <input
              type="number"
              {...register('applicationFees', {
                required: 'This field is required.',
              })}
              className="input input-bordered w-full"
            />
            {errors.applicationFees && (
              <span className="text-red-500 text-sm">
                {errors.applicationFees.message}
              </span>
            )}
          </div>

          {/* Service Charge */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Service Charge
            </label>
            <input
              type="number"
              {...register('serviceCharge', {
                required: 'This field is required.',
              })}
              className="input input-bordered w-full"
            />
            {errors.serviceCharge && (
              <span className="text-red-500 text-sm">
                {errors.serviceCharge.message}
              </span>
            )}
          </div>

          {/* Application Deadline */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Application Deadline
            </label>
            <input
              type="date"
              {...register('applicationDeadline', {
                required: 'This field is required.',
              })}
              className="input input-bordered w-full"
            />
            {errors.applicationDeadline && (
              <span className="text-red-500 text-sm">
                {errors.applicationDeadline.message}
              </span>
            )}
          </div>

          {/* Posted User Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Posted User Email
            </label>
            <input
              type="email"
              {...register('postedUserEmail', {
                required: 'This field is required.',
              })}
              className="input input-bordered w-full"
            />
            {errors.postedUserEmail && (
              <span className="text-red-500 text-sm">
                {errors.postedUserEmail.message}
              </span>
            )}
          </div>
        </div>

        {/* Submit Button */}
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
