import { FaBookMedical, FaCcMastercard, FaUserAlt, FaUserNurse } from 'react-icons/fa';
import { GrTechnology } from "react-icons/gr";
import { FcBullish, FcInTransit } from "react-icons/fc";
import { GiReceiveMoney } from "react-icons/gi";
import SectionTitle from '../../../../SectionTitle/SectionTitle';

const TrendingJobs = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <SectionTitle Heading="Trending Jobs" colorText="Category" subHeading="To choose your trending job dream & to make future bright."></SectionTitle>

            {/* //main dive */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center'>
                {/* card div */}
                <div className='border hover:border-color1 p-10 w-72 rounded-md'>
                    <div className='flex justify-between item-center mb-5'>
                        <FaCcMastercard className='text-4xl text-color1' />
                        <span className='text-2xl text-color1 opacity-50'>-----01</span>
                    </div>
                    <h2 className='text-xl font-bold'>Account & Finance</h2>
                    <p className='font-semibold mt-2'>Job Avaiable: <span className='text-color1'>44</span></p>
                </div>
                <div className='border hover:border-color1 p-10 w-72 rounded-md'>
                    <div className='flex justify-between item-center mb-5'>
                        <FaUserNurse className='text-4xl text-color1' />
                        <span className='text-2xl text-color1 opacity-50'>-----01</span>
                    </div>
                    <h2 className='text-xl font-bold'>Nurse</h2>
                    <p className='font-semibold mt-2'>Job Avaiable: <span className='text-color1'>44</span></p>
                </div>
                <div className='border hover:border-color1 p-10 w-72 rounded-md'>
                    <div className='flex justify-between item-center mb-5'>
                        <FaBookMedical className='text-4xl text-color1' />
                        <span className='text-2xl text-color1 opacity-50'>-----01</span>
                    </div>
                    <h2 className='text-xl font-bold'>Medical & Health</h2>
                    <p className='font-semibold mt-2'>Job Avaiable: <span className='text-color1'>44</span></p>
                </div>
                <div className='border hover:border-color1 p-10 w-72 rounded-md'>
                    <div className='flex justify-between item-center mb-5'>
                        <GrTechnology className='text-4xl text-color1' />
                        <span className='text-2xl text-color1 opacity-50'>-----01</span>
                    </div>
                    <h2 className='text-xl font-bold'>Technology</h2>
                    <p className='font-semibold mt-2'>Job Avaiable: <span className='text-color1'>44</span></p>
                </div>
                <div className='border hover:border-color1 p-10 w-72 rounded-md'>
                    <div className='flex justify-between item-center mb-5'>
                        <FcInTransit className='text-4xl text-color1' />
                        <span className='text-2xl text-color1 opacity-50'>-----01</span>
                    </div>
                    <h2 className='text-xl font-bold'>Transportation</h2>
                    <p className='font-semibold mt-2'>Job Avaiable: <span className='text-color1'>44</span></p>
                </div>
                <div className='border hover:border-color1 p-10 w-72 rounded-md'>
                    <div className='flex justify-between item-center mb-5'>
                        <FcBullish className='text-4xl text-color1' />
                        <span className='text-2xl text-color1 opacity-50'>-----01</span>
                    </div>
                    <h2 className='text-xl font-bold'>Marketing & Sales</h2>
                    <p className='font-semibold mt-2'>Job Avaiable: <span className='text-color1'>44</span></p>
                </div>
                <div className='border hover:border-color1 p-10 w-72 rounded-md'>
                    <div className='flex justify-between item-center mb-5'>
                        <FaUserAlt className='text-4xl text-color1' />
                        <span className='text-2xl text-color1 opacity-50'>-----01</span>
                    </div>
                    <h2 className='text-xl font-bold'>Receptionist Job</h2>
                    <p className='font-semibold mt-2'>Job Avaiable: <span className='text-color1'>44</span></p>
                </div>
                <div className='border hover:border-color1 p-10 w-72 rounded-md'>
                    <div className='flex justify-between item-center mb-5'>
                        <GiReceiveMoney className='text-4xl text-color1' />
                        <span className='text-2xl text-color1 opacity-50'>-----01</span>
                    </div>
                    <h2 className='text-xl font-bold'>Non-Profit Orgs.</h2>
                    <p className='font-semibold mt-2'>Job Avaiable: <span className='text-color1'>44</span></p>
                </div>

            </div>
        </div>
    );
};

export default TrendingJobs;