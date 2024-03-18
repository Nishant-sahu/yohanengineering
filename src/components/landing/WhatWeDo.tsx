/* eslint-disable @next/next/no-img-element */
"use client";
import { WHAT_WE_DO } from "@/constant";
import Link from "next/link";
import { useState } from "react";

function WhatWeDo() {
  return (
    <section className='bg-secondary py-24' id='what-we-do'>
      <div className='bg-secondary h-full mx-auto container px-4 lg:px-16 xl:px-24 2xl:px-28 my-6 mb-16 flex gap-20 flex-col xl:flex-row lg:items-center'>
        <div className='flex-1 flex flex-col text-white gap-6'>
          <p className='mb-2'>{WHAT_WE_DO.title}</p>
          <h2 className='text-4xl xl:text-[44px] tracking-tight font-bold'>
            {WHAT_WE_DO.heading}
          </h2>
          <p className='mt-3 text-gray-400'>{WHAT_WE_DO.description}</p>
          <Link href='/#services'>
            <button className='btn btn-primary rounded-none text-white capitalize w-40'>
              Services
            </button>
          </Link>
        </div>

        <div className='flex-1 w-full grid-cols-1 md:grid-cols-2 grid gap-4 xl:gap-10'>
          {WHAT_WE_DO.SERVICES?.map((r, index) => {
            return (
              <div
                key={index}
                className={`bg-white p-9 h-64 2xl:h-72 2xl:w-72 hover:bg-primary hover:text-white group relative ${
                  index % 2 == 1 ? "md:-top-6 xl:-top-8" : ""
                }`}
              >
                <div className='h-full flex flex-col justify-between'>
                  <div>
                    <img src={r?.image} alt={r?.title} className='' />
                  </div>
                  <div>
                    <h2 className='text-xl font-bold'>{r?.title}</h2>
                    {/* <h4 className='md:text-lg text-gray-500 group-hover:text-white'>
                      {r?.subtitle}
                    </h4> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
