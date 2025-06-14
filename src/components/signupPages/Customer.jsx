import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';


const Customer = () => {
   const API_URL = import.meta.env.VITE_API_URL;


  const navigate = useNavigate();
  // Formik initialization
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      address: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
      address: Yup.string().required('Address is required'),
    }),
    onSubmit: async (values) => {
      console.log(values);
    
      try {
        // Send the form data to the server
        const response = await axios.post(`${API_URL}/signup/customer`, values);
    
        // If the server responds with a success status (status 201)
        if (response.status === 201) {
          alert('Sign up successful');
          navigate('/login/customer');
        }
      } catch (error) {
        // Safely handle cases where error.response is undefined
        const errorMessage = error.response?.data?.error || error.response?.data?.message || 'An unexpected error occurred';
        alert(`Sign up failed: ${errorMessage}`);
      }
    },
    
  });

  return (
    <>
    <Navbar/>
    <br />
    <div className="bg-gray-100 py-10 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto shadow-lg rounded-md mt-10 ">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Sign Up as a Customer
      </h2>

      {/* Customer Details Section */}
      <p className="text-xl font-semibold text-gray-800 mb-4">Customer Details</p>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            {...formik.getFieldProps('name')}
            className={`w-full px-4 py-2 border ${
              formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            {...formik.getFieldProps('email')}
            className={`w-full px-4 py-2 border ${
              formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Enter Your Phone Number"
            {...formik.getFieldProps('phone')}
            className={`w-full px-4 py-2 border ${
              formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            {...formik.getFieldProps('password')}
            className={`w-full px-4 py-2 border ${
              formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...formik.getFieldProps('confirmPassword')}
            className={`w-full px-4 py-2 border ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? 'border-red-500'
                : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        {/* Delivery Details Section */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Delivery Details</h2>

        <div>
          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Enter Your Address"
            {...formik.getFieldProps('address')}
            className={`w-full px-4 py-2 border ${
              formik.touched.address && formik.errors.address ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="w-full bg-[#ee2a23] hover:bg-[#c0241a] text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
          >
            Sign Up
          </button>
        </div>

        {/* Login Prompt */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login/customer" className="text-[#ee2a23] font-semibold hover:underline"> Login</Link>
          
        </p>
      </form>
    </div>
    </>
  );
}

export default Customer
