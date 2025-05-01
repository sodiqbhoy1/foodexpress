import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Navbar';

const Vendor = () => {
  const navigate = useNavigate();
  const [backendError, setBackendError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setBackendError(null);
      try {
        const response = await axios.post('http://localhost:3000/seller/signin', values);
        
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('seller', JSON.stringify(response.data.seller));
          navigate('/sellerdashboard');
        }
      } catch (error) {
        const errorMessage = error.response?.data?.error || 'An error occurred. Please try again.';
        setBackendError(errorMessage);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-r from-[#FFE5E5] to-[#FFF0F5] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Vendor Sign In</h2>
          <p className="text-gray-600">Access your  dashboard</p>
        </div>

        {backendError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {backendError}
          </div>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="seller@example.com"
              {...formik.getFieldProps('email')}
              className={`w-full px-4 py-2 border ${
                formik.touched.email && formik.errors.email 
                  ? 'border-red-500' 
                  : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-[#E60023] focus:border-transparent`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link 
                to="/forgot-password/vendor" 
                className="text-sm text-[#E60023] hover:text-[#C3001B]"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              {...formik.getFieldProps('password')}
              className={`w-full px-4 py-2 border ${
                formik.touched.password && formik.errors.password 
                  ? 'border-red-500' 
                  : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-[#E60023] focus:border-transparent`}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-[#E60023] hover:bg-[#C3001B] text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-300 disabled:opacity-50"
            >
            {formik.isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link 
            to="/signup/vendor" 
            className="font-medium text-[#E60023] hover:text-[#C3001B]"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
            </>
  );
}

export default Vendor
