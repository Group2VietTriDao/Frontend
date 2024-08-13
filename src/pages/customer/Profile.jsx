import { useEffect, useState } from 'react'
import SidebarCustomer from '../../components/SidebarCustomer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const EditProfile = ({ setEdit }) => {
  const handleSubmitProfile = () => {
    setEdit(false)
  }
  return (
    <>
      <div className='p-6 shadow-sm border'>
        <form className='flex flex-col p-2 space-y-6'>
          <div className='grid grid-cols-4'>
            <span className='col-span-1 self-center text-[#6E7787]'>Name</span>
            <input className='col-span-3 rounded-md py-1 px-2 max-w-96 outline-none border-solid text-sm border' type="text" />
          </div>
          <div className='grid grid-cols-4'>
            <span className='col-span-1 self-center text-[#6E7787]'>Email</span>
            <input
              value='hairipi100@gmail.com'
              className='col-span-3 rounded-md py-1 px-2 max-w-96 outline-none border-solid text-sm border' type="text" />
          </div>
          <div className='grid grid-cols-4'>
            <span className='col-span-1 self-center text-[#6E7787]'>Date of birth</span>
            <input className='px-2 col-span-3 max-w-96' type="date" />
          </div>
          <div className='grid grid-cols-4'>
            <span className='col-span-1 self-center text-[#6E7787]'>Address</span>
            <input
              value='1234 Elm Street, Springfield, IL 62704, USA'
              className='col-span-3 rounded-md py-1 px-2 max-w-96 outline-none border-solid text-sm border' type="text" />
          </div>
          <div className='grid grid-cols-4'>
            <span className='col-span-1 self-center text-[#6E7787]'>Gender</span>
            <div className='grid grid-flow-col gap-4'>
              <div className='space-x-2 flex items-center'>
                <input type="radio" id='male' name='gender' value='male' />
                <label htmlFor="male" className='capitalize text-sm '>male</label>
              </div>
              <div className='space-x-2 flex items-center'>
                <input type="radio" id='female' name='gender' value='female' />
                <label htmlFor="female" className='capitalize text-sm '>female</label>
              </div>
              <div className='space-x-2 flex items-center'>
                <input type="radio" id='other' name='gender' value='other' />
                <label htmlFor="other" className='capitalize text-sm '>other</label>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-4'>
            <span className='col-span-1 self-center text-[#6E7787]'>Phone number</span>
            <input
              className='col-span-3 rounded-md py-1 px-2 max-w-96 outline-none border-solid text-sm border' type="text" />
          </div>
          <div className='self-end'>
            <button
              onClick={handleSubmitProfile}
              className='capitalize px-3 py-2 text-white bg-[#379AE6] hover:bg-[#168ee9] rounded-md'>save</button>
          </div>
        </form>
      </div>
    </>
  )
}
const Profile = () => {
  const [edit, setEdit] = useState(false)
  const handleChangeViewProfile = () => [
    setEdit(true)
  ]
  return (
    <>
      <div className='col-span-full md:col-span-3 flex items-center justify-center flex-col my-8'>
        <div className='w-[80%]'>
          <div className='my-4'>
            <div className='flex items-center space-x-2'>
              <div className='w-10 h-10 rounded-full flex justify-center items-center overflow-hidden'>
                <img className='object-cover min-h-full' src="https://www.didongmy.com/vnt_upload/news/05_2024/anh-27-meme-dang-yeu-didongmy.jpg" alt="" />
              </div>
              <div className='flex flex-col'>
                <span className='text-[#323842] font-bold'>Xuan Huynh</span>
                <span className='text-[#6E7787] text-sm'>hairipi100@gmail.com</span>
              </div>
            </div>
          </div>

          {!edit ?
            (
              <div className='p-6 shadow-sm border'>
                <div className='flex justify-end'>
                  <button
                    onClick={handleChangeViewProfile}
                    className='capitalize space-x-2 rounded-md bg-[#FFF3F0] text-[#FC6544] px-3 py-2 flex items-center hover:bg-[#ffe5df]'>
                    <FontAwesomeIcon icon="fa-solid fa-pen" />
                    <span className='font-semibold'>edit</span>
                  </button>
                </div>
                <form className='flex flex-col p-2 space-y-6'>
                  <div className='grid grid-cols-4'>
                    <span className='col-span-1 self-center text-[#6E7787]'>Name</span>
                    <input className='col-span-3 rounded-md py-1 px-2 max-w-96 outline-none border-solid text-sm' disabled type="text" value='hai hhuy hoang' />
                  </div>
                  <div className='grid grid-cols-4'>
                    <span className='col-span-1 self-center text-[#6E7787]'>Email</span>
                    <input
                      value='hairipi100@gmail.com'
                      className='col-span-3 rounded-md py-1 px-2 max-w-96 outline-none border-solid text-sm' disabled type="text" />
                  </div>
                  <div className='grid grid-cols-4'>
                    <span className='col-span-1 self-center text-[#6E7787]'>Date of birth</span>
                    <input className='px-2 col-span-3 max-w-96' type="date" value='2024-04-06' disabled />
                  </div>
                  <div className='grid grid-cols-4'>
                    <span className='col-span-1 self-center text-[#6E7787]'>Address</span>
                    <input
                      value='1234 Elm Street, Springfield, IL 62704, USA'
                      className='col-span-3 rounded-md py-1 px-2 max-w-96 outline-none border-solid text-sm' type="text" disabled />
                  </div>
                  <div className='grid grid-cols-4'>
                    <span className='col-span-1 self-center text-[#6E7787]'>Gender</span>
                    <span className='text-sm px-2'>Male</span>
                  </div>
                  <div className='grid grid-cols-4'>
                    <span className='col-span-1 self-center text-[#6E7787]'>Phone number</span>
                    <input
                      value='(555) 123-4567'
                      className='col-span-3 rounded-md py-1 px-2 max-w-96 outline-none border-solid text-sm' type="text" disabled />
                  </div>
                </form>
              </div>
            ) : (
              <EditProfile setEdit={setEdit} />
            )
          }
        </div>
      </div>
    </>
  )
}
export default Profile