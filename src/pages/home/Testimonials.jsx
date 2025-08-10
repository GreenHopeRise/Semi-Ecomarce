import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import 'swiper/css/pagination';
// import required modules
import { Pagination } from "swiper/modules";
import { reviews } from "../../utils/reviews";
import Rating from "../../components/Rating";
const Testimonials = () => {
    return (
        <section className="section-container  px-8">
            <div className="text-center mb-12">
                <h3 className="uppercase text-lg font-semibold text-primary mb-4">
                    Testimonials
                </h3>
                <h2 className="capitalize text-4xl font-bold mb-4">
                    Our Client Reviews
                </h2>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ backgroundImage: `url(${review.coverImg})` }}
                        className="bg-no-repeat bg-cover rounded-lg"
                    >
                        <div className="md:h-[547px] border-white flex justify-center items-center mb-4">
                            <div className="mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative">
                                <img className="size-20 absolute -top-6 left-1/2 -translate-1/2 ring-primary object-cover rounded-full" src={review.image} alt="" />
                                <div className="mt-16 text-center">
                                    <h3 className="text-lg font-semibold ">{review.name}</h3>
                                    <p className="mb-3">Verified Customer</p>
                                    <p className="text-gray-500 mb-4">{review.review}</p>
                                    <div className="w-full mx-auto mb-2 flex items-center justify-center text-center">
                                        <Rating rating = {review.rating}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
