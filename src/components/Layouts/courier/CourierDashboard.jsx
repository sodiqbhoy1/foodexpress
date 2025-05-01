import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourierDashboard = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  // Navigation items
  const navItems = [
    { name: 'Dashboard', href: '#', icon: '🏠', current: true },
    { name: 'Orders', href: '#', icon: '📦', count: 2 },
    { name: 'Earnings', href: '#', icon: '💰' },
    { name: 'Schedule', href: '#', icon: '📅' },
    { name: 'Messages', href: '#', icon: '💬', count: 3 },
  ];
  // ... existing orders and stats data ...
  const [orders] = useState([
    {
      id: 1234,
      restaurant: "Burger Palace",
      customer: "John Smith",
      address: "123 Main St, Apt 4B",
      items: 3,
      amount: "$24.50",
      status: "pickup",
      eta: "15 min"
    },
    {
      id: 1235,
      restaurant: "Sushi Master",
      customer: "Emma Johnson",
      address: "456 Oak Rd",
      items: 2,
      amount: "$32.75",
      status: "delivery",
      eta: "25 min"
    }
  ]);

  const stats = {
    completedToday: 8,
    averageTime: "28 min",
    rating: 4.8,
    earningsToday: "$68.40"
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Navigation */}
      <div className="md:hidden fixed w-full bg-white shadow-sm z-50">
        <div className="flex justify-between items-center p-4">
          <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600">DC</span>
          </div>
        </div>
      </div>

      {/* Side Navigation */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out z-50`}>
        <div className="flex flex-col h-full p-4 border-r border-gray-200">
          {/* Logo */}
          <div className="mb-8 px-2">
            <h2 className="text-xl font-bold text-[#E60023]">FoodDelivery</h2>
            <p className="text-sm text-gray-500">Courier Portal</p>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium ${
                  item.current
                    ? 'bg-[#E60023]/10 text-[#E60023]'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
                {item.count && (
                  <span className="ml-auto bg-gray-200 px-2 py-0.5 text-xs rounded-full">
                    {item.count}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Profile Section */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center px-2">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">DC</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">David Courier</p>
                <p className="text-sm text-gray-500">david@fooddelivery.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="md:ml-64 pt-14 md:pt-0">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900">Today's Deliveries</h1>
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-gray-600">Hi, David!</span>
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">DC</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Existing Dashboard Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* ... rest of the existing dashboard content ... */}
          <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Courier Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Hi, David!</span>
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">DC</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Completed Today</h3>
            <p className="mt-2 text-3xl font-bold text-[#E60023]">{stats.completedToday}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Avg. Delivery Time</h3>
            <p className="mt-2 text-3xl font-bold text-[#E60023]">{stats.averageTime}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Rating</h3>
            <p className="mt-2 text-3xl font-bold text-[#E60023]">{stats.rating}/5</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Earnings Today</h3>
            <p className="mt-2 text-3xl font-bold text-[#E60023]">{stats.earningsToday}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Orders Section */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-4 px-4">
                  {['current', 'completed'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-4 font-medium ${
                        activeTab === tab
                          ? 'text-[#E60023] border-b-2 border-[#E60023]'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)} Orders
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Order #{order.id}</h3>
                        <p className="text-sm text-gray-600">{order.restaurant}</p>
                        <p className="text-sm mt-2">
                          <span className="font-medium">Customer:</span> {order.customer}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Address:</span> {order.address}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === 'pickup' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {order.status}
                        </span>
                        <p className="mt-2 text-xl font-bold text-[#E60023]">{order.eta}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <button className="px-4 py-2 bg-[#E60023] text-white rounded-lg hover:bg-[#C3001B] transition-colors">
                        {order.status === 'pickup' ? 'Start Delivery' : 'Complete Delivery'}
                      </button>
                      <div className="text-sm text-gray-600">
                        {order.items} items • {order.amount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-4 h-96">
              <h2 className="text-lg font-medium mb-4">Delivery Route</h2>
              <div className="bg-gray-100 h-full rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Map Integration Area</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
        </main>
      </div>

      {/* Overlay for mobile navigation */}
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}
    </div>
  );
};

export default CourierDashboard;


