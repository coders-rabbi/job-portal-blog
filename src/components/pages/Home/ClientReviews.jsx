import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import clinet01 from "../../../assets/clinetReviews/testimonial-author1.png"
import clinet02 from "../../../assets/clinetReviews/testimonial-author2.png"

// import "./styles.css";

import { FreeMode, Pagination } from "swiper";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const ClientReviews = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <SectionTitle Heading="Trusted User" colorText="Reviews" subHeading="To choose your trending job dream & to make future bright."></SectionTitle>

            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex gap-5 items-center">
                        <img src={clinet01} alt="" />
                        <div>
                            <div className='flex justify-between items-center mb-5'>
                                <div>
                                    <h2 className='text-xl font-bold'>React JS Developer</h2>
                                    <p>Full Time, Part Time</p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <p className="text-2xl font-serif">on the other hand, we denounce with to the righteous indigation and dislike the en who are so beguiled to demoralized by the charms of pleasue.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 items-center">
                        <img src={clinet02} alt="" />
                        <div>
                            <div className='flex justify-between items-center mb-5'>
                                <div>
                                    <h2 className='text-xl font-bold'>React JS Developer</h2>
                                    <p>Full Time, Part Time</p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <p className="text-2xl font-serif">on the other hand, we denounce with to the righteous indigation and dislike the en who are so beguiled to demoralized by the charms of pleasue.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 items-center">
                        <img src={clinet01} alt="" />
                        <div>
                            <div className='flex justify-between items-center mb-5'>
                                <div>
                                    <h2 className='text-xl font-bold'>React JS Developer</h2>
                                    <p>Full Time, Part Time</p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <p className="text-2xl font-serif">on the other hand, we denounce with to the righteous indigation and dislike the en who are so beguiled to demoralized by the charms of pleasue.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 items-center">
                        <img src={clinet02} alt="" />
                        <div>
                            <div className='flex justify-between items-center mb-5'>
                                <div>
                                    <h2 className='text-xl font-bold'>React JS Developer</h2>
                                    <p>Full Time, Part Time</p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <p className="text-2xl font-serif">on the other hand, we denounce with to the righteous indigation and dislike the en who are so beguiled to demoralized by the charms of pleasue.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 items-center">
                        <img src={clinet01} alt="" />
                        <div>
                            <div className='flex justify-between items-center mb-5'>
                                <div>
                                    <h2 className='text-xl font-bold'>React JS Developer</h2>
                                    <p>Full Time, Part Time</p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <p className="text-2xl font-serif">on the other hand, we denounce with to the righteous indigation and dislike the en who are so beguiled to demoralized by the charms of pleasue.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 items-center">
                        <img src={clinet02} alt="" />
                        <div>
                            <div className='flex justify-between items-center mb-5'>
                                <div>
                                    <h2 className='text-xl font-bold'>React JS Developer</h2>
                                    <p>Full Time, Part Time</p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <p className="text-2xl font-serif">on the other hand, we denounce with to the righteous indigation and dislike the en who are so beguiled to demoralized by the charms of pleasue.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex gap-5 items-center">
                        <img src={clinet01} alt="" />
                        <div>
                            <div className='flex justify-between items-center mb-5'>
                                <div>
                                    <h2 className='text-xl font-bold'>React JS Developer</h2>
                                    <p>Full Time, Part Time</p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <p className="text-2xl font-serif">on the other hand, we denounce with to the righteous indigation and dislike the en who are so beguiled to demoralized by the charms of pleasue.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ClientReviews;