import React from 'react';

import { PageWrapper } from '@/components/PageWrapper';
import homepage from '@/data';
import HomepageHero from '@/components/home-page/Hero';
import HomepageAbout from '@/components/home-page/About';
import HomepageServices from '@/components/home-page/Services';
import HomepagePortfolio from '@/components/home-page/Portfolio';
import HomepageTestimonials from '@/components/home-page/Testimonials';
import HomepageTeam from '@/components/home-page/Teams';
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <HomepageHero data={homepage.hero} />
      <HomepageAbout data={homepage.about} />
      <HomepageServices data={homepage.engineering_services} data_ag={homepage.agricultural_services} />
      <HomepageTeam data={homepage.team} />
      <HomepagePortfolio data={homepage.portfolio} />
      {/*<HomepageTestimonials data={homepage.testimonials} />*/}
    </PageWrapper>
  );
};

export default Home;
