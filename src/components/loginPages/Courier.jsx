import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';
import axios from 'axios';

const Courier = () => {
  const navigate = useNavigate()
    const initialValues = {
        email: '',
        password: ''
      };
    
      const validationSchema = Yup.object().shape({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required')
      });
    
      const handleSubmit =async (values, { setSubmitting }) => {
        console.log(values);
        // Add your login API call here

        try {
          const response = await axios.post('https://foodserver-0mx8.onrender.com/signin/courier', values);
  
          if (response.status === 200) {
            console.log('Successful login:', response.data);
  
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.buyer));
  
            navigate('/dashboard/courier');
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





        setSubmitting(false);
      };
    
      return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Rider Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Access your rider dashboard
            </p>
          </div>
    
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <div className="mt-1">
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E60023] focus:border-[#E60023] sm:text-sm"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>
    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="mt-1">
                        <Field
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E60023] focus:border-[#E60023] sm:text-sm"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>
    
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <Link to="/forgot-password/courier" className="font-medium text-[#E60023] hover:text-[#C3001B]">
                          Forgot password?
                        </Link>
                      </div>
                    </div>
    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E60023] hover:bg-[#C3001B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E60023] transition-colors"
                    >
                      Sign in
                    </button>
    
                    <div className="text-center text-sm mt-4">
                      <span className="text-gray-600">Don&apos;t have an account? </span>
                      <Link to="/signup/courier" className="font-medium text-[#E60023] hover:text-[#C3001B]">
                        Sign up here
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
                </>
      );
}

export default Courier
