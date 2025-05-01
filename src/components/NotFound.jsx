import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg w-full sm:w-96">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="text-white bg-[#ee2a23] hover:bg-[#c0241a] font-semibold py-2 px-6 rounded-md transition-colors duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
    </div>
  )
}

export default NotFound
