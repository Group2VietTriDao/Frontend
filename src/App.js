import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomerLayout from "./layouts/CustomerLayout";
import StaffLayout from "./layouts/StaffLayout";
import GuardLayout from "./layouts/GuardLayout";
import Login from "./pages/customer/Login";
import SignUp from "./pages/customer/SignUp";
import ForgotPassword from "./pages/customer/ForgotPassword";

// customer
import Home from "./pages/customer/Home";
import Profile from "./pages/customer/Profile";
import ResetPassword from "./pages/customer/ResetPassword";
// import ServiceRequirement from "./pages/customer/ServiceRequirement";
import NewServiceRequirement from "./pages/customer/NewServiceRequirement";
import ViewAndEditServiceRequirement from "./pages/customer/ViewAndEditServiceRequirement";
import Contract from "./pages/customer/Contracts";
import ViewContract from "./pages/customer/ViewContract";
import ViewTeamContract from "./pages/customer/ViewTeamContract";
// guard
import HomeGuard from "./pages/guard/Home";

// staff
import Dashboard from "./pages/staff/Dashboard";
import StaffContract from "./pages/staff/Contract";
import ContractAssign from "./pages/staff/ContractAssign";
import ManageContracts from "./pages/staff/ManageContracts";
import ManageServiceRequests from "./pages/staff/ManageServiceRequests";
import NotFound from "./components/NotFound"; // Thêm component 404

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer */}
        <Route path="/customer" element={<CustomerLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="newServiceRequirement"
            element={<NewServiceRequirement />}
          />
          <Route
            path="viewAndEditServiceRequirement"
            element={<ViewAndEditServiceRequirement />}
          />
          <Route path="reset-password" element={<ResetPassword />} />
          {/* <Route path="serviceRequirement" element={<ServiceRequirement />} /> */}
        </Route>

        {/* Guard */}
        <Route path="/guard" element={<GuardLayout />}>
          <Route path="home" element={<HomeGuard />} />
        </Route>

        {/* Staff */}
        <Route path="/staff" element={<StaffLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* Thêm các route khác cho staff ở đây */}
        </Route>

        {/* Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
