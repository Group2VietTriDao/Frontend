import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const InputField = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [value, setValue] = useState('')
  return (
    <>
      <div className='border-solid border border-[#BCC1CA] rounded-md max-w-96 overflow-hidden flex justify-between items-center px-2'>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={!showPassword ? 'password' : 'text'}
          id='password' className='col-span-3 outline-none text-sm w-full py-1' placeholder='Enter Your Password' autoComplete='current-password' {...props} />
        {value && (
          <div className='w-8'>
            <FontAwesomeIcon
              onClick={() => setShowPassword(password => !password)}
              icon={`fa-solid fa-eye${!showPassword ? '-slash' : ''}`} className='cursor-pointer transition-all w-full' />
          </div>
        )}
      </div>
    </>
  )
}
const ResetPassword = () => {
  const handleResetPassword = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className='col-span-full md:col-span-3 flex items-center flex-col my-8'>
        <div className='w-[80%] md:w-[60%]'>
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
          <div className='p-6 shadow-sm border'>
            <form hidden className='flex flex-col space-y-5'>
              {/* fix warning: [DOM] Password forms should have (optionally hidden) username fields for accessibility */}
              <input hidden type="text" autoComplete="username" disabled name='username' />
              {/* ------------- */}
              <div className='flex flex-col space-y-1'>
                <label htmlFor="password" className='capitalize text-sm font-semibold text-[#424955]'>password</label>
                <InputField name='password' />
              </div>
              <div className='flex flex-col space-y-1'>
                <label htmlFor="newPassword" className='capitalize text-sm font-semibold text-[#424955]'>new password</label>
                <InputField id='newPassword' placeholder='Enter Your New Password' name='newPassword' />
              </div>
              <div className='flex flex-col space-y-1'>
                <label htmlFor="confirmPassword" className='capitalize text-sm font-semibold text-[#424955]'>confirm new password</label>
                <InputField id='confirmPassword' placeholder='Type New Password Again' name='confirmNewPassword' />
              </div>

              <div className='self-end'>
                <button
                  onClick={handleResetPassword}
                  className='capitalize p-2 text-white bg-[#379AE6] hover:bg-[#168ee9] rounded-md'
                >change</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default ResetPassword