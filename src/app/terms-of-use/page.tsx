import React from "react";

const Page = () => {
  return (
    <div className='container mx-auto px-4 pb-5 lg:px-28 my-8'>
      <h2 className='h2 py-8 text-3xl font-bold text-center'>
        Terms and condition
      </h2>
      <hr />
      <div className='py-4'>
        <h2 className='text-primary py-2 font-semibold lg:font-bold text-lg lg:text-xl'>
          Privacy Policy
        </h2>
        <p className='text-justify'>{`At Yohan Engineering, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our platform.`}</p>
      </div>
      <div className='py-4'>
        <h2 className='text-primary py-2 font-semibold lg:font-bold text-lg lg:text-xl'>
          Information We Collect
        </h2>
        <p className='text-justify'>{`We collect personal information such as your name, email address, and payment details when you create an account or make a purchase. We also collect non-personal information like your IP address and browser type for analytical purposes.`}</p>
      </div>
      <div className='py-4'>
        <h2 className='text-primary py-2 font-semibold lg:font-bold text-lg lg:text-xl'>
          How We Use Your Information
        </h2>
        <p className='text-justify'>{`We use your personal information to process transactions, personalize your experience, and improve our platform. We may also use your email address to send you updates, promotions, and important notifications.`}</p>
      </div>
      <div className='py-4'>
        <h2 className='text-primary py-2 font-semibold lg:font-bold text-lg lg:text-xl'>
          Data Security
        </h2>
        <p className='text-justify'>{`Your data security is our priority. We implement industry-standard measures to protect your information from unauthorized access, disclosure, alteration, and destruction.`}</p>
      </div>
      <div className='py-4'>
        <h2 className='text-primary py-2 font-semibold lg:font-bold text-lg lg:text-xl'>
          Disclosure of Information
        </h2>
        <p className='text-justify'>{`We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our platform, conducting our business, or servicing you, as long as they agree to keep this information confidential.`}</p>
      </div>
      <div className='py-4'>
        <h2 className='text-primary py-2 font-semibold lg:font-bold text-lg lg:text-xl'>
          Cookies
        </h2>
        <p className='text-justify'>{`We use cookies to enhance your experience on our platform. You can choose to disable cookies through your browser settings, but this may affect some features of the site.`}</p>
      </div>
    </div>
  );
};

export default Page;
