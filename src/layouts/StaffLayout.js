import React, { useState } from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import styles from "./StaffLayout.module.css";

const StaffLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <a href="#">
              <img className={styles.logoImg} src="/logo.png" alt="Logo" />
              BODYGUARD
            </a>
          </div>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
            <a href="#">Dashboard</a>
            <a href="#">Employees Management</a>
            <a href="#">Service Requests</a>
            <a href="#">Contracts</a>
            <a href="#">Assign Security Guards</a>
            <a href="#">Attendance</a>
            <a href="#">
              More
              <i className={`${styles.navArrowDown} ti-angle-down`}></i>
            </a>
          </nav>
          <div className={styles.iconsBTN}>
            <a href="#">
              <i className={`${styles.tiSearch} ti-search`}></i>
            </a>
            <a href="#">
              <i className={`${styles.tiBell} ti-bell`}></i>
            </a>
            <a href="#">
              <i className={`${styles.tiSettings} ti-settings`}></i>
            </a>
          </div>
          <div className={styles.profile}>
            <a href="">
              <img
                className={styles.profileImg}
                src="/avatar111.jpg"
                alt="Profile"
              />
            </a>
          </div>
        </div>

        <button className={styles.menuButton} onClick={toggleMenu}>
          &#9776;
        </button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default StaffLayout;
