import React, { useState } from 'react';

const SellerMenu = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // Track form visibility
  const [menuItem, setMenuItem] = useState({
    name: '',
    description: '',
    price: '',
  }); // Store new menu item data
  const [menuItems, setMenuItems] = useState([]); // Store all menu items

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMenuItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSave = (e) => {
    e.preventDefault();
    // Add new item to the menu list
    setMenuItems((prevItems) => [
      ...prevItems,
      { ...menuItem, status: 'Available', rating: 0, totalSales: 0 },
    ]);

    // Hide the form after saving
    setIsFormVisible(false);

    // Clear the form fields
    setMenuItem({
      name: '',
      description: '',
      price: '',
    });
  };

  // Handle status toggle change
  const handleStatusChange = (index) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index].status =
      updatedMenuItems[index].status === 'Available' ? 'Unavailable' : 'Available';
    setMenuItems(updatedMenuItems);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Menu Management</h2>
      <p className="text-gray-700">You can add, update, or remove items from your restaurant's menu here.</p>

      {/* Show button to add menu item or the form */}
      {!isFormVisible ? (
        <div className="mt-6">
          <button
            className="bg-[#ee2a23] text-white px-6 py-2 rounded-md"
            onClick={() => setIsFormVisible(true)} // Show form on button click
          >
            Add New Menu
          </button>
        </div>
      ) : (
        <form onSubmit={handleSave} className="mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Menu Item Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={menuItem.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter menu item name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={menuItem.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter menu item description"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={menuItem.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter menu item price"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setIsFormVisible(false)} // Hide form without saving
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#ee2a23] text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      )}

      {/* Display list of menu items */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Menu List</h3>
        {menuItems.length === 0 ? (
          <p className="text-gray-700">No menu items available. Add a menu item to get started!</p>
        ) : (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="text-left font-semibold text-gray-800 py-2 px-4">Name</th>
                  <th className="text-left font-semibold text-gray-800 py-2 px-4">Price</th>
                  <th className="text-left font-semibold text-gray-800 py-2 px-4">Status</th>
                  <th className="text-left font-semibold text-gray-800 py-2 px-4">Rating</th>
                  <th className="text-left font-semibold text-gray-800 py-2 px-4">Total Sales</th>
                  <th className="text-left font-semibold text-gray-800 py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">${item.price}</td>
                    <td className="py-2 px-4">
                      {/* Status toggle */}
                      <button
                        onClick={() => handleStatusChange(index)}
                        className={`px-3 py-1 rounded-md text-white ${
                          item.status === 'Available' ? 'bg-green-500' : 'bg-gray-500'
                        }`}
                      >
                        {item.status}
                      </button>
                    </td>
                    <td className="py-2 px-4">{item.rating}</td>
                    <td className="py-2 px-4">{item.totalSales}</td>
                    <td className="py-2 px-4">
                      {/* Edit and Delete buttons */}
                      <button className="px-3 py-1 border border-[#ee2a23] text-[#ee2a23] rounded-md mr-2">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-[#ee2a23] text-white rounded-md">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerMenu;
