import { useState } from "react";
import {
  ReceiptText,
  CalendarDays,
  CreditCard,
  User,
  HelpCircle,
  LogOut,
  Menu as MenuIcon,
} from "lucide-react";

const customerMenu = [
  { name: "My Orders", icon: <ReceiptText />, path: "#" },
  { name: "My Reservations", icon: <CalendarDays />, path: "#" },
  { name: "Payment Methods", icon: <CreditCard />, path: "#" },
  { name: "Profile", icon: <User />, path: "#" },
  { name: "Support", icon: <HelpCircle />, path: "#" },
];

const CustomerDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const customerName = "John Doe"; // Replace this with actual dynamic data

  const handleLogout = () => {
    // Example logout logic
    alert("Logged out");
    // e.g., clear tokens, redirect, etc.
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-[#1E293B] text-white transition-all duration-300 flex flex-col ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Top */}
        <div className="p-4 border-b border-slate-600 flex items-center justify-between">
          {!collapsed && <span className="text-lg font-bold">MyRestaurant</span>}
          <button onClick={() => setCollapsed(!collapsed)}>
            <MenuIcon size={20} />
          </button>
        </div>

        {/* User Info */}
        {!collapsed && (
          <div className="px-4 py-3 border-b border-slate-600 text-sm text-gray-200">
            <p className="font-medium">Welcome,</p>
            <p className="truncate">{customerName}</p>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          {customerMenu.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center gap-4 p-4 hover:bg-slate-700 transition-colors"
            >
              {item.icon}
              {!collapsed && <span>{item.name}</span>}
            </a>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-600">
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 w-full text-left hover:bg-slate-700 p-2 rounded"
          >
            <LogOut size={18} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome Back, {customerName.split(" ")[0]}!</h1>
        <div className="mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-4 rounded-xl shadow">📦 Recent Orders</div>
          <div className="bg-white p-4 rounded-xl shadow">📅 Upcoming Reservations</div>
          <div className="bg-white p-4 rounded-xl shadow">💳 Saved Cards</div>
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;
