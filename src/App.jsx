import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Restaurant from "./components/common/Restaurant";
import Contact from "./components/common/Contact";
import NotFound from "./components/NotFound";
import ForgotPassword from "./components/forms/ForogtPassword";
import Customer from "./components/signupPages/Customer";
import Vendor from "./components/signupPages/Vendor";
import Courier from "./components/signupPages/Courier";
import CustomerLogin from "./components/loginPages/Customer";
import VendorLogin from "./components/loginPages/Vendor";
import CourierLogin from "./components/loginPages/Courier";
import ResetPassword from "./components/forms/ResetPassword";
import CustomerDashboard from "./components/Layouts/customer/CustomerDashboard";
import CourierDashboard from "./components/Layouts/courier/CourierDashboard";
import VendorDashboard from "./components/Layouts/vendor/VendorDashboard";
import Profile from "./components/Layouts/customer/Profile";
import DashboardHome from "./components/Layouts/customer/DashboardHome";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/contact" element={<Contact />} />

        {/* signup pages */}
        <Route path="/signup/customer" element={<Customer />} />
        <Route path="/signup/vendor" element={<Vendor />} />
        <Route path="/signup/courier" element={<Courier />} />
        {/* signin pages */}
        <Route path="/login/customer" element={<CustomerLogin />} />
        <Route path="/login/courier" element={<CourierLogin />} />
        <Route path="/login/vendor" element={<VendorLogin />} />
        {/* forgot password */}
        <Route
          path="/forgot-password/customer"
          element={<ForgotPassword userType="customer" />}
        />
        <Route
          path="/forgot-password/vendor"
          element={<ForgotPassword userType="vendor" />}
        />
        <Route
          path="/forgot-password/courier"
          element={<ForgotPassword userType="courier" />}
        />

        {/* reset password */}

        <Route
          path="/reset-password/customer/:token"
          element={<ResetPassword userType="customer" />}
        />
        <Route
          path="/reset-password/vendor/:token"
          element={<ResetPassword userType="vendor" />}
        />
        <Route
          path="/reset-password/courier/:token"
          element={<ResetPassword userType="courier" />}
        />

{/* dashboard */}

 {/* CUSTOMER DASHBOARD WITH NESTED ROUTES */}
  <Route path="/dashboard/customer/*" element={<CustomerDashboard />}>
    <Route index element={<DashboardHome />} />
    <Route path="profile" element={<Profile />} />
    <Route path="reservations" element={<div>Reservations Page</div>} />
    <Route path="payments" element={<div>Payment Methods Page</div>} />
  </Route>

        <Route path="/dashboard/courier" element={<CourierDashboard />} />
        {/* protect sellerdashboard route with privateroute */}

        <Route path="dashboard/vendor/*" element={<VendorDashboard />} />
        {/* Use element for 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
