import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('https://foodserver-0mx8.onrender.com/vendors');
        setRestaurants(response.data);
      } catch (err) {
        setError('Failed to fetch restaurants. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-16">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Local Restaurants
            </h1>
            <p className="text-lg text-gray-600">
              Explore the best dining experiences in your area
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="mb-8 p-4 bg-red-50 rounded-lg">
              <p className="text-red-600 text-center">{error}</p>
            </div>
          )}

          {/* Restaurant List */}
          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restaurants.map((restaurant) => (
                <div
                  key={restaurant.id || restaurant.storeName}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
                >
                  <img
                    src={restaurant.imageUrl || 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    alt={restaurant.storeName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2 text-gray-900">
                      {restaurant.storeName}
                    </h2>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {restaurant.storeAddress}, {restaurant.city}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {restaurant.phone}
                      </p>
                      <p className="flex items-center truncate">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {restaurant.email}
                      </p>
                    </div>
                    <div className="mt-4">
                      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                        View Menu
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Restaurant;