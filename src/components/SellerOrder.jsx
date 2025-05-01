import React from 'react'

const SellerOrder = ({ filteredOrders, searchQuery, setSearchQuery}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
    <div className="mb-4">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Search Orders"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
    <p className="text-gray-700">Here are your most recent orders:</p>
    {filteredOrders.length === 0 ? (
      <div className="text-gray-500">No orders found.</div>
    ) : (
      <ul className="mt-4">
        {filteredOrders.map((order) => (
          <li key={order.id} className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-700">Order #{order.id}</span>
            <span className="text-gray-500">{order.status}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default SellerOrder
