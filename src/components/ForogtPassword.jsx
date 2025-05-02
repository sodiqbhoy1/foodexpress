import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { ArrowPathIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const ForgotPassword = ({ userType }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(`https://foodserver-0mx8.onrender.com/${userType}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password reset link sent to your email! Check your inbox.');
      } else {
        setMessage(data.message || 'Error sending reset link.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getTitle = () => {
    const titles = {
      vendor: 'Vendor Password Recovery',
      customer: 'Customer Password Recovery',
      courier: 'Courier Password Recovery',
    };
    return titles[userType] || 'Password Recovery';
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16"> {/* Added padding for navbar */}
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-red-600">
              Food<span className="text-orange-500">Express</span>
            </h1>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              {getTitle()}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Enter your email to reset your password
            </p>
          </div>

          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
              </div>

              {message && (
                <div className={`p-3 rounded-md text-sm ${
                  message.includes('sent') 
                    ? 'bg-green-50 text-green-700' 
                    : 'bg-red-50 text-red-700'
                }`}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
                    Sending...
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </button>

              <div className="text-center text-sm">
                <Link 
                  to="/login" 
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  Remember your password? Sign in
                </Link>
              </div>
            </form>
          </div>

          <div className="mt-8 text-center">
            <img 
              src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Food delivery" 
              className="mx-auto h-40 w-40 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ForgotPassword.propTypes = {
  userType: PropTypes.oneOf(['customer', 'vendor', 'courier']).isRequired,
};

export default ForgotPassword;