import React from "react";
import { Outlet, Link } from "react-router-dom";

const StaffLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/staff/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/staff/reports">Reports</Link>
            </li>
            <li>
              <Link to="/staff/tasks">Tasks</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Staff Footer</p>
      </footer>
    </div>
  );
};

export default StaffLayout;
