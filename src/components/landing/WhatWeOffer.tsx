/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { OUR_SERVICES } from "@/constant";

function WhatWeOffer() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className='relative bg-[#F9F9F9]' id='services'>
      <div className='absolute top-0 right-0'>
        <img src='/constraction-decor-image-4.png' alt='' />
      </div>

      <div className='mx-auto h-full container px-4 lg:px-16 xl:px-24 2xl:px-28 py-6 lg:pb-16 lg:pt-20 relative z-50'>
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
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1536: {
                slidesPerView: 3,
              },
            }}
            slidesPerGroup={1}
            loop={true}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className='mySwiper'
          >
            {OUR_SERVICES?.map((r: any, index: any) => (
              <SwiperSlide
                className='flex flex-col rounded-lg border min-h-[400px] pb-6 relative'
                key={index}
              >
                <div className='flex flex-col h-full'>
                  <div>
                    <img
                      className='w-full rounded-none'
                      src={r.image}
                      alt={r.title}
                    />
                  </div>
                  <div className='flex flex-col flex-grow justify-between px-3'>
                    <h3 className='text-lg pt-4 font-bold tracking-tight text-gray-900'>
                      <a
                        href={`${r.slug}&text=${encodeURIComponent(
                          `Hi 👋 How are you?\n\nI want to know more about this "${r.title}" service .`
                        )}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {r.title}
                      </a>
                    </h3>
                    <p className='mt-2 text-sm xl:text-lg text-gray-400 flex-grow'>
                      {expandedIndex === index
                        ? r.description
                        : r.description?.slice(0, 120) + "..."}
                      {r.description && (
                        <button
                          className='text-xs text-primary underline'
                          onClick={() =>
                            setExpandedIndex(
                              expandedIndex === index ? null : index
                            )
                          }
                        >
                          {expandedIndex === index ? "Show less" : "Read more"}
                        </button>
                      )}
                    </p>
                    <div className='mt-5'>
                      <Link
                        href={`${r.slug}&text=${encodeURIComponent(
                          `Hi 👋 How are you?\n\nI want to know more about this "${r.title}" service .`
                        )}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <button
                          type='submit'
                          className='focus:ring-offset-2 focus:ring-indigo-500 border-1 text-indigo inline-flex w-full items-center justify-center rounded-md border px-5 py-3 text-base font-medium leading-4 shadow-sm hover:bg-secondary hover:text-white focus:outline-none focus:ring-2'
                        >
                          Know more
                        </button>
                      </Link>
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
