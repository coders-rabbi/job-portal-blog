import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { FaArrowAltCircleRight, FaBeer, FaRegBookmark } from 'react-icons/fa';
import { FcApproval } from "react-icons/fc";
import avatar from "../../../assets/user.jpg"
import { Link } from 'react-router-dom';

const LatestFeatured = () => {
    return (
        <div className='bg-[#F8F8F8]'>
            <div className='max-w-screen-xl mx-auto py-20'>
                <SectionTitle Heading="Latest Featured" colorText="jobs" subHeading="To choose your trending job dream & to make future bright."></SectionTitle>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20'>
                    <div className='p-5 border-l-4 border-color1 bg-white'>
                        <div className='flex justify-between items-center mb-5'>
                            <img className='w-20 h-20 rounded-full border-color1 border-2' src={avatar} alt="" />
                            <div>
                                <h2 className='text-xl font-bold'>React JS Developer</h2>
                                <p>Full Time, Part Time</p>
                            </div>
                            <FaRegBookmark />
                        </div>
                        <hr />
                        <div className='bg-[#FDF9F9] mt-5 p-4 mb-5'>
                            <div className='flex items-center gap-2'>
                                <FcApproval /><h3> Salary: $80 - 110 / Per Year</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FcApproval /> <h3> Vacancy: 07 Person (Both)</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FcApproval />
                                <h3>Deadline: 02 March, 2023</h3>
                            </div>
                        </div>
                        <Link className='flex items-center gap-2 text-color1' to="/jobs">Apply Now <FaArrowAltCircleRight /></Link>

                    </div>
                    <div className='p-5 border-l-4 border-color1 bg-white'>
                        <div className='flex justify-between items-center mb-5'>
                            <img className='w-20 h-20 rounded-full border-color1 border-2' src={avatar} alt="" />
                            <div>
                                <h2 className='text-xl font-bold'>React JS Developer</h2>
                                <p>Full Time, Part Time</p>
                            </div>
                            <FaRegBookmark />
                        </div>
                        <hr />
                        <div className='bg-[#FDF9F9] mt-5 p-4 mb-5'>
                            <div className='flex items-center gap-2'>
                                <FcApproval /><h3> Salary: $80 - 110 / Per Year</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FcApproval /> <h3> Vacancy: 07 Person (Both)</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FcApproval />
                                <h3>Deadline: 02 March, 2023</h3>
                            </div>
                        </div>
                        <Link className='flex items-center gap-2 text-color1' to="/jobs">Apply Now <FaArrowAltCircleRight /></Link>

                    </div>
                    <div className='p-5 border-l-4 border-color1 bg-white'>
                        <div className='flex justify-between items-center mb-5'>
                            <img className='w-20 h-20 rounded-full border-color1 border-2' src={avatar} alt="" />
                            <div>
                                <h2 className='text-xl font-bold'>React JS Developer</h2>
                                <p>Full Time, Part Time</p>
                            </div>
                            <FaRegBookmark />
                        </div>
                        <hr />
                        <div className='bg-[#FDF9F9] mt-5 p-4 mb-5'>
                            <div className='flex items-center gap-2'>
                                <FcApproval /><h3> Salary: $80 - 110 / Per Year</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FcApproval /> <h3> Vacancy: 07 Person (Both)</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FcApproval />
                                <h3>Deadline: 02 March, 2023</h3>
                            </div>
                        </div>
                        <Link className='flex items-center gap-2 text-color1' to="/jobs">Apply Now <FaArrowAltCircleRight /></Link>

                    </div>
                    <div className='p-5 border-l-4 border-color1 bg-white'>
                        <div className='flex justify-between items-center mb-5'>
                            <img className='w-20 h-20 rounded-full border-color1 border-2' src={avatar} alt="" />
                            <div>
                                <h2 className='text-xl font-bold'>React JS Developer</h2>
                                <p>Full Time, Part Time</p>
                            </div>
                            <FaRegBookmark />
                        </div>
                        <hr />
                        <div className='bg-[#FDF9F9] mt-5 p-4 mb-5'>
                            <div className='flex items-center gap-2'>
                                <FcApproval /><h3> Salary: $80 - 110 / Per Year</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FcApproval /> <h3> Vacancy: 07 Person (Both)</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FcApproval />
                                <h3>Deadline: 02 March, 2023</h3>
                            </div>
                        </div>
                        <Link className='flex items-center gap-2 text-color1' to="/jobs">Apply Now <FaArrowAltCircleRight /></Link>

                    </div>
                    <div className='p-5 border-l-4 border-color1 bg-white'>
                        <div className='flex justify-between items-center mb-5'>
                            <img className='w-20 h-20 rounded-full border-color1 border-2' src={avatar} alt="" />
                            <div>
                                <h2 className='text-xl font-bold'>React JS Developer</h2>
                                <p>Full Time, Part Time</p>
                            </div>
                            <FaRegBookmark />
                        </div>
                        <hr />
                        <div className='bg-[#FDF9F9] mt-5 p-4 mb-5'>
                            <div className='flex items-center gap-2'>
                                <FcApproval /><h3> Salary: $80 - 110 / Per Year</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FcApproval /> <h3> Vacancy: 07 Person (Both)</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FcApproval />
                                <h3>Deadline: 02 March, 2023</h3>
                            </div>
                        </div>
                        <Link className='flex items-center gap-2 text-color1' to="/jobs">Apply Now <FaArrowAltCircleRight /></Link>

                    </div>
                    <div className='p-5 border-l-4 border-color1 bg-white'>
                        <div className='flex justify-between items-center mb-5'>
                            <img className='w-20 h-20 rounded-full border-color1 border-2' src={avatar} alt="" />
                            <div>
                                <h2 className='text-xl font-bold'>React JS Developer</h2>
                                <p>Full Time, Part Time</p>
                            </div>
                            <FaRegBookmark />
                        </div>
                        <hr />
                        <div className='bg-[#FDF9F9] mt-5 p-4 mb-5'>
                            <div className='flex items-center gap-2'>
                                <FcApproval /><h3> Salary: $80 - 110 / Per Year</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FcApproval /> <h3> Vacancy: 07 Person (Both)</h3>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FcApproval />
                                <h3>Deadline: 02 March, 2023</h3>
                            </div>
                        </div>
                        <Link className='flex items-center gap-2 text-color1' to="/jobs">Apply Now <FaArrowAltCircleRight /></Link>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default LatestFeatured;