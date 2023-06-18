import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const JobsDetails = () => {
    const aLlJobs = useLoaderData();
    const routeId = useParams();
    console.log(routeId.jobId);

    const details = aLlJobs.find(item => item?.id == routeId?.jobId);

    const handleApplyJob = () => {
        Swal.fire({
            icon: 'success',
            title: 'Appllied Successfully',
            text: 'Choose another job!'
          })

    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className='text-4xl font-bold bg-bg-primary h-60 flex  items-center  justify-center'>
                <h1>Job Details</h1>
            </div>
            <div className='flex gap-4 mt-10'>
                <div className='text-left w-2/3'>
                    <p className='mb-9'><span className='text-xl font-bold'>Job Description:</span> <span className='text-gray-600'>{details?.job_description}</span></p>

                    <p className='mb-9'><span className='text-xl font-bold'>Job Responsibility:</span> <span className='text-gray-600'>{details?.job_responsibility}</span></p>

                    <p className='mb-9'><span className='text-xl font-bold'>Education Requirments:
                        <br />
                        <br />
                    </span> <span className='text-gray-600'>{details?.education}</span></p>

                    <p className='mb-9'><span className='text-xl font-bold'>Experiance:
                        <br />
                        <br />
                    </span> <span className='text-gray-600'>{details?.experiance}</span></p>
                </div>
                <div className=' w-1/3 bg-[#F2F2F2] rounded-md'>
                    <div className='bg-extra p-5 text-left rounded-lg divide-y'>
                        <div className='mb-4'>
                            <h1 className='text-xl font-bold'>Job Details</h1>
                        </div>
                        <div className='mb-4'>
                            <p className='text-xl text-gray-600 mt-2'>

                                Salary: {details?.salary}</p>
                            <p className='text-xl text-gray-600 mt-2'>

                                Job Title: {details?.job_title}</p>
                            <h1 className='text-xl text-gray-600 mt-4'>Contact Information</h1>
                        </div>

                        <div>
                            <p className='text-xl text-gray-600 mt-4'>

                                Phone: {details?.applicant_phone}</p>
                            <p className='text-xl text-gray-600 mt-2'>

                                Email: {details?.applicant_email}</p>
                            <p className='text-xl text-gray-600 mt-2'>

                                Location: {details?.applicant_location}</p>
                            <div className='flex justify-center'>
                                <button onClick={() => handleApplyJob()} className='btn btn-primary to-bg-extra py-2 px-32 rounded-md font-semibold mt-6'>Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsDetails;