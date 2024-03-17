/* eslint-disable @next/next/no-img-element */
"use client";
import { BRAND } from "@/constant";

function Logo() {
  return (
    <section className=' relative -top-[7.5rem]'>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 '>
        {BRAND?.map((r, index) => {
          return (
            <div
              key={index}
              className='border p-10 xl:py-16 xl:px-11 opacity-40 hover:opacity-100 transition-all'
            >
              <img src={r} alt='logo' className='  ' />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Logo;
