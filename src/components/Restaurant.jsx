import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';


const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('https://foodserver-0mx8.onrender.com/vendors');
        setRestaurants(response.data);
      } catch (err) {
        setError('Failed to fetch restaurants. Please try again later.');
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="bg-white p-6 max-w-7xl mx-auto mt-20">
      {/* Hero Section */}
      
      {/* Restaurant List */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Available Restaurants</h3>
        
        {error && <p className="text-red-500 mb-6">{error}</p>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div
            key={restaurant.id || restaurant.storeName}
              className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
            >
            <img
              src={restaurant.imageUrl || 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              alt={restaurant.storeName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{restaurant.storeName}</h2>
              <p className="text-gray-700 text-base mb-1">
                {restaurant.storeAddress}, {restaurant.city}
              </p>
              <p className="text-gray-700 text-base mb-1">
                Phone: {restaurant.phone}
              </p>
              <p className="text-gray-700 text-base mb-1">
                Email: {restaurant.email}
              </p>
            </div>
            <div className="px-4 pb-4">
              <button className="bg-[#e02a1d] hover:bg-[#c0241a] text-white font-bold py-2 px-4 rounded w-full">
                View Details
              </button>
            </div>
          </div>          ))}
        </div>
      </div>
    </div>
            </>
  );
};

export default Restaurant;