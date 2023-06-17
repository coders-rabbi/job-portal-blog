import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import SingleJobs from './SingleJobs';

const Jobs = () => {
    const aLlJobs = useLoaderData();
    console.log(aLlJobs);
    return (
        <div>
            <div className='flex justify-center bg-[#F2F2F2] py-36'>
                <h1 className='text-color1 text-6xl font-semibold'>Jobs</h1>
            </div>
            <div className='max-w-screen-xl mx-auto mt-20 grid md:grid-cols-2 gap-9'>
                {
                    aLlJobs.map(items => <SingleJobs
                        key={items.id}
                        items={items}
                    ></SingleJobs>)
                }
            </div>
        </div>
    );
};

export default Jobs;