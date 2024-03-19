/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import { BASIC_INFO } from "@/constant";

const Header = () => {
  const [open, setToggle] = useState(false);

  const [isSticky, setSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");
    // console.log(body)
    if (!body) return;

    if (open) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }

    // handleScroll
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <header
      className={`pt-3 pb-4 z-[100] relative text-white ${
        pathname == "/" ? "" : "bg-secondary"
      } `}
    >
      <div className={`container mx-auto  lg:pt-2 lg:px-28 `}>
        <div className='hidden items-center justify-between lg:flex'>
          <div className='flex items-center space-x-20'>
            <div className='text-xl font-bold '>
              <Link href='/' className='flex items-center space-x-2'>
                <img
                  src={
                    pathname == "/" || pathname == "/contact"
                      ? `${BASIC_INFO.logo}`
                      : `${BASIC_INFO.logo}`
                  }
                  alt='Logo'
                  className=' w-[70px] '
                />
              </Link>
            </div>
          </div>
          <div className='hidden lg:flex items-center space-x-16'>
            <a className={`font-semibold hover:link`} href='/#about-us'>
              About Us
            </a>
            <a className={`font-semibold hover:link`} href='/#what-we-do'>
              What We Do
            </a>
            <a className={`font-semibold hover:link`} href='/#services'>
              Services
            </a>
            <a className={`font-semibold hover:link`} href='/#reviews'>
              Reviews
            </a>
            <a className={`font-semibold hover:link`} href='/#our-team'>
              Our Team
            </a>
            <Link className={`font-semibold hover:link`} href='/contact'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`py-3 top-0 z-10 flex w-full items-center justify-between px-4  lg:hidden  ${
          isSticky
            ? "sticky top-0 shadow-md transition duration-500 bg-secondary text-white"
            : ""
        }`}
      >
        {/*********************** For Mobile ********************* */}
        <div className=' font-medium text-sm xl:font-semibold lg:text-xl'>
          <Link href='/' className='flex items-center space-x-2'>
            <img
              src={
                pathname == "/" ? `${BASIC_INFO.logo}` : `${BASIC_INFO.logo}`
              }
              alt='Logo'
              className=' w-[68px] '
            />
          </Link>
        </div>
        <div className={`block lg:hidden `}>
          <AiOutlineMenu
            className={`${isSticky ? " text-white" : ""} `}
            size={27}
            onClick={() => setToggle(true)}
          />
        </div>
      </div>

      <MobileMenu open={open} setToggle={setToggle} />
    </header>
  );
};

export default Header;
