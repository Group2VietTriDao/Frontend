import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./CustomerLayout.css"; // Import file CSS cho layout

const CustomerLayout = () => {
  return (
    <div className="customer-layout">
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src="/logo.png" alt="Logo" />
            BODYGUARD
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/home">HOME</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/resources">RESOURCES</Link>
          <Link to="/offices">OFFICES</Link>
          <Link to="/about-us">ABOUT US</Link>
          <Link to="/careers">CAREERS</Link>
        </nav>
        <div className="profile">
          <div className="iconsBTN">
            <Link to="#">
              <i className="ti-search"></i>
            </Link>
            <Link to="#">
              <i className="ti-bell"></i>
            </Link>
          </div>
          <div>
            <Link to="#">
              <img src="/avatar111.jpg" alt="Profile" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <Link to="#">
                <img className="logo-img" src="/logo.png" alt="Logo" />
                BODYGUARD
              </Link>
            </div>
            <p>Professional protection, every step of the way</p>
          </div>
          <div className="footer-section">
            <h3>Need Help ?</h3>
            <ul>
              <li>
                <Link to="#">Advanced Search</Link>
              </li>
              <li>
                <Link to="#">Pricing</Link>
              </li>
              <li>
                <Link to="#">VPAT (PDF)</Link>
              </li>
              <li>
                <Link to="#">Financing</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="#">About us</Link>
              </li>
              <li>
                <Link to="#">Contact us</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow us</h3>
            <ul className="social-links">
              <li>
                <Link to="#">
                  <i className="ti-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="ti-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="ti-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="ti-youtube"></i>
                </Link>
              </li>
            </ul>
            <p>Alaska, United States</p>
            <p>bodyguard@email.com</p>
            <p>(205) 387-2122</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2022 Brand, Inc. - Privacy · Terms · Sitemap</p>
          <div className="language-selector">
            <button>
              English <i className="ti-angle-down"></i>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomerLayout;
