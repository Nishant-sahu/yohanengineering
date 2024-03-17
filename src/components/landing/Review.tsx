/* eslint-disable @next/next/no-img-element */
"use client";

import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CTA from "./CTA";
import { Testimonial } from "@/constant";


function Review() {
  return (
    <>
      <section className='relative z-50' id='reviews'>
        <div className=''>
          <img src='/review_bg.jpg' alt='Review Bg' />
        </div>
        <div className='mx-auto bg-[#13163D] px-4 lg:px-16 xl:px-24 2xl:px-28 flex gap-10 flex-col justify-center relative lg:absolute -top-24 lg:top-24 h-full lg:h-full w-full py-10 lg:max-w-[60vw]'>
          <div className='w-full container flex-col flex gap-10'>
            <div className='flex flex-col gap-10'>
              <div className='text-white mb-8'>
                <p className=' mb-2'>TESTIMONIALS</p>
                <h2 className=' mb-4 text-4xl md:text-6xl tracking-tight font-bold text-white'>
                  What clients say
                </h2>
              </div>

              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                loop={true}
                className='w-full bg-transparent'
                modules={[Pagination]}
              >
                {Testimonial?.map((r, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className='mt-3 mb-4 text-white sm:text-lg flex items-center gap-10'
                      style={{ backgroundColor: "transparent" }}
                    >
                      <p className='text-gray-400 flex items-center gap-4 pb-10'>
                        <span className='text-primary'>
                          <FaQuoteRight size={24} />
                        </span>
                        <span className='text-left'>{r?.review}</span>
                      </p>

                      <div className='flex items-center gap-4'>
                        <div className='avatar'>
                          <div className='w-16 rounded-full ring-offset-base-100 ring-offset-2'>
                            <img src={r?.image} alt={r?.name} />
                          </div>
                        </div>

                        <div className='flex flex-col items-start'>
                          <h3>{r?.name}</h3>
                          <span className='text-gray-400 text-sm'>
                            {r?.title}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-secondary relative -top-24 lg:top-0 lg:pt-20'>
        <CTA />
      </section>
    </>
  );
}

export default Review;
