import blog01 from "../../../assets/blog/blog-img-01.png"
import blog02 from "../../../assets/blog/blog-img-02.png"
import blog03 from "../../../assets/blog/blog-img-03.png"
import blog04 from "../../../assets/blog/blog-img-04.png"
import blog05 from "../../../assets/blog/blog-img-05.png"
import blog06 from "../../../assets/blog/blog-img-06.png"
import banner from "../../../assets/blog/breadcrumb-bg.png"
import { FaBeer, FaUserTie } from 'react-icons/fa';


const UpcomingEvents = () => {
    return (
        <div>
            <div className="mb-36 relative">
                <img src={banner} alt="" />
                <h1 className="text-3xl font-semibold absolute inset-1/2 ">Events</h1>
            </div>
            <div className="grid md:grid-cols-3 max-w-screen-xl mx-auto gap-10">
                <div>
                    <img src={blog01} alt="" />
                    <div className="flex justify-between mb-5">
                        <h4 className="text-xl font-bold bg-[#00A7AC] px-3 py-3 rounded-md -mt-5">02 July</h4>
                        <p className="flex items-center gap-2 text-xl"><FaUserTie /> MD. Rabbi Mia</p>
                    </div>
                    <h1 className="text-3xl font-semibold hover:text-[#00A7AC]">To Make Your Smartness & Catch Your Bright Dream.</h1>
                    <button className='hover:text-[#00A7AC] text-xl font-semibold mt-6'>Show More Details</button>
                </div>
                <div>
                    <img src={blog02} alt="" />
                    <div className="flex justify-between mb-5">
                        <h4 className="text-xl font-bold bg-[#00A7AC] px-3 py-3 rounded-md -mt-5">02 July</h4>
                        <p className="flex items-center gap-2 text-xl"><FaUserTie /> MD. Rabbi Mia</p>
                    </div>
                    <h1 className="text-3xl font-semibold hover:text-[#00A7AC]">To Make Your Smartness & Catch Your Bright Dream.</h1>
                    <button className='hover:text-[#00A7AC] text-xl font-semibold mt-6'>Show More Details</button>
                </div>
                <div>
                    <img src={blog03} alt="" />
                    <div className="flex justify-between mb-5">
                        <h4 className="text-xl font-bold bg-[#00A7AC] px-3 py-3 rounded-md -mt-5">02 July</h4>
                        <p className="flex items-center gap-2 text-xl"><FaUserTie /> MD. Rabbi Mia</p>
                    </div>
                    <h1 className="text-3xl font-semibold hover:text-[#00A7AC]">To Make Your Smartness & Catch Your Bright Dream.</h1>
                    <button className='hover:text-[#00A7AC] text-xl font-semibold mt-6'>Show More Details</button>
                </div>
                <div>
                    <img src={blog04} alt="" />
                    <div className="flex justify-between mb-5">
                        <h4 className="text-xl font-bold bg-[#00A7AC] px-3 py-3 rounded-md -mt-5">02 July</h4>
                        <p className="flex items-center gap-2 text-xl"><FaUserTie /> MD. Rabbi Mia</p>
                    </div>
                    <h1 className="text-3xl font-semibold hover:text-[#00A7AC]">To Make Your Smartness & Catch Your Bright Dream.</h1>
                    <button className='hover:text-[#00A7AC] text-xl font-semibold mt-6'>Show More Details</button>
                </div>
                <div>
                    <img src={blog05} alt="" />
                    <div className="flex justify-between mb-5">
                        <h4 className="text-xl font-bold bg-[#00A7AC] px-3 py-3 rounded-md -mt-5">02 July</h4>
                        <p className="flex items-center gap-2 text-xl"><FaUserTie /> MD. Rabbi Mia</p>
                    </div>
                    <h1 className="text-3xl font-semibold hover:text-[#00A7AC]">To Make Your Smartness & Catch Your Bright Dream.</h1>
                    <button className='hover:text-[#00A7AC] text-xl font-semibold mt-6'>Show More Details</button>
                </div>
                <div>
                    <img src={blog06} alt="" />
                    <div className="flex justify-between mb-5">
                        <h4 className="text-xl font-bold bg-[#00A7AC] px-3 py-3 rounded-md -mt-5">02 July</h4>
                        <p className="flex items-center gap-2 text-xl"><FaUserTie /> MD. Rabbi Mia</p>
                    </div>
                    <h1 className="text-3xl font-semibold hover:text-[#00A7AC]">To Make Your Smartness & Catch Your Bright Dream.</h1>
                    <button className='hover:text-[#00A7AC] text-xl font-semibold mt-6'>Show More Details</button>
                </div>

            </div>
        </div>
    );
};

export default UpcomingEvents;