import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomerLayout from "./layouts/customer/CustomerLayout";
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
import ProtectedCustomerLayout from './layouts/customer/ProtectedCustomerLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer */}
        <Route path="/customer" element={<CustomerLayout />}>
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

        <Route path='' element={<ProtectedCustomerLayout />}>
          <Route path="" element={<Home />} />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Guard */}
        <Route path="/guard" element={<GuardLayout />}>
          <Route path="home" element={<HomeGuard />} />
        </Route>

        {/* Staff */}
        <Route path="/staff" element={<StaffLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="manageServiceRequests"
            element={<ManageServiceRequests />}
          />
          {/* Thêm các route khác cho staff ở đây */}
        </Route>

        {/* Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
