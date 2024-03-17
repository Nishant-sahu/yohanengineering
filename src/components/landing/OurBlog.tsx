"use client";
/* eslint-disable @next/next/no-img-element */
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Our_Blogs } from "@/constant";

function OurBlog() {
  return (
    <section className='relative '>
      <div className='relative h-full mx-auto container px-4 lg:px-16 xl:px-24 2xl:px-28 py-6 lg:pb-16 '>
        <div className='mx-auto'>
          <div className='mx-auto text-center mb-8 lg:mb-16'>
            <p className='text-gray-500 mb-2'>READ OUR BLOG</p>
            <h2 className=' mb-4 text-4xl xl:text-5xl tracking-tight font-bold text-gray-900 :mb-16'>
              The featured articles
            </h2>
          </div>

          <div>
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  // width: 1024,
                  slidesPerView: 3,
                },
                1536: {
                  // width: 1024,
                  slidesPerView: 4,
                },
              }}
              // slidesPerView={4}
              slidesPerGroup={4}
              loop={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className='mySwiper'
            >
              {Our_Blogs?.map((r, index) => (
                <SwiperSlide className='group' key={index}>
                  <div>
                    <img
                      className='w-full rounded-none'
                      src={r?.img}
                      alt={r?.title}
                    />
                  </div>
                  <div className='p-5 text-left'>
                    <p className='mt-3 mb-4 text-gray-600 font-semibold'>
                      {r?.category}
                    </p>
                    <h3 className='text-xl font-bold tracking-tight text-gray-900'>
                      <a href='#'>{r?.title}</a>
                    </h3>
                    <div>
                      <span className='text-sm opacity-70'>{r?.createAt}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className='absolute left-0 bottom-0'>
        <img src='/constraction-decor-image-3.png' alt='' />
      </div>
    </section>
  );
}

export default OurBlog;
