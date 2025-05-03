
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import 'flowbite'; // Import Flowbite for Toast Notifications
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link for routing
import Navbar from '../common/Navbar';


const Vendor = () => {
  const navigate = useNavigate(); //initialize navigate function
  // Removed unused toastType state

// Formik initialization
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      storeName: '',
      storeAddress: '',
      city: '',
      state: '',
      storeLicense: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
      storeName: Yup.string().required('Store Name is required'),
      storeAddress: Yup.string().required('Store Address is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      storeLicense: Yup.string().required('Store License Number is required'),
    }),
    onSubmit: async (values) => {
      console.log(values);

      try {
        // Send the form data to the server
        const response = await axios.post("https://foodserver-0mx8.onrender.com/signup/vendor", values);

        // If the server responds with a success status (status 201)
        if (response.status === 201) {
         
          navigate('/login/vendor') // Redirect to login page
          formik.resetForm(); // Reset form after successful submit
        }
      } catch (error) {
        // Safely handle cases where error.response is undefined
        const errorMessage = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred';
       
        alert(errorMessage); // Show error message in an alert box
        
      } 
    },
  });

  return (
    <>
    <Navbar/>
    <br />
    <div className="bg-gray-100 py-10 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto shadow-lg rounded-md mt-10">
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Become a Seller</h2>
        <p className="text-center text-gray-700 mb-10">
          Ready to sell with us? Fill out your personal and store details to join as a seller.
        </p>

        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Details */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Details</h3>

            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter full name"
                {...formik.getFieldProps('fullName')}
                className={`w-full px-4 py-2 border ${
                  formik.touched.fullName && formik.errors.fullName ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
              ) : null}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...formik.getFieldProps('email')}
                className={`w-full px-4 py-2 border ${
                  formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Enter your phone number"
                {...formik.getFieldProps('phone')}
                className={`w-full px-4 py-2 border ${
                  formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm">{formik.errors.phone}</div>
              ) : null}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...formik.getFieldProps('password')}
                className={`w-full px-4 py-2 border ${
                  formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                {...formik.getFieldProps('confirmPassword')}
                className={`w-full px-4 py-2 border ${
                  formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
          </div>

          {/* Store Details */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Store Details</h3>

            {/* Store Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="storeName">
                Store Name
              </label>
              <input
                id="storeName"
                type="text"
                placeholder="Enter store name"
                {...formik.getFieldProps('storeName')}
                className={`w-full px-4 py-2 border ${
                  formik.touched.storeName && formik.errors.storeName ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
              />
              {formik.touched.storeName && formik.errors.storeName ? (
                <div className="text-red-500 text-sm">{formik.errors.storeName}</div>
              ) : null}
            </div>

            {/* Store Address */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="storeAddress">
                Store Address
              </label>
              <input
                id="storeAddress"
                type="text"
                placeholder="Enter store address"
                {...formik.getFieldProps('storeAddress')}
                className={`w-full px-4 py-2 border ${
                  formik.touched.storeAddress && formik.errors.storeAddress ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
              />
              {formik.touched.storeAddress && formik.errors.storeAddress ? (
                <div className="text-red-500 text-sm">{formik.errors.storeAddress}</div>
              ) : null}
            </div>

            {/* City */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="city">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder="Enter your city"
                {...formik.getFieldProps('city')}
                className={`w-full px-4 py-2 border ${
                  formik.touched.city && formik.errors.city ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="text-red-500 text-sm">{formik.errors.city}</div>
              ) : null}
            </div>

            {/* State */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="state">
                State
              </label>
              <input
                id="state"
                type="text"
                placeholder="Enter your state"
                {...formik.getFieldProps('state')}
                className={`w-full px-4 py-2 border ${
                  formik.touched.state && formik.errors.state ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
              />
              {formik.touched.state && formik.errors.state ? (
                <div className="text-red-500 text-sm">{formik.errors.state}</div>
              ) : null}
            </div>

            {/* Store License Number */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="storeLicense">
                Store License Number
              </label>
              <input
                id="storeLicense"
                type="text"
                placeholder="Enter your store license number"
                {...formik.getFieldProps('storeLicense')}
                className={`w-full px-4 py-2 border ${
                  formik.touched.storeLicense && formik.errors.storeLicense ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
              />
              {formik.touched.storeLicense && formik.errors.storeLicense ? (
                <div className="text-red-500 text-sm">{formik.errors.storeLicense}</div>
              ) : null}
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 mt-6">
            <button
              type="submit"
              className="w-full bg-[#c0241a] hover:bg-[#8d2d26] text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* "Already have an account?" link */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Already have an account?{' '}
            <Link to="/login/vendor" className="text-blue-600 hover:text-blue-800 font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Vendor
