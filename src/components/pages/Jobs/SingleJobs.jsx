import { FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleJobs = ({ items }) => {
    const { id, img, title, sub_title, work_option_1, work_option_2, location, salary } = items;

    return (
        <div className='text-left border-solid border-2 p-6 rounded-lg'>
            <img className='w-32' src={img} alt="" />
            <h1 className='text-3xl font-bold'>{title}</h1>
            <h3 className='text-xl text-secondary mt-2'>{sub_title}</h3>
            <div className='flex gap-4 mt-4'>
                <p className='text-xl border-solid border-2 border-bg-tertiary py-1 px-2 rounded'>{work_option_1}</p>
                <p className='text-xl border-solid border-2 border-bg-tertiary py-1 px-2 rounded'>{work_option_2}</p>
            </div>
            <div className='flex gap-28 mt-4'>
                <div className="text-color1 flex items-center text-xl">
                    <FaSearchLocation className='me-3' />
                    {location}
                </div>
                <div className="text-color1 flex items-center text-xl">
                    <FaSearchLocation className='me-3' />
                    {salary}
                </div>
            </div>
            <Link to={`/jobDetails/${id}`}>
                <button className='text-xl bg-gradient-to-r from-bg-tertiary to-bg-extra py-2 px-4 rounded-md font-semibold mt-6'>Show More Details</button>
            </Link>
        </div>
    );
};

export default SingleJobs;