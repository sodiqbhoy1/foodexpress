import React from 'react';
import { 
  ShoppingBagIcon,
  MapPinIcon,
  BuildingOffice2Icon,
  FlagIcon
} from '@heroicons/react/24/outline';

const SellerOverview = () => {
  const seller = JSON.parse(localStorage.getItem('seller'));

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-amber-50 transition-all hover:shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <ShoppingBagIcon className="h-8 w-8 text-amber-600" />
        <h2 className="text-3xl font-bold text-gray-800">Restaurant Overview</h2>
      </div>
      
      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        Welcome back to your culinary command center! Manage orders, update your menu, 
        and craft delicious experiences for your customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-amber-50 p-5 rounded-xl flex items-center gap-4">
          <div className="bg-amber-100 p-3 rounded-lg">
            <ShoppingBagIcon className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-amber-700 font-medium">Store Name</p>
            <p className="text-gray-800 font-semibold">{seller?.storeName}</p>
          </div>
        </div>

        <div className="bg-amber-50 p-5 rounded-xl flex items-center gap-4">
          <div className="bg-amber-100 p-3 rounded-lg">
            <MapPinIcon className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-amber-700 font-medium">Store Address</p>
            <p className="text-gray-800 font-semibold">{seller?.storeAddress}</p>
          </div>
        </div>

        <div className="bg-amber-50 p-5 rounded-xl flex items-center gap-4">
          <div className="bg-amber-100 p-3 rounded-lg">
            <BuildingOffice2Icon className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-amber-700 font-medium">City</p>
            <p className="text-gray-800 font-semibold">{seller?.city}</p>
          </div>
        </div>

        <div className="bg-amber-50 p-5 rounded-xl flex items-center gap-4">
          <div className="bg-amber-100 p-3 rounded-lg">
            <FlagIcon className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-amber-700 font-medium">State</p>
            <p className="text-gray-800 font-semibold">{seller?.state}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerOverview;