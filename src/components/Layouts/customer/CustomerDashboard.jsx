import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";



export default function CustomerDashboardLayout() {
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
    <div className="flex h-screen bg-gray-100">
      <Sidebar user={user} />
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet context={{ user }} />
      </main>
    </div>
  );
}
