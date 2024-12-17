import React from 'react';
import { PageWrapper } from '@/components/PageWrapper';
import AnimatedTitle from '@/components/AnimatedTitle';
import homepage from '@/data';
import HomepageTeam from '@/components/home-page/Teams';
const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="pt-8 pb-10 overflow-hidden md:pb-20 lg:pt-[72px] lg:pb-[120px]">
        <div className="container mb-10 lg:mb-[128px] xl:pr-[220px]">
          <AnimatedTitle
            title={homepage.about.title}
            className="mb-10 text-alphaYellow md:mb-20 lg:mb-[192px]"
            titleClassName="text-[57px] flex-shrink-0 leading-none font-Helvetica tracking-[1.59px] sm:text-[95px] md:text-[110px] lg:text-[150px] lg:tracking-[5.59px] xl:text-[132px]"
          />
          <div className="mb-8 lg:flex lg:items-start lg:gap-[98px] lg:mb-14">
            <div className="flex items-center mb-[14px] flex-shrink-0 lg:w-[200px]">
              <div className="w-1.5 h-1.5 flex-shrink-0 bg-appText rounded-full mr-2 lg:w-2 lg:h-2 lg:mr-4" />
              <div className="text-lg text-alphaYellow leading-none font-Helvetica tracking-[-0.41px] lg:text-[32px]">
                {homepage.about.title}
              </div>
            </div>
            <div>
              <p className="text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 mb-6 lg:text-base lg:leading-[1.4] lg:mb-8">
                {homepage.about.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {homepage.about.categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex text-sm leading-none tracking-[-0.41px] text-appGray-500 font-medium px-4 py-3 border border-alphaYellow rounded-[32px] lg:text-base lg:leading-none"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <HomepageTeam data={homepage.team} />
        {/* <BCMSImage
          media={page.meta.cover}
          className="w-full cover aspect-[1.84] mb-10 lg:aspect-[2.59] lg:mb-20"
        /> */}
      </div>
    </PageWrapper>
  );
};
export default AboutPage;
