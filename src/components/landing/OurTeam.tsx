/* eslint-disable @next/next/no-img-element */
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
} from "react-icons/ri";

const team = [
  {
    img: "https://fabrica.ancorathemes.com/wp-content/uploads/2023/02/image-89-copyright-1228x1536.jpg",
    name: "Bonnie Green",
    title: "Construction inspector",
    description:
      "Bonnie drives the technical strategy of the flowbite platform and brand.",
    social: [
      {
        svg: <RiFacebookFill />,
        link: "https://www.facebook.com/",
      },
      {
        svg: <RiInstagramLine />,
        link: "https://www.instagram.com/",
      },
      {
        svg: <RiTwitterXLine />,
        link: "https://twitter.com/",
      },
    ],
  },
  {
    img: "https://fabrica.ancorathemes.com/wp-content/uploads/2023/02/image-90-copyright-840x1051.jpg",
    name: "Bonnie Green",
    title: "Construction inspector",
    description:
      "Bonnie drives the technical strategy of the flowbite platform and brand.",
    social: [
      {
        svg: <RiFacebookFill />,
        link: "https://www.facebook.com/",
      },
      {
        svg: <RiInstagramLine />,
        link: "https://www.instagram.com/",
      },
      {
        svg: <RiTwitterXLine />,
        link: "https://twitter.com/",
      },
    ],
  },
];
function OurTeam() {
  return (
    <section
      className='relative bg-white h-full mx-auto container px-4 lg:px-16 xl:px-24 2xl:px-28 py-6 lg:pb-16 '
      id='our-team'
    >
      <div className='mx-auto z-50 lg:py-16 relative'>
        <div className='mx-auto text-center pb-8 '>
          <p className='text-gray-500 mb-2 '>OUR TEAM</p>
          <h2 className='mb-4 text-4xl xl:text-5xl tracking-tight font-bold text-gray-900'>
            Meet our professionals
          </h2>
        </div>
        <div className='grid gap-8 md:grid-cols-2  z-50'>
          {team?.map((r, index) => {
            return (
              <div className='items-center sm:flex' key={index}>
                <a href='#' className='flex-1'>
                  <img
                    className='w-full rounded-none'
                    src={r?.img}
                    alt={r?.name}
                  />
                </a>
                <div className='p-5 flex-1'>
                  <h3 className='text-xl font-bold tracking-tight text-gray-900 '>
                    <a href='#'>{r?.name}</a>
                  </h3>
                  <span className='text-gray-500 '>{r?.title}</span>
                  <p className='mt-3 mb-4 text-gray-500 '>{r?.description}</p>
                  <ul className='flex space-x-4 sm:mt-0'>
                    {r?.social?.map((r, index) => {
                      return (
                        <li key={index}>
                          <a
                            href={r.link}
                            target='_blank'
                            className='text-gray-500 hover:text-primary border h-10 w-10 flex items-center justify-center rounded-full transition hover:-translate-y-2'
                          >
                            {r?.svg}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='absolute left-0 bottom-0 opacity-[0.4] '>
        <img src='/constraction-decor-image-3.png' alt='' />
      </div>
    </section>
  );
}

export default OurTeam;
