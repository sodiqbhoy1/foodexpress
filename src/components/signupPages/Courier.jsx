
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../common/Navbar';


const Courier = () => {
   const API_URL = import.meta.env.VITE_API_URL;

 // Initialize navigate
 const navigate = useNavigate();

 // Formik initialization
 const formik = useFormik({
  initialValues: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    password: '',
    confirmPassword: '',
    experienceInLogistics: '',
    ecommerceLogistics: '',
    courierLicense: '',
  },
  validationSchema: Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  }),
  onSubmit: (values) => {

    console.log(values);

    axios.post(`${API_URL}/signup/courier`, values)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data);
          
          alert('Sign up successful');
          navigate('/login/courier');
        }
      })
      .catch((error) => {
        console.log(error.data);
        
        const errorMessage = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred';
        alert(`Sign up failed: ${errorMessage}`);
      });
  },
});

return (
  <>
  <Navbar/>
  <br />
  <div className="bg-gray-100 py-10 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto shadow-lg rounded-md mt-10">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
      Become Our Delivery Partner
    </h2>
    <p className="text-center text-gray-700 mb-10">
      We&apos;re excited about your interest in partnering with The Kitchen as our Third-Party Logistics provider! To get started, please complete the short form below with some additional information.
    </p>

    <form onSubmit={formik.handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          {...formik.getFieldProps('fullName')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
        ) : null}
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          {...formik.getFieldProps('email')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          {...formik.getFieldProps('phone')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500 text-sm">{formik.errors.phone}</div>
        ) : null}
      </div>

      {/* Address */}
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          id="address"
          {...formik.getFieldProps('address')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="text-red-500 text-sm">{formik.errors.address}</div>
        ) : null}
      </div>

      {/* State and City (side-by-side) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="state">
            State
          </label>
          <input
            type="text"
            id="state"
            {...formik.getFieldProps('state')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
          />
          {formik.touched.state && formik.errors.state ? (
            <div className="text-red-500 text-sm">{formik.errors.state}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            {...formik.getFieldProps('city')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="text-red-500 text-sm">{formik.errors.city}</div>
          ) : null}
        </div>
      </div>

      {/* Password and Confirm Password */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...formik.getFieldProps('password')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...formik.getFieldProps('confirmPassword')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
      </div>

{/* Experience in Logistics */}
<div>
        <label className="block text-gray-700 font-medium mb-2">
          Do you have prior experience in logistics?
        </label>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="experienceInLogistics"
              value="yes"
              checked={formik.values.experienceInLogistics === "yes"}
              onChange={formik.handleChange}
              className="form-radio text-[#ee2a23] focus:ring-[#ee2a23]"
            />
            <span className="ml-2 text-gray-700">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="experienceInLogistics"
              value="no"
              checked={formik.values.experienceInLogistics === "no"}
              onChange={formik.handleChange}
              className="form-radio text-[#ee2a23] focus:ring-[#ee2a23]"
            />
            <span className="ml-2 text-gray-700">No</span>
          </label>
        </div>
      </div>

      {/* E-commerce Logistics */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Have you managed e-commerce logistics in the past?
        </label>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="ecommerceLogistics"
              value="yes"
              checked={formik.values.ecommerceLogistics === "yes"}
              onChange={formik.handleChange}
              
              className="form-radio text-[#ee2a23] focus:ring-[#ee2a23]"
            />
            <span className="ml-2 text-gray-700">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="ecommerceLogistics"
              value="no"
              checked={formik.values.ecommerceLogistics === "no"}
              onChange={formik.handleChange}
              
              className="form-radio text-[#ee2a23] focus:ring-[#ee2a23]"
            />
            <span className="ml-2 text-gray-700">No</span>
          </label>
        </div>
      </div>

      {/* Courier License */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Is your company registered with a courier license?
        </label>
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="courierLicense"
              value="yes"
              checked={formik.values.courierLicense === "yes"}
              onChange={formik.handleChange}
              
              className="form-radio text-[#ee2a23] focus:ring-[#ee2a23]"
              />
            <span className="ml-2 text-gray-700">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="courierLicense"
              value="no"
              checked={formik.values.courierLicense === "no"}
              onChange={formik.handleChange}
              
              className="form-radio text-[#ee2a23] focus:ring-[#ee2a23]"
            />
            <span className="ml-2 text-gray-700">No</span>
          </label>
        </div>
      </div>

      {/* Sign Up Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-[#ee2a23] hover:bg-[#c0241a] text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300 w-full"
        >
          Sign Up
        </button>
      </div>

      {/* Login prompt */}
      <p className="text-center text-gray-600 mt-4">
        Already have an account?{' '}
        <Link to="/login/courier" className="text-[#ee2a23] font-semibold hover:underline">
          Login
        </Link>
      </p>
    </form>
  </div>
          </>
);
}

export default Courier
