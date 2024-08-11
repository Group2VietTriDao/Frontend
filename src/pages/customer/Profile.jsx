import { useEffect } from 'react'
import SidebarCustomer from '../../components/SidebarCustomer'

const Profile = () => {
  return (
    <>
      <div className='col-span-3 flex justify-center items-center'>
        <div className='border shadow-sm w-[80%]'>
          <form className='flex flex-col p-2 space-y-6'>
            <div className='grid grid-cols-4'>
              <span className='col-span-1 self-center text-[#6E7787]'>Name</span>
              <input className='col-span-3 rounded-md py-1 px-2 w-96 outline-none border-solid border text-sm' type="text" />
            </div>
            <div className='grid grid-cols-4'>
              <span className='col-span-1 self-center text-[#6E7787]'>Email</span>
              <input className='col-span-3 rounded-md py-1 px-2 w-96 outline-none border-solid border text-sm' type="text" />
            </div>
            <div className='grid grid-cols-4'>
              <span className='col-span-1 self-center text-[#6E7787]'>Date of birth</span>
              <input className='' type="date" />
            </div>
            <div className='grid grid-cols-4'>
              <span className='col-span-1 self-center text-[#6E7787]'>Address</span>
              <input className='col-span-3 rounded-md py-1 px-2 w-96 outline-none border-solid border text-sm' type="text" />
            </div>
            <div className='grid grid-cols-4'>
              <span className='col-span-1 self-center text-[#6E7787]'>Gender</span>
              <input className='col-span-3 rounded-md py-1 px-2 w-96 outline-none border-solid border text-sm' type="text" />
            </div>
            <div className='grid grid-cols-4'>
              <span className='col-span-1 self-center text-[#6E7787]'>Phone number</span>
              <input className='col-span-3 rounded-md py-1 px-2 w-96 outline-none border-solid border text-sm' type="text" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Profile