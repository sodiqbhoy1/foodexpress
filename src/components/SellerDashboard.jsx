import React, { useState } from 'react';
import { FaShoppingCart, FaUtensils, FaCog, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import SellerOrder from './SellerOrder';
import SellerMenu from './SellerMenu';
import SellerSettings from './SellerSettings';
import SellerOverview from './SellerOverview';

const SellerDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Navbar state for mobile
  const [selectedSection, setSelectedSection] = useState('overview'); // Track selected section

  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const seller = JSON.parse(localStorage.getItem('seller'));

  if (!token) {
    navigate('/seller/login');
  }

  const orders = [
    { id: 12345, status: 'Pending' },
    { id: 12346, status: 'Delivered' },
    { id: 12347, status: 'In Progress' },
  ];

  const filteredOrders = orders.filter(order =>
    order.id.toString().includes(searchQuery)
  );

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('token');
    localStorage.removeItem('seller');
    setIsModalOpen(false);
    navigate('/seller/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-3">
      {/* Navbar */}
      <div className="bg-[#ee2a23] text-white p-4 fixed w-full top-0 left-0 z-50">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Restaurant Dashboard</h2>

          <button
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            className="lg:hidden text-white"
            aria-label={isNavbarOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isNavbarOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Navbar Links */}
          <div className={`lg:flex space-x-6 ${isNavbarOpen ? 'block' : 'hidden'}`}>
            <button onClick={() => setSelectedSection('overview')} className="flex items-center space-x-2">
              <FaUtensils />
              <span>Dashboard</span>
            </button>
            
            <button onClick={() => setSelectedSection('product')} className="flex items-center space-x-2">
              <FaUtensils />
              <span> Product </span>
            </button>

            <button onClick={() => setSelectedSection('orders')} className="flex items-center space-x-2">
              <FaShoppingCart />
              <span>Orders</span>
            </button>
            <button onClick={() => setSelectedSection('delivery')} className="flex items-center space-x-2">
              <FaShoppingCart />
              <span>Delivery</span>
            </button>

            <button onClick={() => setSelectedSection('notifications')} className="flex items-center space-x-2">
              <FaCog />
              <span>Notifications</span>
            </button>
            <button onClick={() => setSelectedSection('tracking')} className="flex items-center space-x-2">
              <FaCog />
              <span>Tracking</span>
            </button>
            <button onClick={() => setIsModalOpen(true)} className="flex items-center space-x-2">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome back, Restaurant Owner!</h1>

        {/* Display the content based on selected section */}
        {selectedSection === 'overview' && <SellerOverview seller={seller} />}
        {selectedSection === 'orders' && <SellerOrder filteredOrders={filteredOrders} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
        {selectedSection === 'menu' && <SellerMenu />}
        {selectedSection === 'settings' && <SellerSettings />}
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
                className="px-4 py-2 bg-red-500 text-white rounded-md"
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

export default SellerDashboard;
