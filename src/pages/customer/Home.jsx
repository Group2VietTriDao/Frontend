import { Link } from 'react-router-dom';
import { Footer } from '../../layouts/customer/CustomerLayout';
import { ReactComponent as GuardSvg } from '../../assets/svg/gruad.svg'
import { ReactComponent as Securiry } from '../../assets/svg/security.svg'
import { ReactComponent as Service } from '../../assets/svg/services.svg'
import { ReactComponent as Trans } from '../../assets/svg/trans.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Contact = ({ button, link, title, content, img }) => {
  return (
    <>
      <div className='hover:border-[#10253F] border-4 relative py-12 px-8 h-full border-solid border-[#008CCC] transition-all duration-500'>
        <div className='absolute top-[-24px] left-[50%] translate-x-[-50%] bg-white w-[70%]'>
          <img className='mx-auto' src={img} alt="image" />
        </div>
        <div className='flex flex-col justify-center items-center space-y-8'>
          <h2 className='text-3xl font-semibold'>{title}</h2>
          <p className='text-sm font-light'>{content}</p>
        </div>
        <div className='absolute bottom-[-24px] left-[50%] translate-x-[-50%] bg-white w-[70%]'>
          <button className='transition-all duration-500 mx-auto uppercase flex justify-center items-center px-6 py-3 rounded-md text-lg text-[#0073A8] bg-[#F2F2F2] hover:bg-[#008CCC] hover:text-white'>
            <Link to={link}>
              {button}
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}
const Article = ({ title, content, image: Image }) => {
  return (
    <>
      <div className='space-y-10 bg-[#F3F4F6] rounded-md flex flex-col p-6 justify-between border-b-[6px] border-[#34D5F9] hover:border-[#352CE9] transition-all duration-700'>
        <div className='space-y-4'>
          <Image />
          <h3 className='font-bold text-lg uppercase'>{title}</h3>
        </div>
        <p className='font-medium text-[#171A1F]'>{content}</p>
        <Link to='' className='flex space-x-3 text-red-600 items-center font-medium'>
          <span className='order-1'>Service request</span>
          <FontAwesomeIcon className='order-2' icon="fa-solid fa-arrow-right" />
        </Link>
      </div>
    </>
  )
}
const Home = () => {
  return (
    <>
      <main className='mt-[60px]'>
        <div className='bg-[#0073A8] text-white font-bold h-[228px] flex flex-col lg:flex-row text-center space-y-4 justify-center items-center space-x-10'>
          <h1 className='text-6xl'>There for you</h1>
          <p className='max-w-[500px]'>We keep people, businesses, and communities safe,
            so we can all thrive together.</p>
        </div>
        <div className='text-[#10253F] my-8 relative md:max-w-[1200px] mx-auto space-y-32'>
          <div className='bg-white flex flex-col lg:flex-row gap-6 md:gap-8 justify-center py-4'>
            <div className='basis-[60%]'>
              <img className='w-full h-auto' src="https://www.aus.com/sites/default/files/2024-07/1449107259%20-%20Election%20year%20report%20-%20thumbnail.png" alt="" />
            </div>
            <div className='basis-[40%] space-y-10'>
              <div className='flex flex-col justify-between h-full space-y-10 items-center text-center lg:text-start lg:items-start'>
                <h2 className='text-3xl font-semibold'>Physical Security During an Election</h2>
                <p className='flex-1'>Ahead of what could be an election unlike any other in American history, download Allied Universal's 2024 special report, Physical Security During an Election, for the information necessary to identify risks, prepare contingency plans, and predict when and where to deploy resources.</p>
                <button type='button' className='capitalize bg-[#0073A8] w-[50%] lg:w-full p-2 rounded-md text-white font-semibold'>
                  <Link to=''>
                    read the report
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 space-y-6 lg:space-y-0 text-center lg:text-start lg:grid-cols-3 gap-12 py-4'>
            <Contact
              button='contact us'
              link=''
              content=' Our vision is simple, really: Be the most trusted corporate service partner in a world of evolving risk. And when we make that promise to you, we live it out in our deeds and actions, every day.'
              img='https://www.aus.com/sites/default/files/2024-06/1379658565_Benefits-Icons_stakeholder-confidence-boosted.png'
              title='United in Our Vision'
            />

            <Contact
              button='locations'
              link=''
              content='With local branches across North America, we"re committed to securing your neighborhoods and communities. Find your local office here.'
              img='https://www.aus.com/sites/default/files/2024-06/1379658565_Benefits-Icons_local-expertise-global-insights%20.png'
              title='Local Service Provider'
            />
            <Contact
              button='carres'
              link=''
              content='Icon of a computer Join Our Team Come be a part of a network of skilled professionals and experts working together to make the world a safer place. Refer a friend, family member or neighbor today. Careers'
              img='https://www.aus.com/sites/default/files/2024-06/1379658565_Benefits-Icons_proactive-program-management.png'
              title='Join Our Team'
            />
          </div>

          <div className='flex flex-col items-center'>
            <h2 className='text-3xl font-medium my-10'>What makes Awesome different?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              <Article title='Commercial Security' content='Protect your business with customized security solutions designed to safeguard your assets and employees.' image={GuardSvg} />
              <Article title='Aviation Security' content='Ensure your event"s success with expert security management tailored to any occasion.' image={Securiry} />
              <Article title='Event Services' content='Elevate safety standards with advanced security solutions for airports and aviation facilities.' image={Service} />
              <Article title='Transportation Security' content='Secure every journey with comprehensive protection for goods and passengers from start to finish.' image={Trans} />
            </div>
          </div>

          <div className='flex flex-col items-center space-y-10'>
            <h1 className='text-3xl font-semibold w-[50%] text-center'>How Awesome app make your life and work more awesome?</h1>

            <div className='flex justify-between w-full'>
              <h2 className='text-2xl font-bold'>News & Resources</h2>
              <Link to='' className='text-[#0073A8] hover:text-[#10253f] text-sm space-x-2'>
                <span>View All Resources</span>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </Link>
            </div>

            <div className='grid grid-cols-6 md:grid-cols-3 gap-9'>
              <div className='hover:shadow-2xl transition-shadow duration-500 cursor-pointer col-start-2 col-end-6 md:col-auto'>
                <div>
                  <img className='' src="https://www.aus.com/sites/default/files/2024-06/NEWS-392x2211.webp" alt="" />
                </div>
                <div className='p-6 text-start space-y-3'>
                  <span className='uppercase font-medium '>news</span>
                  <p className='text-sm line-clamp-3'>Allied Universal Global Chairman and CEO Steve Jones Receives 2024 Excellence in Executive Leadership Award. Under Jones'...</p>
                  <button>
                    <Link to='' className='space-x-3'>
                      <span className='capitalize font-semibold'>read more</span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </Link>
                  </button>
                </div>
              </div>

              <div className='hover:shadow-2xl transition-shadow duration-500 cursor-pointer col-start-2 col-end-6 md:col-auto'>
                <div>
                  <img className='' src="https://www.aus.com/sites/default/files/2024-06/WEBINARS-392x2213.webp" alt="" />
                </div>
                <div className='p-6 text-start space-y-3'>
                  <span className='uppercase font-medium '>blogs</span>
                  <p className='text-sm line-clamp-3'>When Shell decided to maintain a single-source global security provider, we were honored that they chose to renew with Alli....</p>
                  <button>
                    <Link to='' className='space-x-3'>
                      <span className='capitalize font-semibold'>read more</span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </Link>
                  </button>
                </div>
              </div>

              <div className='hover:shadow-2xl transition-shadow duration-500 cursor-pointer col-start-2 col-end-6 md:col-auto'>
                <div>
                  <img className='' src="https://www.aus.com/sites/default/files/2024-06/NEWS-392x2211.webp" alt="" />
                </div>
                <div className='p-6 text-start space-y-3'>
                  <span className='uppercase font-medium '>news</span>
                  <p className='text-sm line-clamp-3'>Allied Universal Global Chairman and CEO Steve Jones Receives 2024 Excellence in Executive Leadership Award. Under Jones'...wefweff</p>
                  <button>
                    <Link to='' className='space-x-3'>
                      <span className='capitalize font-semibold'>read more</span>
                      <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <h3 className='text-3xl font-bold w-[50%] text-center'>Let's work together to secure
              the promise of tomorrow.</h3>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;