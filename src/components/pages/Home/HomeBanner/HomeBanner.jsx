// import './HomeBanner.css'
import bannerImage from "../../../../assets/Home/h1-hero-bg.png"
import { BsBagCheckFill } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const HomeBanner = () => {

    const handleSearch = event => {
        event.preventDefault();
    }
    return (
        <div className="relative">
            <img src={bannerImage} alt="" />
            <div className="absolute inset-0 bg-opacity-60 bg-black flex flex-col justify-center items-center ">
                <h1 className="text-7xl font-serif font-semibold text-white">Your Career’s <span className="text-color1">Opportunity.</span></h1>
                <p className="text-xl font-semibold mt-5 text-white">2400 Peoples are daily search in this portal, 100 user added job portal!</p>
                <div className="flex gap-20 mt-10 text-white">
                    <div className="flex items-center gap-5">
                        <div className="border-dashed rounded-full border-2 border-color1 p-5">
                            <BsBagCheckFill className="text-5xl text-color1" />
                        </div>
                        <div className="text-4xl font-semiboldbold">
                            <h1>Live Jobs</h1>
                            <h1 className="text-color1 mt-5">4390</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="border-dashed rounded-full border-2 border-color1 p-5">
                            <BsBagCheckFill className="text-5xl text-color1" />
                        </div>
                        <div className="text-4xl font-semiboldbold">
                            <h1>Companies</h1>
                            <h1 className="text-color1 mt-5">137+</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="border-dashed rounded-full border-2 border-color1 p-5">
                            <BsBagCheckFill className="text-5xl text-color1" />
                        </div>
                        <div className="text-4xl font-semiboldbold">
                            <h1>Candidates</h1>
                            <h1 className="text-color1 mt-5">120+</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="border-dashed rounded-full border-2 border-color1 p-5">
                            <BsBagCheckFill className="text-5xl text-color1" />
                        </div>
                        <div className="text-4xl font-semiboldbold">
                            <h1>New Jobs</h1>
                            <h1 className="text-color1 mt-5">37+</h1>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 w-1/2 rounded-md mt-14">
                    <form onSubmit={handleSearch} className="flex items-center rounded-md gap-9">
                        <div className="flex items-center gap-4 bg-[#EFF3F2]">
                            <div className="border-r-2 p-2">
                                <AiOutlineAppstoreAdd />
                            </div>
                            <input type="text" placeholder="Jobs Title" className="w-[450px] p-3 rounded-md text-xl bg-[#EFF3F2]" />
                        </div>
                        <div className="flex items-center gap-4 w-80 bg-[#EFF3F2]">
                            <div className="border-r-2 p-2">
                                <AiOutlineAppstoreAdd />
                            </div>
                            <select className="select select-primary w-full max-w-xs border-0 bg-[#EFF3F2]">
                                <option disabled selected >Category</option>
                                <option>Game of Thrones</option>
                                <option>Lost</option>
                                <option>Breaking Bad</option>
                                <option>Walking Dead</option>
                            </select>
                        </div>
                        <input className="btn ms-10 bg-[#EFF3F2]" type="submit" value="Search" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;