/* eslint-disable @next/next/no-img-element */
"use client";
import { FaArrowRightLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { OUR_SERVICES } from "@/constant";

const what_we_are = [
  {
    img: "https://fabrica.ancorathemes.com/wp-content/uploads/2023/02/image-95-copyright-890x664.jpg",
    title: "Construction management",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  },
  {
    img: "https://fabrica.ancorathemes.com/wp-content/uploads/2023/02/image-95-copyright-890x664.jpg",
    title: "Construction management",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  },
  {
    img: "https://fabrica.ancorathemes.com/wp-content/uploads/2023/02/image-95-copyright-890x664.jpg",
    title: "Construction management",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  },
  {
    img: "https://fabrica.ancorathemes.com/wp-content/uploads/2023/02/image-95-copyright-890x664.jpg",
    title: "Construction management",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  },
];

function WhatWeOffer() {
  return (
    <section className='relative bg-[#F9F9F9]' id='services'>
      <div className='absolute top-0 right-0'>
        <img src='/constraction-decor-image-4.png' alt='' />
      </div>

      <div className='mx-auto h-full container px-4 lg:px-16 xl:px-24 2xl:px-28  py-6 lg:pb-16 lg:pt-20 relative z-50'>
        <div className='mx-auto text-center mb-8 '>
          <p className='text-gray-500 mb-2'>WHAT WE OFFER</p>
          <h2 className='mb-4 text-4xl xl:text-5xl tracking-tight font-bold text-gray-900'>
            Our best services
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
                slidesPerView: 3,
              },
            }}
            // slidesPerView={4}
            slidesPerGroup={3}
            loop={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            {OUR_SERVICES?.map((r, index) => (
              <SwiperSlide className='group' key={index}>
                <div className='group bg-white' key={index}>
                  <div>
                    <img
                      className='w-full rounded-none'
                      src={r?.image}
                      alt={r?.title}
                    />
                  </div>
                  <div className='p-5 text-center'>
                    <h3 className='text-xl font-bold tracking-tight text-gray-900'>
                      <a href='#'>{r?.title}</a>
                    </h3>
                    <p className='mt-3 mb-4 text-gray-600'>{r?.description}</p>
                    <div className='flex space-x-4 sm:mt-0 group-hover:text-primary w-fit mx-auto items-center'>
                      <span className='w-0 overflow-hidden group-hover:w-fit transition-all'>
                        Know More
                      </span>
                      <a
                        href='#'
                        className='text-gray-500 border h-10 w-10 flex items-center justify-center rounded-full transition group-hover:text-primary'
                      >
                        <FaArrowRightLong />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        
      </div>
      <div className='absolute bottom-0 left-0'>
        <img src='/constraction-decor-image-4.png' alt='' />
      </div>
    </section>
  );
}

export default WhatWeOffer;
