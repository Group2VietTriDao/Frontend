import { Link, Outlet } from 'react-router-dom'
import clsx from "clsx";
import style from "./CustomerLayout.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
  return (
    <>
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
        <div className='text-white flex items-center space-x-6'>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='cursor-pointer' />
          <div className='flex space-x-4 items-center text-sm'>
            <Link to='login'>
              <button className='text-[#379AE6] hover:text-white'>Login</button>
            </Link>
            <Link to='signup' className='rounded-md p-2 bg-[#379AE6] hover:bg-[#1d8fe7] flex space-x-2 items-center'>
              <button className=''>Sign up</button>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
const ProtectedCustomerLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
export default ProtectedCustomerLayout