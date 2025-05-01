import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import SellerDashboard from "./components/SellerDashboard";

import NotFound from "./components/NotFound";
import UserDashboard from "./components/Userdashboard";
import Privateroute from "./components/Privateroute";
import ForgotPassword from "./components/ForogtPassword";
import Customer from "./components/signupPages/Customer";
import Vendor from "./components/signupPages/Vendor";
import Courier from "./components/signupPages/Courier";
import CustomerLogin from "./components/loginPages/Customer";
import VendorLogin from "./components/loginPages/Vendor";
import CourierLogin from "./components/loginPages/Courier";
import ResetPassword from "./components/ResetPassword";
import CourierDashboard from "./components/Layouts/courier/CourierDashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />

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

        <Route path="/dashboard/courier" element={<CourierDashboard />} />
        {/* protect sellerdashboard route with privateroute */}

        <Route
          path="/sellerdashboard"
          element={
            <Privateroute>
              {" "}
              <SellerDashboard />{" "}
            </Privateroute>
          }
        />

        <Route path="/userdashboard" element={<UserDashboard />} />
        {/* Use element for 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
