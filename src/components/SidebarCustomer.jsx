import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'

const infomations = [
  {
    name: 'My Profile',
    link: 'profile',
    icon: <FontAwesomeIcon icon="fa-solid fa-file" />
  },
  {
    name: 'Notification',
    link: 'notification',
    icon: <FontAwesomeIcon icon="fa-regular fa-bell" />,
    notification: true
  },
  {
    name: 'Reset password',
    link: '',
    icon: <FontAwesomeIcon icon="fa-solid fa-lock" />
  },
  {
    name: 'Service requiment',
    link: '',
    icon: <FontAwesomeIcon icon="fa-solid fa-wifi" />
  },
  {
    name: 'Contracts',
    link: '',
    icon: <FontAwesomeIcon icon="fa-regular fa-address-book" />
  },
  {
    name: 'Settings',
    link: '',
    icon: <FontAwesomeIcon icon="fa-solid fa-gear" />
  },
  {
    name: 'log out',
    link: '',
    icon: <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" flip="horizontal" />
  },
]
const ListSidebar = ({ name, icon, notification, link }) => {
  const [param, setParam] = useState('')
  const location = useLocation()
  useEffect(() => {
    const getParam = location.pathname.split('/')
    setParam(getParam[getParam.length - 1])
  }, [location])
  return (
    <>
      <div className='flex justify-between items-center'>
        <Link to={link} className={`flex items-center space-x-4 ${param === link ? 'text-[#34D5F9]' : 'text-[#424955]'} hover:text-[#34D5F9] cursor-pointer my-2`}>
          <div className='text-lg'>{icon}</div>
          <span className='text-sm'>{name}</span>
        </Link>
        {notification && (
          <div className='flex items-center justify-center rounded-full w-5 h-5 bg-[#DE3B40]'>
            <span className='text-white text-sm'>6</span>
          </div>
        )}
      </div>
    </>
  )
}
const SidebarCustomer = () => {
  return (
    <>
      <div className='col-span-1 border-r hidden md:block'>
        <div className='flex flex-col items-center space-y-4 my-8'>
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-[#1B13BA] rounded-full flex justify-center items-center'>
              <FontAwesomeIcon icon="fa-regular fa-user" />
            </div>
            <span className='font-bold'>Xuan Huynh</span>
          </div>
          <div>
            {infomations.map(infomation => (
              <ListSidebar name={infomation.name} icon={infomation.icon} notification={infomation.notification} link={infomation.link} key={infomation.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default SidebarCustomer