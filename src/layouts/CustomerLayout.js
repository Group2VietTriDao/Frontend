import React from "react";
import { Outlet, Link } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/customer/Home">Home</Link>
            </li>
            <li>
              <Link to="/customer/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/customer/orders">Orders</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Customer Footer</p>
      </footer>
    </div>
  );
};

export default CustomerLayout;
