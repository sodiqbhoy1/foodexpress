import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const ForgotPassword = ({ userType }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
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
        setMessage('Reset link sent to your email! Check your inbox.');
      } else {
        setMessage(data.message || 'Error sending reset link.');
        console.log(data);
        
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
    <Navbar/>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {getTitle()}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email to reset your password
        </p>
      </div>

      <div className="flex items-center justify-center pt-20">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-white text-center mb-4">FITZONE</h2>
          <h1 className="text-2xl font-semibold text-white text-center mb-6">Forgot Password</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Email Address</label>
              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {message && (
              <p
                className={`text-sm text-center ${
                  message.includes('sent') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 bg-[#EC7807] text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>

            <p className="text-sm text-gray-400 text-center">
              Remember your password?{' '}
              <Link to="/login" className="text-blue-500 hover:text-blue-400">
                Sign In
              </Link>
            </p>
          </form>
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