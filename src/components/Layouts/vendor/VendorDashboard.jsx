import { useState } from "react";
import {
  LayoutDashboard,
  Utensils,
  CalendarDays,
  Users,
  BarChart2,
  Settings,
  LogOut,
  Menu as MenuIcon,
  ReceiptText,
} from "lucide-react";
import {  Routes, Route, Link } from "react-router-dom";
import Overview from "./Overview";
import Orders from "./Orders";
import MenuPage from "./Menu";
import Reservations from "./Reservations";
import Reports from "./Reports";
import Customers from "./Customers";
import Setting from "./Settings";




const vendorMenu = [
  { name: "Overview", icon: <LayoutDashboard />, path: "/dashboard/vendor" },
  { name: "Orders", icon: <ReceiptText />, path: "/dashboard/vendor/orders" },
  { name: "Menu", icon: <Utensils />, path: "/dashboard/vendor/menu" },
  { name: "Reservations", icon: <CalendarDays />, path: "/dashboard/vendor/reservations" },
  { name: "Customers", icon: <Users />, path: "/dashboard/vendor/customers" },
  { name: "Reports", icon: <BarChart2 />, path: "/dashboard/vendor/reports" },
  { name: "Settings", icon: <Settings />, path: "/dashboard/vendor/settings" },
];

const VendorDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const vendorName = "Chef Bella";

  const handleLogout = () => {
    alert("Logged out");
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div
          className={`bg-[#1E293B] text-white transition-all duration-300 flex flex-col ${
            collapsed ? "w-16" : "w-64"
          }`}
        >
          {/* Top */}
          <div className="p-4 border-b border-slate-600 flex items-center justify-between">
            {!collapsed && <span className="text-lg font-bold">Vendor Panel</span>}
            <button onClick={() => setCollapsed(!collapsed)}>
              <MenuIcon size={20} />
            </button>
          </div>

          {/* Vendor Info */}
          {!collapsed && (
            <div className="px-4 py-3 border-b border-slate-600 text-sm text-gray-200">
              <p className="font-medium">Hello,</p>
              <p className="truncate">{vendorName}</p>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            {vendorMenu.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-4 p-4 hover:bg-slate-700 transition-colors"
              >
                {item.icon}
                {!collapsed && <span>{item.name}</span>}
              </Link>
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

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="orders" element={<Orders />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="reservations" element={<Reservations />} />
            {/* <Route path="/vendor/settings" element={<Settings />} /> */}
            <Route path="reports" element={<Reports />} />
            <Route path="customers" element={<Customers />} />
            <Route path="settings" element={<Setting />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </>
  );
};

export default VendorDashboard;
