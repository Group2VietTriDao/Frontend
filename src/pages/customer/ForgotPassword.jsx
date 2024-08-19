import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ForgotPassword = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-[90%] md:w-[30%] h-auto bg-[#DEE1E6] rounded-xl p-6'>
          <div className='flex flex-col items-center space-y-4'>
            <h1 className='uppercase text-2xl text-[#130D7F] font-popins font-bold'>forgot password</h1>
            <form action="" className='space-y-4 flex justify-center flex-col items-center'>
              <div className='flex flex-col space-y-1'>
                <label htmlFor="username" className='text-sm text-[#424955] font-semibold capitalize'>Email</label>
                <div className='flex items-center w-full bg-white rounded-md px-3 py-2 space-x-3'>
                  <FontAwesomeIcon icon="fa-regular fa-envelope" />
                  <input className='w-full outline-none text-sm' type="text" id='username' name='username' placeholder='Enter Your user name' autoComplete />
                </div>
              </div>
              <button className='bg-[#379AE6] flex justify-center items-center py-2 px-2 rounded-md text-white font-semibold hover:bg-[#1e88da]'>resend password</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default ForgotPassword