import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SidebarCustomer from "../components/SidebarCustomer";
import clsx from "clsx";
import style from "./CustomerLayout.module.css";

// Separate components to compact layout and avoid re-render unnecessary
const HeaderLayout = () => {

}
const FooterLayout = () => {

}
const CustomerLayout = () => {
  const [isSearchBoxVisible, setSearchBoxVisible] = useState(false);
  const [isNotificationsVisible, setNotificationsVisible] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchBoxVisible(!isSearchBoxVisible);
    setNotificationsVisible(false);
    setProfileVisible(false);
  };

  const handleNotificationClick = () => {
    setNotificationsVisible(!isNotificationsVisible);
    setSearchBoxVisible(false);
    setProfileVisible(false);
  };

  const handleProfileClick = () => {
    setProfileVisible(!isProfileVisible);
    setSearchBoxVisible(false);
    setNotificationsVisible(false);
  };

  return (
    <div className={style.customerLayout}>
      <header className={style.header}>
        <div className={clsx(style.logo)}>
          <Link to="/" className={style.logoLink}>
            <img className={style.logoImg} src="/logo.png" alt="Logo" />
            BODYGUARD
          </Link>
        </div>
        <nav className={style.navLinks}>
          <li className={style.navLinkItem}>
            <Link to="#" className={style.navLink}>
              HOME
            </Link>
          </li>
          <li className={style.navLinkItem}>
            <Link to="#" className={clsx(style.navLink)}>
              SERVICES
            </Link>
            <ul className={style.subnav}>
              <li>
                <a href="#" className={style.subnavLink}>
                  Commercial Security
                </a>
              </li>
              <li>
                <a href="#" className={style.subnavLink}>
                  Event Security
                </a>
              </li>
              <li>
                <a href="#" className={style.subnavLink}>
                  Aviation Security
                </a>
              </li>
              <li>
                <a href="#" className={style.subnavLink}>
                  Transportation Security
                </a>
              </li>
            </ul>
          </li>
          <li className={style.navLinkItem}>
            <Link to="#" className={style.navLink}>
              RESOURCES
            </Link>
            <ul className={style.subnav}>
              <li>
                <a href="#" className={style.subnavLink}>
                  All Resources
                </a>
              </li>
              <li>
                <a href="#" className={style.subnavLink}>
                  eBooks & White Papers
                </a>
              </li>
              <li>
                <a href="#" className={style.subnavLink}>
                  On - Demand Webinars
                </a>
              </li>
              <li>
                <a href="#" className={style.subnavLink}>
                  Safety & Security Insights
                </a>
              </li>
              <li>
                <a href="#" className={style.subnavLink}>
                  Tools & Templates
                </a>
              </li>
            </ul>
          </li>
          <li className={style.navLinkItem}>
            <Link to="#" className={style.navLink}>
              OFFICES
            </Link>
          </li>
          <li className={style.navLinkItem}>
            <Link to="#" className={style.navLink}>
              ABOUT US
            </Link>
          </li>
          <li className={style.navLinkItem}>
            <Link to="#" className={style.navLink}>
              CAREERS
            </Link>
          </li>
        </nav>
        <div className={style.profile}>
          <div className={style.iconsBTN}>
            <Link
              to="#"
              onClick={handleSearchClick}
              className={style.iconsLink}
            >
              <i className="ti-search"></i>
              {/* Search box */}
              {isSearchBoxVisible && (
                <div className={style.searchBox}>
                  <input
                    type="text"
                    placeholder="Search..."
                    className={style.searchInput}
                  />
                  <button className={style.searchButton}>Search</button>
                </div>
              )}
            </Link>

            <Link
              to="#"
              onClick={handleNotificationClick}
              className={style.iconsLink}
            >
              <i className="ti-bell"></i>
              {/* Notification List */}
              {isNotificationsVisible && (
                <div className={style.notificationsDropdown}>
                  <ul>
                    <li className={style.notificationItem}>Notification 1</li>
                    <li className={style.notificationItem}>Notification 2</li>
                    <li className={style.notificationItem}>Notification 3</li>
                  </ul>
                </div>
              )}
            </Link>
          </div>
          <div>
            <Link
              to="#"
              onClick={handleProfileClick}
              className={style.profileLink}
            >
              <img
                src="/avatar111.jpg"
                alt="Profile"
                className={style.profileImage}
              />
              {/* Profile Icons */}
              {isProfileVisible && (
                <div className={style.profileDropdown}>
                  <ul>
                    <li className={style.profileDropdownItem}>
                      <i className="fa-solid fa-user"></i>
                      Profile
                    </li>
                    <li className={style.profileDropdownItem}>
                      <i className="fa-regular fa-square-plus"></i>
                      New Service Requirement
                    </li>
                    <li className={style.profileDropdownItem}>
                      <i className="fa-solid fa-clock-rotate-left"></i>
                      History
                    </li>
                    <li className={style.profileDropdownItem}>
                      <i className="fa-solid fa-right-from-bracket"></i>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </Link>
          </div>
        </div>
      </header>
      <main className="grid grid-cols-4 my-10">
        <SidebarCustomer />
        <Outlet />
      </main>
      <footer className={style.footer}>
        <div className={style.footerContent}>
          <div className={style.footerSection}>
            <div className={style.logo}>
              <Link to="#" className={style.logoLink}>
                <img className={style.logoImg} src="/logo.png" alt="Logo" />
                BODYGUARD
              </Link>
            </div>
            <p>Professional protection, every step of the way</p>
          </div>
          <div className={style.footerSection}>
            <h3 className={style.footerTitle}>Need Help?</h3>
            <ul className={style.footerList}>
              <li className={style.footerListItem}>
                <Link to="#" className={style.footerLink}>
                  Advanced Search
                </Link>
              </li>
              <li className={style.footerListItem}>
                <Link to="#" className={style.footerLink}>
                  Pricing
                </Link>
              </li>
              <li className={style.footerListItem}>
                <Link to="#" className={style.footerLink}>
                  VPAT (PDF)
                </Link>
              </li>
              <li className={style.footerListItem}>
                <Link to="#" className={style.footerLink}>
                  Financing
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.footerSection}>
            <h3 className={style.footerTitle}>Company</h3>
            <ul className={style.footerList}>
              <li className={style.footerListItem}>
                <Link to="#" className={style.footerLink}>
                  About us
                </Link>
              </li>
              <li className={style.footerListItem}>
                <Link to="#" className={style.footerLink}>
                  Contact us
                </Link>
              </li>
              <li className={style.footerListItem}>
                <Link to="#" className={style.footerLink}>
                  FAQs
                </Link>
              </li>
              <li className={style.footerListItem}>
                <Link to="#" className={style.footerLink}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.footerSection}>
            <h3 className={style.footerTitle}>Follow us</h3>
            <ul className={style.socialLinks}>
              <li className={style.socialLinkItem}>
                <Link to="#" className={style.socialLink}>
                  <i className="ti-twitter"></i>
                </Link>
              </li>
              <li className={style.socialLinkItem}>
                <Link to="#" className={style.socialLink}>
                  <i className="ti-facebook"></i>
                </Link>
              </li>
              <li className={style.socialLinkItem}>
                <Link to="#" className={style.socialLink}>
                  <i className="ti-linkedin"></i>
                </Link>
              </li>
              <li className={style.socialLinkItem}>
                <Link to="#" className={style.socialLink}>
                  <i className="ti-youtube"></i>
                </Link>
              </li>
            </ul>
            <p className={style.footerLocation}>Alaska, United States</p>
            <p className={style.footerEmail}>bodyguard@email.com</p>
            <p className={style.footerPhone}>(205) 387-2122</p>
          </div>
        </div>
        <div className={style.footerBottom}>
          <p className={style.footerCopy}>
            &copy; 2022 Brand, Inc. - Privacy · Terms · Sitemap
          </p>
          <div className={style.languageSelector}>
            <button className={style.languageButton}>
              English <i className="ti-angle-down"></i>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomerLayout;
