"use client";
import { FaArrowDownLong } from "react-icons/fa6";
import Link from "next/link";
import { BANNER } from "@/constant";

function Banner() {
  return (
    <section
      style={{
        backgroundImage: `url(${BANNER.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
      className=' relative -top-[7.5rem]'
    >
      <div className='h-full mx-auto container min-h-[calc(100vh+64px)] px-4 lg:px-16 xl:px-24 2xl:px-28 flex gap-10 flex-col justify-center'>
        <div className='w-full  max-w-lg flex-col flex gap-10'>
          <h2 className='pt-16 mb-4 text-4xl md:text-5xl tracking-tight font-bold text-white'>
            {BANNER.heading1}
            <br />
            {BANNER.heading2}
          </h2>

          <p className='mt-3 mb-4 text-white sm:text-lg flex items-center gap-2'>
            <span>
              <FaArrowDownLong
                className='text-4xl animate-bounce '
                style={{ animationDuration: "4000ms" }}
              />
            </span>
            <span>{BANNER.description}</span>
          </p>
          <Link
            href='/#about-us'
            className='btn rounded-none btn-primary text-white w-40'
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
