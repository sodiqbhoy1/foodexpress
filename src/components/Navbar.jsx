import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="/logo.png"
              alt="Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Center Links */}
            <div className="flex space-x-4">
              <Link
                to="/"
                className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/restaurant"
                className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Restaurant
              </Link>
            </div>

            {/* Right Dropdowns */}
            <div className="flex space-x-4">
              {/* Login Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsLoginOpen(true)}
                  onMouseLeave={() => setIsLoginOpen(false)}
                  className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Login
                </button>
                {isLoginOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2"
                    onMouseEnter={() => setIsLoginOpen(true)}
                    onMouseLeave={() => setIsLoginOpen(false)}
                  >
                    <Link
                      to="/login/courier"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Courier
                    </Link>
                    <Link
                      to="/login/customer"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Customer
                    </Link>
                    <Link
                      to="/login/vendor"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Vendor
                    </Link>
                  </div>
                )}
              </div>

              {/* Signup Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsSignupOpen(true)}
                  onMouseLeave={() => setIsSignupOpen(false)}
                  className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Signup
                </button>
                {isSignupOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2"
                    onMouseEnter={() => setIsSignupOpen(true)}
                    onMouseLeave={() => setIsSignupOpen(false)}
                  >
                    <Link
                      to="/signup/courier"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Courier
                    </Link>
                    <Link
                      to="/signup/customer"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Customer
                    </Link>
                    <Link
                      to="/signup/vendor"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Vendor
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Home
            </Link>
            <Link
              to="/restaurant"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Restaurant
            </Link>
            
            {/* Mobile Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Login
              </button>
              {isLoginOpen && (
                <div className="pl-4">
                  <Link
                    to="/login/courier"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Courier
                  </Link>
                  <Link
                    to="/login/customer"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Customer
                  </Link>
                  <Link
                    to="/login/vendor"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Vendor
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Signup Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSignupOpen(!isSignupOpen)}
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Signup
              </button>
              {isSignupOpen && (
                <div className="pl-4">
                  <Link
                    to="/signup/courier"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Courier
                  </Link>
                  <Link
                    to="/signup/customer"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Customer
                  </Link>
                  <Link
                    to="/signup/vendor"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Vendor
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;