import { Experience_Data } from "@/constant";
import CountInView from "./CountView";


const CTA = () => {
    return (
      <div className='relative h-full mx-auto container px-4 lg:px-16 xl:px-24 2xl:px-28 py-6 lg:pb-16 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center pt-10 pb-6'>
          {Experience_Data?.map((d) => (
            <div
              key={d?.title}
              className='w-full mx-auto text-center space-y-3 relative'
            >
              <CountInView count={d?.value} />
              <div className='absolute top-0  text-center w-full flex items-center justify-center h-full'>
                <p className='text-white text-xl lg:text-2xl font-medium'>
                  {d?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default CTA;