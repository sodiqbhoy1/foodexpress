import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
   
  // fetch user data from API (placeholder for now)

  const [user, setUser] = useState(null);

useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");

    axios
      .get(`${API_URL}/customer/details`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  if (!user) return <p className="p-6">Loading...</p>;


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-xl mt-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <div>
          <p className="font-medium">  Name</p>
          <p>{user.name}</p>
        </div>

        <div>
          <p className="font-medium">Email</p>
          <p>{user.email}</p>
        </div>

        <div>
          <p className="font-medium">Phone</p>
          <p>{user.phone}</p>
        </div>
        <div>
          <p className="font-medium">Delivery Address</p>
          <p>{user.address}</p>
        </div>

        
        
      </div>

      <div className="mt-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
