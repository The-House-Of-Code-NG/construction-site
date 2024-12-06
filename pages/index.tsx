import React from 'react';

import { PageWrapper } from '@/components/PageWrapper';
import homepage from '@/data';
import HomepageHero from '@/components/home-page/Hero';
import HomepageAbout from '@/components/home-page/About';
import HomepageServices from '@/components/home-page/Services';
import HomepagePortfolio from '@/components/home-page/Portfolio';
import HomepageTestimonials from '@/components/home-page/Testimonials';

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <HomepageHero data={homepage.hero} />
      <HomepageAbout data={homepage.about} />
      <HomepageServices data={homepage.services} />
      <HomepagePortfolio data={homepage.portfolio} />
      <HomepageTestimonials data={homepage.testimonials} />
    </PageWrapper>
  );
};

export default Home;
