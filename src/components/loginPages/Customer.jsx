import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';


const Customer = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      console.log('Form submitted:', values);

      try {
        const response = await axios.post('http://localhost:3000/signin/customer', values);

        if (response.status === 200) {
          console.log('Successful login:', response.data);

          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.buyer));

          navigate('/userdashboard');
        } else {
          console.log('Unsuccessful login:', response.data);
        }
      } catch (error) {
        console.error('Error during signin:', error.response);
        if (error.response && error.response.data) {
          alert(error.response.data.error || 'An error occurred during signin.');
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    },
  });

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Sign In</h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...formik.getFieldProps('email')}
              className={`w-full px-4 py-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-2">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...formik.getFieldProps('password')}
              className={`w-full px-4 py-2 border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee2a23] focus:border-transparent`}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <Link to="/forgot-password/customer" className="text-sm text-[#ee2a23] hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-[#ee2a23] hover:bg-[#c0241a] text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign Up Prompt */}
        <p className="text-center text-gray-600 mt-4">
          Don&lsquo;t have an account?{' '}
          <Link to="/signup/customer" className="text-[#ee2a23] font-semibold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default Customer
