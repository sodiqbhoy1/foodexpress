import React from "react";

const DashboardHome = () => {
  const user = {
    name: "Adamu Baba",
  };

  const stats = [
    { label: "Total Orders", value: 15, icon: "📦" },
    { label: "Upcoming Reservations", value: 2, icon: "📅" },
    { label: "Saved Cards", value: 2, icon: "💳" },
    { label: "Reward Points", value: "450 pts", icon: "⭐" },
  ];

  const recentOrders = [
    { meal: "Jollof Rice with Grilled Chicken", date: "02 June 2025" },
    { meal: "Pounded Yam & Egusi", date: "28 May 2025" },
    { meal: "Fried Rice Combo", date: "21 May 2025" },
  ];

  const upcomingReservation = {
    date: "15 June 2025",
    time: "7:00 PM",
    table: "Table 4",
    guests: 2,
  };

  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back, {user.name} 👋
        </h1>
        <p className="text-gray-500">Here's what's happening with your account.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow flex items-center gap-4"
          >
            <div className="text-3xl">{item.icon}</div>
            <div>
              <p className="text-lg font-semibold">{item.value}</p>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <ul className="space-y-2">
          {recentOrders.map((order, index) => (
            <li key={index} className="flex justify-between text-gray-700">
              <span>{order.meal}</span>
              <span className="text-sm text-gray-500">{order.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Upcoming Reservation */}
      <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Upcoming Reservation</h2>
        <div className="text-gray-700 space-y-1">
          <p>
            <strong>Date:</strong> {upcomingReservation.date}
          </p>
          <p>
            <strong>Time:</strong> {upcomingReservation.time}
          </p>
          <p>
            <strong>Table:</strong> {upcomingReservation.table}
          </p>
          <p>
            <strong>Guests:</strong> {upcomingReservation.guests}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
