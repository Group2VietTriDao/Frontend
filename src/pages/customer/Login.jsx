import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { postData } from '../../services/apiService'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')

  const usernameRef = useRef()
  const passwordRef = useRef()
  const handleSubmit = () => {
    postData('/user')
  }
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-[90%] md:w-[50%] h-auto bg-[#DEE1E6] rounded-xl p-6'>
          <div className='flex flex-col items-center space-y-4'>
            <h1 className='uppercase text-2xl text-[#130D7F] font-popins font-bold'>BodyGruard Welcome</h1>
            <form action="" className='flex flex-col space-y-4'>
              <div className='flex flex-col space-y-1'>
                <label htmlFor="username" className='text-sm text-[#424955] font-semibold capitalize'>User name</label>
                <div className='flex items-center w-full bg-white rounded-md px-3 py-2 space-x-3'>
                  <FontAwesomeIcon icon="fa-regular fa-user" />
                  <input ref={usernameRef} className='w-full outline-none text-sm' type="text" id='username' name='username' placeholder='Enter Your user name' autoComplete />
                </div>
              </div>

              <div className='flex flex-col space-y-1'>
                <label htmlFor="password" className='text-sm text-[#424955] font-semibold capitalize'>Password</label>
                <div className='flex items-center w-full bg-white rounded-md px-3 py-2 space-x-3'>
                  <FontAwesomeIcon icon="fa-solid fa-lock" />
                  <input
                    onChange={(e) => setPasswordValue(e.target.value)}
                    value={passwordValue}
                    type={!showPassword ? 'password' : 'text'}
                    className='w-full outline-none text-sm' id='password' name='password' placeholder='Enter Your user name' autoComplete
                  />
                  {passwordValue && (
                    <FontAwesomeIcon
                      onClick={() => setShowPassword(password => !password)}
                      icon={`fa-solid fa-eye${!showPassword ? '-slash' : ''}`} className='w-8 cursor-pointer transition-all' />
                  )}
                </div>
              </div>

              <div className='flex justify-between'>
                <div className='flex space-x-2'>
                  <input className='' type="checkbox" name="remember-password" id="remember-password" autoComplete />
                  <label htmlFor="remember-password" className='capitalize text-sm'>remember password</label>
                </div>
                <Link to='/forgot-password' className='capitalize text-sm text-[#379AE6]'>forgot password ?</Link>
              </div>

              <button
                onClick={handleSubmit}
                className='bg-[#379AE6] flex justify-center items-center py-2 rounded-md text-white font-semibold hover:bg-[#1e88da]'>Login</button>
            </form>
            <span className='uppercase text-gray-500 font-semibold'>or</span>
            <div className='flex space-x-3'>
              <div className='cursor-pointer w-10 h-10 rounded-full bg-white flex justify-center items-center hover:bg-gray-200 text-red-500'>
                <FontAwesomeIcon icon="fa-brands fa-google" />
              </div>
              <div className='cursor-pointer w-10 h-10 rounded-full bg-white flex justify-center items-center hover:bg-gray-200 text-blue-600'>
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
              </div>
              <div className='cursor-pointer w-10 h-10 rounded-full bg-white flex justify-center items-center hover:bg-gray-200 text-gray-500'>
                <FontAwesomeIcon icon="fa-brands fa-apple" />
              </div>
            </div>
            <span className='text-sm'>Not Registered ? <Link to='signup' className='text-[#379AE6] capitalize font-semibold'>Sign Up</Link></span>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login