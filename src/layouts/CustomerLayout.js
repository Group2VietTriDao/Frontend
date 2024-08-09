import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./CustomerLayout.css"; // Import file CSS cho layout

const CustomerLayout = () => {
  const [isSearchBoxVisible, setSearchBoxVisible] = useState(false);
  const [isNotificationsVisible, setNotificationsVisible] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchBoxVisible(!isSearchBoxVisible);
    setNotificationsVisible(false); // Đóng hộp thông báo nếu đang mở
    setProfileVisible(false);
  };

  const handleNotificationClick = () => {
    setNotificationsVisible(!isNotificationsVisible);
    setSearchBoxVisible(false); // Đóng hộp tìm kiếm nếu đang mở
    setProfileVisible(false);
  };

  const handleProfileClick = () => {
    setProfileVisible(!isProfileVisible);
    setSearchBoxVisible(false);
    setNotificationsVisible(false);
  };

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
          <li>
            <Link to="#">HOME</Link>
          </li>
          <li>
            <Link to="#">SERVICES</Link>
            <ul className="subnav">
              <li>
                <a href="">Commercial Security</a>
              </li>
              <li>
                <a href="">Event Security</a>
              </li>
              <li>
                <a href="">Aviation Security</a>
              </li>
              <li>
                <a href="">Transportation Security</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">RESOURCES</Link>
            <ul className="subnav">
              <li>
                <a href="">All Resources</a>
              </li>
              <li>
                <a href="">eBooks & White Papers</a>
              </li>
              <li>
                <a href="">On - Demand Webianars</a>
              </li>
              <li>
                <a href="">Safety & Security Insights</a>
              </li>
              <li>
                <a href="">Tools & Templates</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">OFFICES</Link>
          </li>
          <li>
            <Link to="#">ABOUT US</Link>
          </li>
          <li>
            <Link to="#">CAREERS</Link>
          </li>
        </nav>
        <div className="profile">
          <div className="iconsBTN">
            <Link to="#" onClick={handleSearchClick}>
              <i className="ti-search"></i>
              {/* Hộp tìm kiếm */}
              {isSearchBoxVisible && (
                <div className="search-box">
                  <input type="text" placeholder="Search..." />
                  <button>Search</button>
                </div>
              )}
            </Link>

            <Link to="#" onClick={handleNotificationClick}>
              <i className="ti-bell"></i>
              {/* Danh sách thông báo */}
              {isNotificationsVisible && (
                <div className="notifications-dropdown">
                  <ul>
                    <li>Notification 1</li>
                    <li>Notification 2</li>
                    <li>Notification 3</li>
                    {/* Thêm các thông báo khác */}
                  </ul>
                </div>
              )}
            </Link>
          </div>
          <div>
            <Link to="#" onClick={handleProfileClick}>
              <img src="/avatar111.jpg" alt="Profile" />
              {/* Trang cá nhân */}
              {isProfileVisible && (
                <div className="Profile-dropdown">
                  <ul>
                    <li>
                      <i class="fa-solid fa-user"></i>
                      Profile
                    </li>
                    <li>
                      <i class="fa-regular fa-square-plus"></i>
                      New Service Requiment
                    </li>
                    <li>
                      <i class="fa-solid fa-clock-rotate-left"></i>
                      History
                    </li>
                    <li>
                      <i class="fa-solid fa-right-from-bracket"></i>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
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
