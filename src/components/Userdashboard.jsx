import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaCog, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

  const orders = [
    { id: 12345, status: 'Delivered' },
    { id: 12346, status: 'Shipped' },
    { id: 12347, status: 'Pending' },
  ];

  const user = JSON.parse(localStorage.getItem('customer'));

  const handleLogout = () => {
    console.log('Logging out...');
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'w-64' : 'w-16'
        } transition-all duration-300 bg-blue-800 text-white p-6`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white absolute top-6 right-6 lg:hidden"
          aria-label={isSidebarOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isSidebarOpen && (
          <>
            <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>
          </>
        )}

        <ul className="mt-6">
          <li className="mb-4 flex items-center">
            <FaUser className="mr-3 text-xl" />
            {isSidebarOpen && <span>Profile</span>}
          </li>
          <li className="mb-4 flex items-center">
            <FaShoppingCart className="mr-3 text-xl" />
            {isSidebarOpen && <span>Order History</span>}
          </li>
          <li className="mb-4 flex items-center">
            <FaCog className="mr-3 text-xl" />
            {isSidebarOpen && <span>Settings</span>}
          </li>
          <li className="mt-6 flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white hover:text-gray-200 flex items-center"
              aria-label="Logout"
            >
              <FaSignOutAlt className="mr-3 text-xl" />
              {isSidebarOpen && <span>Logout</span>}
            </button>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome back, User!</h1>

        {/* Profile Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile</h2>
          <p className="text-gray-700">Manage your personal information and account details.</p>
          <div className="mt-6">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
          </div>
        </div>

        {/* Order History Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order History</h2>
          <p className="text-gray-700">Here are your most recent orders:</p>
          <ul className="mt-4">
            {orders.map((order) => (
              <li key={order.id} className="flex justify-between py-2 border-b border-gray-200">
                <span className="text-gray-700">Order #{order.id}</span>
                <span className="text-gray-500">{order.status}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendations Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommendations</h2>
          <p className="text-gray-700">Based on your past purchases, we think you'll like these items:</p>
          <ul className="mt-4">
            <li className="py-2 border-b border-gray-200 text-gray-700">Product 1</li>
            <li className="py-2 border-b border-gray-200 text-gray-700">Product 2</li>
            <li className="py-2 border-b border-gray-200 text-gray-700">Product 3</li>
          </ul>
        </div>

        {/* Settings Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Settings</h2>
          <p className="text-gray-700">Manage your account settings and preferences.</p>
          <div className="mt-6">
            <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition duration-200">
              Update Settings
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Are you sure you want to logout?</h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
