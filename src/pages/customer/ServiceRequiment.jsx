import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NewServiceRequirement from './NewServiceRequirement'
import ViewAndEditServiceRequirement from './ViewAndEditServiceRequirement'

const ServiceRequiment = () => {
  const [showNewServive, setShowNewService] = useState(false)
  const [showServive, setShowService] = useState(false)
  return (
    <>
      <div className='col-span-full md:col-span-3 flex items-center flex-col min-h-screen my-4'>
        <div className='w-[90%] space-y-10'>
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

          <div className='flex flex-col w-full space-y-2'>
            <div className='flex justify-between'>
              <button
                onClick={() => setShowNewService(true)}
                className='text-red-600 space-x-4 p-2 rounded-md bg-[#FFF3F0] text-sm'>
                <FontAwesomeIcon icon="fa-solid fa-pencil" />
                <span className='capitalize'>new service requiment</span>
              </button>
              <span className='text-xs cursor-pointer text-[#9095A0] hover:text-[#77a0f8] transition-all'>clear filter</span>
            </div>
            <nav className='flex justify-between'>
              <div className='max-w-md'>
                <div className="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-[#efefef] overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-[#efefef]"
                    type="text"
                    id="search"
                    placeholder="Search something.." />
                </div>
              </div>
              <div className='flex space-x-4'>
                <div className="max-w-sm mx-auto">
                  <select id="countries" className="bg-gray-50 outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-400">
                    <option className='capitalize' selected>all status</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div className="max-w-sm mx-auto">
                  <select id="countries" className="bg-gray-50 outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-400">
                    <option className='capitalize' selected>all categories</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
            </nav>

            <div className=''>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg outline-none">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 md:table-fixed">
                  <thead className="text-xs uppercase bg-gray-200 text-gray-400 text-center">
                    <tr>
                      <th scope="col" className="px-4 py-2">
                        #
                      </th>
                      <th scope="col" className="px-4 py-2">
                        ID
                      </th>
                      <th scope="col" className="px-4 py-2">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-2">
                        Number of Guards
                      </th>
                      <th scope="col" className="px-4 py-2">
                        CATEGORIES
                      </th>
                      <th scope="col" className="px-4 py-2">
                        Price
                      </th>
                      <th scope="col" className="px-4 py-2">
                        Start Date
                      </th>
                      <th scope="col" className="px-4 py-2">
                        End Date
                      </th>
                      <th scope="col" className="px-4 py-2">
                        Action
                      </th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50 border-b border-gray-100 text-center">
                      <td className="px-4 py-4">
                        <input type="checkbox" name="checkbox" id="" autoComplete='' />
                      </td>
                      <td className="px-4 py-4">
                        1
                      </td>
                      <td className="px-4 py-4">
                        Incomplete
                      </td>
                      <td className="px-4 py-4">
                        75
                      </td>
                      <td className="px-4 py-4">
                        Personal Protection
                      </td>
                      <td className="px-4 py-4">
                        $804
                      </td>
                      <td className="px-4 py-4">
                        20/03/2024
                      </td>
                      <td className="px-4 py-4">
                        20/03/2024
                      </td>
                      <td className="px-4 py-4">
                        <Link
                          onClick={() => setShowService(true)}
                          to="" className="px-3 py-2 text-white bg-blue-500 hover:bg-[#1a7ae1] rounded-md">View</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
      {showNewServive && (
        <NewServiceRequirement setShowNewService={setShowNewService} />
      )}
      {showServive && (
        <ViewAndEditServiceRequirement setShowService={setShowService} />
      )}
    </>
  )
}
export default ServiceRequiment