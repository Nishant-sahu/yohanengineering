"use client";
import ContactForm from "@/components/shared/ContactForm";
import { BASIC_INFO } from "@/constant";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
} from "react-icons/ri";


function ContactHome() {
  
  return (
    <main>
      <section className='h-80 sm:h-[400px] md:h-[500px] pt-'>
        <iframe
          width='100%'
          height='100%'
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.6456964351983!2d76.95169369999999!3d29.380661600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddba60bffaea5%3A0x58c194d13219c45a!2s202%2C%20Virat%20Nagar%2C%20Panipat%2C%20Haryana%20132103!5e0!3m2!1sen!2sin!4v1711014828451!5m2!1sen!2sin'
        />
      </section>
      <section className='bg-white h-full mx-auto container px-4 lg:px-16 xl:px-24 2xl:px-28  my-6 lg:mb-16 '>
        <div className='grid sm:grid-cols-2 items-center lg:gap-16 p-8 mx-auto'>
          <div className='flex flex-col gap-6'>
            <h1 className='text-3xl xl:text-4xl tracking-tight font-bold text-gray-900'>
              Contact Details
            </h1>
            <p className='text-gray-400 mt-3'>{BASIC_INFO.location}</p>
            <a
              href={`mailto:${BASIC_INFO.email}`}
              className='text-gray-400 w-fit'
            >
              {BASIC_INFO.email}
            </a>
            <a
              href={`tel:${BASIC_INFO.contact}`}
              className='text-gray-400 w-fit'
            >
              {BASIC_INFO.contact}
            </a>
            <ul className='flex mt-3 space-x-4'>
              <li className='border hover:text-primary hover:border-primary transition-all h-10 w-10 rounded-full flex items-center justify-center'>
                <a href={BASIC_INFO.facebook}>
                  <RiFacebookFill />
                </a>
              </li>
              <li className='border hover:text-primary hover:border-primary transition-all h-10 w-10 rounded-full flex items-center justify-center'>
                <a href={BASIC_INFO.instagram}>
                  <RiInstagramLine />
                </a>
              </li>
              <li className='border hover:text-primary hover:border-primary transition-all h-10 w-10 rounded-full flex items-center justify-center'>
                <a href={BASIC_INFO.twitter}>
                  <RiTwitterXLine />
                </a>
              </li>
            </ul>
          </div>

          <div className='space-y-4 mt-3'>
            <ContactForm/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactHome;
