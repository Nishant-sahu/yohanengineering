import Banner from "@/components/landing/Banner";
import Logo from "@/components/landing/Logo";
import OurBlog from "@/components/landing/OurBlog";
import OurTeam from "@/components/landing/OurTeam";
import Review from "@/components/landing/Review";
import WhatWeDo from "@/components/landing/WhatWeDo";
import WhatWeOffer from "@/components/landing/WhatWeOffer";
import WhoWeAre from "@/components/landing/WhoWeAre";

function Home() {
  return (
    <main>
      <Banner />
      <Logo />
      <WhoWeAre />
      <WhatWeDo />
      <WhatWeOffer />
      <Review />
      <OurTeam />
      {/* <OurBlog /> */}
    </main>
  );
}

export default Home;
