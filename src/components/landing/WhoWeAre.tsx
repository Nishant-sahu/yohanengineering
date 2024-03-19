"use client";

import { ABOUT_US } from "@/constant";
import Link from "next/link";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
// Import Swiper styles

function WhoWeAre() {
  const [currentImage, setCurrentImage] = useState<any>(
    ABOUT_US.WHO_WE_ARE?.[0]
  );
  return (
    <section
      className='bg-white h-full mx-auto container px-4 lg:px-16 xl:px-24 2xl:px-28 my-6 mb-16 flex gap-10 flex-col md:flex-row lg:items-center relative -top-[118px] pt-16'
      id='about-us'
    >
      <div className='flex-1 xl:basis-1/2'>
        <img
          src={currentImage?.image}
          alt={currentImage?.title}
          className='lg:h-[540px] lg:pl-20'
        />
      </div>

      <div className='flex-1 xl:basis-1/2 flex flex-col gap-4 '>
        <p className='text-gray-500 mb-2'>{ABOUT_US.title}</p>
        <h2 className='text-4xl xl:text-5xl tracking-tight font-bold text-gray-900 :mb-16'>
          We are leaders in <br /> the building sector
        </h2>
        <p className='mt-3 text-gray-600'>{ABOUT_US.description}</p>
        <ul className='list-disc flex flex-col gap-4 pl-4'>
          {ABOUT_US.WHO_WE_ARE?.map((r, index) => {
            return (
              <li key={index}>
                <button
                  className={`${
                    currentImage?.id == r?.id ? "" : "opacity-60"
                  } transition-all`}
                  onClick={() => setCurrentImage(r)}
                >
                  {r?.title}
                </button>
              </li>
            );
          })}
        </ul>
        <Link href='/contact'>
          <button className='btn btn-primary rounded-none text-white capitalize w-40'>
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}

export default WhoWeAre;
