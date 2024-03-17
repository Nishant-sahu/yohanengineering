/* eslint-disable @next/next/no-img-element */
import { BASIC_INFO, OUR_SERVICES } from "@/constant";
import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const getFullYear = new Date().getFullYear();
  return (
    <>
      <footer
        aria-labelledby='footer-heading'
        className=' border-t border-slate-200 bg-gray-900'
      >
        <div className='container mx-auto px-4 pb-2 pt-16 sm:px-6 lg:px-28  '>
          <div className='grid grid-cols-1 space-y-10 text-[#94A3B8] md:grid-cols-2 lg:grid-cols-4 lg:space-y-0'>
            <div>
              <div>
                <Link href='/' className='flex items-center space-x-2 mb-4'>
                  <img
                    src={BASIC_INFO.logo}
                    alt={BASIC_INFO.name}
                    className='  '
                  />
                </Link>
              </div>
              <p className=' text-[#A3A9B9]'>{BASIC_INFO.metaDescription}</p>
            </div>
            <div>
              <div className='flex flex-col gap-y-4 lg:pl-12'>
                <h3 className=' font-semibold uppercase tracking-wider text-[#EAECF0]'>
                  Our Services
                </h3>
                <ul className='flex flex-col gap-y-3' role='list'>
                  {OUR_SERVICES?.map((r, index) => {
                    return (
                      <li key={index}>
                        <span className=' font-normal'>
                          <a
                            className='text-[#A3A9B9] transition-colors hover:text-blue-500'
                            href='/#services'
                          >
                            {r.title}
                          </a>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className='flex flex-col gap-y-4 lg:pl-12'>
                <h3 className=' font-semibold uppercase tracking-wider text-[#EAECF0]'>
                  Quick Link
                </h3>
                <ul className='flex flex-col gap-y-3' role='list'>
                  <li>
                    <span className=' font-normal'>
                      <Link
                        className='text-[#A3A9B9] transition-colors hover:text-blue-500'
                        href='/#about-us'
                      >
                        About us
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className=' font-normal'>
                      <Link
                        className='text-[#A3A9B9] transition-colors hover:text-blue-500'
                        href='/contact-us'
                      >
                        Contact us
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className=' font-normal'>
                      <Link
                        className='text-[#A3A9B9] transition-colors hover:text-blue-500'
                        href='/#our-team'
                      >
                        Our Team
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className=' font-normal'>
                      <Link
                        className='text-[#A3A9B9] transition-colors hover:text-blue-500'
                        href='/#what-we-do'
                      >
                        What we do
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className='flex flex-col gap-y-4'>
                <h3 className=' font-semibold uppercase tracking-wider text-[#EAECF0]'>
                  Support
                </h3>
                <ul className='flex flex-col gap-y-3' role='list'>
                  <li>
                    <span className=' font-normal'>
                      <Link
                        className='text-[#A3A9B9] transition-colors hover:text-blue-500'
                        href='/privacy-policy'
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className=' font-normal'>
                      <Link
                        className='text-[#A3A9B9] transition-colors hover:text-blue-500'
                        href='/terms-of-use'
                      >
                        Terms of use
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className=' font-normal'>
                      <Link
                        className='text-[#A3A9B9] transition-colors hover:text-blue-500'
                        href='/cookie-policy'
                      >
                        Cookie Policy
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mt-12 flex flex-col-reverse items-center justify-between space-y-3 border-t border-gray-700 pb-1 pt-4 text-[#94A3B8] md:mb-0 md:pt-8 lg:mb-6 lg:flex-row lg:space-y-0'>
            <p className='text-base font-bold '>
              © {getFullYear} , All rights reserved by{" "}
              <a
                href='/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary font-bold'
              >
                {BASIC_INFO.name}
              </a>
            </p>
            <div className='flex space-between space-x-5 items-center pb-5 lg:pb-0'>
              <a
                href={`${BASIC_INFO.facebook}`}
                target='_blank'
                rel='noopener noreferrer'
                className='border border-gray-500 hover:text-blue-500 hover:border-primary rounded-full p-2'
              >
                <BsFacebook />
              </a>
              <a
                href={`${BASIC_INFO.twitter}`}
                target='_blank'
                rel='noopener noreferrer'
                className='border border-gray-500 hover:text-blue-500 hover:border-primary rounded-full p-2'
              >
                <BsTwitter />
              </a>
              <a
                href={`${BASIC_INFO.instagram}`}
                target='_blank'
                rel='noopener noreferrer'
                className='border border-gray-500 hover:text-blue-500 hover:border-primary rounded-full p-2'
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
