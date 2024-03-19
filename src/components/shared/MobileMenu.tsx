/* eslint-disable @next/next/no-img-element */
import { BASIC_INFO } from "@/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface MobileMenuProps {
  open: boolean;
  setToggle: (value: boolean) => void;
}

const MobileMenu = ({ open, setToggle }: MobileMenuProps) => {
  const router = useRouter();
  useEffect(() => {
    setToggle(false);
  }, [router, setToggle]);

  return (
    <div
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains("overlay")) {
          setToggle(!open);
        }
      }}
      className={`overlay fixed  left-0 top-0 z-50 h-screen w-full transition-all duration-500  
            ${open ? "bg-black/75" : "pointer-events-none bg-transparent"}`}
    >
      <div
        className={`absolute h-screen w-[75%] max-w-[375px] bg-white text-black pb-20 transition-[left] ${
          open ? "left-0" : "-left-full"
        }`}
      >
        <div className='item-center flex flex-col justify-start'>
          <div className='flex justify-between p-2 shadow-sm'>
            <div className='text-xl font-semibold '>
              <Link href='/' className='flex items-center space-x-2'>
                <img
                  src={`${BASIC_INFO.logo}`}
                  alt='logo'
                  className=' w-[95px]  '
                />
                {/* <h3 className={`text-xl font-bold text-primary`}>Gupio</h3> */}
              </Link>
            </div>
            <button onClick={() => setToggle(false)}>
              <AiOutlineClose size={28} />
            </button>
          </div>
          <hr />

          {/***************************** Nav Items  *****************************/}
          <div>
            <div className=''>
              <div className='flex flex-col space-y-4 px-3 py-5'>
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
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
