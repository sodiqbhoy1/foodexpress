import {
  ReceiptText,
  CalendarDays,
  CreditCard,
  User,
  HelpCircle,
  LogOut,
  Menu as MenuIcon,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const customerMenu = [
  { name: "Dashboard", icon: <ReceiptText />, path: "/dashboard/customer" },
  {
    name: "My Reservations",
    icon: <CalendarDays />,
    path: "/dashboard/customer/reservations",
  },
  {
    name: "Payment Methods",
    icon: <CreditCard />,
    path: "/dashboard/customer/payments",
  },
  { name: "Profile", icon: <User />, path: "/dashboard/customer/profile" },
  { name: "Support", icon: <HelpCircle />, path: "#" },
];

export default function Sidebar({ user }) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login/customer");
  };

  return (
    <div
      className={`bg-[#1E293B] text-white transition-all duration-300 flex flex-col ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 border-b border-slate-600 flex items-center justify-between">
        {!collapsed && <span className="text-lg font-bold">MyRestaurant</span>}
        <button onClick={() => setCollapsed(!collapsed)}>
          <MenuIcon size={20} />
        </button>
      </div>

      {!collapsed && user && (
        <div className="px-4 py-3 border-b border-slate-600 text-sm text-gray-200">
          <p className="font-medium">Welcome,</p>
          <p className="truncate">{user.name || "Customer"}</p>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto">
        {customerMenu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 hover:bg-slate-700 transition-colors ${
                isActive ? "bg-slate-700" : ""
              }`
            }
            end
          >
            {item.icon}
            {!collapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

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
  );
}
