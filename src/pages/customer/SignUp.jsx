import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PasswordField } from './ResetPassword'

const Signup = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-[90%] md:w-[50%] h-auto bg-[#DEE1E6] rounded-xl p-6'>
          <div className='flex flex-col items-center space-y-4'>
            <h1 className='uppercase text-2xl text-[#130D7F] font-popins font-bold'>BodyGruard Welcome</h1>
            <form action="" className='flex flex-col space-y-4 min-w-96'>
              <div className='flex flex-col space-y-1'>
                <label htmlFor="username" className='text-sm text-[#424955] font-semibold capitalize'>User name</label>
                <div className='flex items-center w-full bg-white rounded-md px-3 py-2 space-x-3'>
                  <FontAwesomeIcon icon="fa-regular fa-user" />
                  <input className='w-full outline-none text-sm' type="text" id='username' name='username' placeholder='Enter Your user name' autoComplete />
                </div>
              </div>
              <div className='flex flex-col space-y-1'>
                <label htmlFor="email" className='text-sm text-[#424955] font-semibold capitalize'>Email</label>
                <div className='flex items-center w-full bg-white rounded-md px-3 py-2 space-x-3'>
                  <FontAwesomeIcon icon="fa-regular fa-user" />
                  <input className='w-full outline-none text-sm' type="email" id='email' name='username' placeholder='Enter Your Email' autoComplete />
                </div>
              </div>

              <div className='flex flex-col space-y-1'>
                <label htmlFor="password" className='text-sm text-[#424955] font-semibold capitalize'>Password</label>
                <PasswordField
                  className='bg-white rounded-md px-3 py-1 space-x-3 border-none'
                  id='password' name='password' placeholder='Enter Your Password' >
                  <FontAwesomeIcon icon="fa-solid fa-lock" />
                </PasswordField>
              </div>
              <div className='flex flex-col space-y-1'>
                <label htmlFor="password" className='text-sm text-[#424955] font-semibold capitalize'>Confirm Password</label>
                <PasswordField
                  className='bg-white rounded-md px-3 py-1 space-x-3 border-none'
                  id='confirmPassword' name='confirmPassword' placeholder='Enter Your Password' >
                  <FontAwesomeIcon icon="fa-solid fa-lock" />
                </PasswordField>
              </div>
              <div className='flex flex-col space-y-1 w-full'>
                <label htmlFor="otp" className='text-sm text-[#424955] font-semibold capitalize'>OTP</label>
                <div className='flex justify-between space-x-2'>
                  <div className='flex items-center w-auto bg-white rounded-md px-3 py-2 space-x-3'>
                    <input className='w-full outline-none text-sm' type="text" id='otp' name='otp' placeholder='Enter OTP' autoComplete />
                  </div>
                  <button type='button' className='px-3 py-2 rounded-md bg-[#34D5F9] flex space-x-2 justify-center items-center text-[#035163] hover:bg-[#21c6eb]'>
                    <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" />
                    <div className='capitalize block'>send OTP</div>
                  </button>
                </div>
              </div>
              <button className='bg-[#379AE6] flex justify-center items-center py-2 rounded-md text-white font-semibold hover:bg-[#1e88da]'>Signup</button>
            </form>
            <span className='text-sm'>Have an account ? <Link to='/login' className='text-[#379AE6] capitalize font-semibold'>Login</Link></span>
          </div>
        </div>
      </div>
    </>
  )
}
export default Signup